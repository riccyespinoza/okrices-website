import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({
    ok: true,
    route: "/api/contact",
    hasKey: Boolean(process.env.RESEND_API_KEY),
  });
}

export async function OPTIONS() {
  return NextResponse.json({ ok: true });
}

const Schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  company: z.string().optional().nullable().or(z.literal("")),
  service: z.string().optional().nullable().or(z.literal("")),
  message: z.string().min(2).max(3000),
  hp: z.string().max(0).optional().nullable(),
  locale: z.string().optional().nullable().or(z.literal("")),
});

export async function POST(req) {
  try {
    const ct = req.headers.get("content-type") || "";
    if (!ct.includes("application/json")) {
      return NextResponse.json(
        { ok: false, error: "CONTENT_TYPE" },
        { status: 415 }
      );
    }

    const payload = await req.json();
    const parsed = Schema.safeParse(payload);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "INVALID_INPUT" },
        { status: 400 }
      );
    }

    const { hp, locale, ...data } = parsed.data;
    if (hp) return NextResponse.json({ ok: true });

    const lang = (locale || "").toLowerCase().startsWith("es") ? "es" : "en";

    const subjectAdmin = `New contact — ${data.name}${data.company ? ` @ ${data.company}` : ""}`;
    const htmlAdmin = `
      <h2>New inquiry</h2>
      <p><b>Name:</b> ${data.name}</p>
      <p><b>Email:</b> ${data.email}</p>
      ${data.company ? `<p><b>Company:</b> ${data.company}</p>` : ""}
      ${data.service ? `<p><b>Service:</b> ${data.service}</p>` : ""}
      <p><b>Message:</b></p>
      <p style="white-space:pre-line">${data.message}</p>
    `;

    const subjectUser =
      lang === "es"
        ? "Hemos recibido tu mensaje — Okrices"
        : "We received your message — Okrices";

    const htmlUser =
      lang === "es"
        ? `
        <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;line-height:1.6">
          <h2>¡Gracias por contactarnos, ${escapeHtml(data.name)}!</h2>
          <p>Hemos recibido tu mensaje y nuestro equipo te responderá muy pronto.</p>
          <hr />
          <p style="margin:0 0 4px"><b>Resumen de tu mensaje</b></p>
          <p style="white-space:pre-line">${escapeHtml(data.message)}</p>
          <p style="color:#94a3b8;font-size:12px;margin-top:16px">Okrices · hello@okrices.com</p>
        </div>`
        : `
        <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;line-height:1.6">
          <h2>Thanks for reaching out, ${escapeHtml(data.name)}!</h2>
          <p>We’ve received your message and our team will get back to you shortly.</p>
          <hr />
          <p style="margin:0 0 4px"><b>Your message</b></p>
          <p style="white-space:pre-line">${escapeHtml(data.message)}</p>
          <p style="color:#94a3b8;font-size:12px;margin-top:16px">Okrices · hello@okrices.com</p>
        </div>`;

    const resend = new Resend(process.env.RESEND_API_KEY);
    const from = process.env.CONTACT_FROM || "hello@okrices.com";
    const toAdmin = process.env.CONTACT_TO || "hello@okrices.com";
    const fromHeader = `Okrices <${from}>`;

    const notif = await resend.emails.send({
      from: fromHeader,
      to: toAdmin,
      subject: subjectAdmin,
      html: htmlAdmin,
      reply_to: data.email,
    });

    if (notif?.error) {
      console.error("RESEND notif error:", notif.error);
      return NextResponse.json(
        { ok: false, error: "RESEND_ERROR" },
        { status: 502 }
      );
    }

    try {
      await resend.emails.send({
        from: fromHeader,
        to: data.email,
        subject: subjectUser,
        html: htmlUser,
        reply_to: from,
      });
    } catch (autoErr) {
      console.warn("Auto-reply failed:", autoErr);
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("contact-api error:", e);
    return NextResponse.json(
      { ok: false, error: "SERVER_ERROR" },
      { status: 500 }
    );
  }
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
