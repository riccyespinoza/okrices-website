import { buildMetadata } from "@/lib/seo/metadata";
import { getDic } from "@/lib/i18n/config";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactCTA from "@/components/contact/ContactCTA";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

export async function generateMetadata({ params }) {
  const t = getDic(params.locale);
  return buildMetadata({
    title: t.pages.contact.title,
    path: `/${params.locale}/contact`,
  });
}

export default function ContactPage({ params }) {
  const locale = params.locale;

  return (
    <main id="main-content" className="text-light">
      <ContactHero locale={locale} />

      {/* FORM + INFO */}
      <Section spacing="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ContactForm locale={locale} />
            </div>
            <div className="lg:col-span-1">
              <ContactInfo locale={locale} />
            </div>
          </div>
        </Container>
      </Section>

      <ContactCTA locale={locale} />
    </main>
  );
}
