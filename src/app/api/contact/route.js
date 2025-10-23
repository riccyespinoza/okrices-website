// src/app/api/contact/route.js
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// ✅ GET de diagnóstico (puedes borrarlo cuando todo funcione)
export async function GET() {
  const hasKey = Boolean(process.env.RESEND_API_KEY);
  const from = process.env.CONTACT_FROM || "hello@okrices.com";
  return NextResponse.json({ ok: true, route: "/api/contact", hasKey, from });
}

// ✅ OPTIONS por si hay preflight (CORS) en el futuro
export async function OPTIONS() {
  return NextResponse.json({ ok: true });
}

// 🛡️ Validación de payload
const Schema = z.object({
  name: z.string().min(2, "Nombre demasiado corto").max(100),
  email: z.string().email("Correo inválido"),
  company: z.string().optional().nullable().or(z.literal("")),
  service: z.string().optional().nullable().or(z.literal("")),
  message: z.string().min(2, "Mensaje muy corto").max(3000),
  hp: z.string().max(0).optional().nullable(),
});

export async function POST(req) {
  try {
    // Content-Type seguro
    const ct = req.headers.get("content-type") || "";
    if (!ct.includes("application/json")) {
      return NextResponse.json(
        { ok: false, error: "CONTENT_TYPE" },
        { status: 415 }
      );
    }

    // Parse + validación
    const payload = await req.json();
    const parsed = Schema.safeParse(payload);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "INVALID_INPUT" },
        { status: 400 }
      );
    }

    const { hp, ...data } = parsed.data;
    if (hp) return NextResponse.json({ ok: true }); // bot atrapado

    // ✉️ Preparación de email
    const subject = `Nuevo mensaje de ${data.name}${data.company ? " @ " + data.company : ""}`;
    const html = `
      <h2>Nuevo mensaje desde el formulario de Okrices</h2>
      <p><b>Nombre:</b> ${data.name}</p>
      <p><b>Email:</b> ${data.email}</p>
      ${data.company ? `<p><b>Empresa:</b> ${data.company}</p>` : ""}
      ${data.service ? `<p><b>Servicio:</b> ${data.service}</p>` : ""}
      <p><b>Mensaje:</b></p>
      <p style="white-space:pre-line">${data.message}</p>
    `;

    const from = process.env.CONTACT_FROM || "hello@okrices.com";
    const to = process.env.CONTACT_TO || "hello@okrices.com";
    const fromHeader = `Okrices <${from}>`; // formato recomendado

    // 🔑 Instanciar Resend dentro del handler (evita fallos en GET)
    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
      const result = await resend.emails.send({
        from: fromHeader,
        to,
        subject,
        html,
        reply_to: data.email,
      });

      if (process.env.NODE_ENV !== "production") {
        console.log("RESEND OK:", result?.id);
      }

      return NextResponse.json({ ok: true });
    } catch (err) {
      // Error propio de Resend (credenciales, dominio, from no verificado, etc.)
      const msg = err?.message || err?.name || "RESEND_ERROR";
      console.error("RESEND FAIL:", err);
      return NextResponse.json({ ok: false, error: msg }, { status: 502 });
    }
  } catch (e) {
    console.error("contact-api error:", e);
    return NextResponse.json(
      { ok: false, error: "SERVER_ERROR" },
      { status: 500 }
    );
  }
}
