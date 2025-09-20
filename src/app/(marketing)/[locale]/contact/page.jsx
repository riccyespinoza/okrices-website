import { buildMetadata } from "@/lib/seo/metadata";
import { getDic } from "@/lib/i18n/config";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export async function generateMetadata({ params }) {
  const t = getDic(params.locale);
  return buildMetadata({
    title: t.pages.contact.title,
    path: `/${params.locale}/contact`,
    // images: ["/images/og-contact.jpg"],
  });
}

export default function ContactPage() {
  return (
    <main id="main-content" className="py-24 md:py-32">
      <ContactHero />

      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <div className="lg:col-span-1">
            <ContactInfo />
          </div>
        </div>
      </section>
    </main>
  );
}
