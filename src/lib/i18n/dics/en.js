export default {
  cta: {
    title: "Let’s talk about your brand",
    description:
      "A brand shouldn’t just look good: it must work, evolve, and deliver real results.",
    primary: "Start Your Project",
    secondary: "See Projects",
  },
  pages: {
    home: {
      title: "Home",
      hero: {
        title: "Beyond the brand.",
        subclaim:
          "We create visual identities and digital experiences that turn ideas into clear, functional brands ready to grow.",
        primary: { label: "Start your project", href: "/contact" },
        secondary: { label: "View portfolio", href: "/projects" },
      },
      projects: {
        title: "Featured Projects",
        intro:
          "Each project reflects our way of working: clear design, defined purpose, and results that create real value.",
        examples: [
          "From a logo to a complete visual system that strengthened their positioning.",
          "A strategic website that expanded their reach and increased client acquisition.",
        ],
        cta: { label: "View all", href: "/projects" },
      },
      why: {
        title: "Why Okrices?",
        intro:
          "We don’t design for aesthetics. We design with purpose: every detail responds to a business objective.",
        bullets: [
          "Visual identities that communicate with clarity.",
          "Websites that turn visitors into clients.",
          "Strategy designed for real business growth.",
          "Guidance at every step, from idea to results.",
        ],
        cta: { label: "Discover our process", href: "/services" },
      },
      services: {
        title: "Our Services",
        intro:
          "At Okrices, we design visual and digital solutions built to grow alongside your business.",
        items: [
          {
            title: "Strategic Branding",
            description:
              "We create clear and consistent visual identities that inspire trust and purpose from the first interaction.",
          },
          {
            title: "Web Development",
            description:
              "We design elegant and functional websites that attract your audience and turn visits into real clients.",
          },
        ],
        cta: { label: "View services", href: "/services" },
      },
      testimonials: {
        title: "What our clients say",
        quotes: [
          "Okrices transformed our identity into a real growth tool.",
          "Our new website doesn’t just look better: it now attracts new clients every week.",
          "A clear, professional process that made everything simpler.",
        ],
      },
      aboutMini: {
        title: "About Okrices",
        text: "Okrices is a branding and web development studio based in South Florida. We create clear identities and functional websites that inspire trust and support each business’s growth.",
        cta: { label: "Our approach", href: "/about" },
      },
      ctaFinal: {
        title: "Let’s talk about your brand",
        text: "A brand shouldn’t just look good: it must work, evolve, and deliver real results.",
        primary: { label: "Schedule consultation", href: "/contact" },
        secondary: { label: "View services", href: "/services" },
      },
    },

    projects: { title: "Projects" },

    contact: {
      title: "Contact",
      hero: {
        title: "Let’s talk about your brand",
        text: "Your next stage starts here. A space to transform how your brand communicates, grows, and presents itself to the world.",
        ctaLabel: "Send message",
      },
      form: {
        title: "Send us a message",
        fields: {
          name: { label: "Full name *", placeholder: "Your name" },
          email: { label: "Email *", placeholder: "you@example.com" },
          company: { label: "Company (optional)", placeholder: "Your company" },
          service: { label: "Service of interest" },
          message: {
            label: "Message *",
            placeholder: "Tell us briefly about your project",
          },
        },
        serviceOptions: ["Branding", "Web Development", "Both", "Not sure yet"],
        submitLabel: "Send message",
      },
      info: {
        title: "Or if you prefer, contact us directly:",
        email: "contact@okrices.com",
        location: "Fort Lauderdale, Florida",
      },
      closing: {
        title: "Every project starts with a conversation.",
        ctaLabel: "Let’s talk about your brand",
      },
    },

    about: {
      title: "About",
      hero: {
        title: "About Okrices",
        subtitle: "Premium Visual Identity & Web Studio",
        description:
          "Okrices is a branding and web development studio based in South Florida with international reach. We create clear brands and functional digital platforms that inspire trust and support business growth.",
      },
      philosophy: {
        title: "Our Philosophy",
        text: "For us, design is a means, not the end. Every project is built with strategy, ensuring the brand works in practice, connects with the right people, and remains relevant over time.",
      },
      approach: {
        title: "Our Approach",
        items: [
          "We listen to your business to understand what you truly need.",
          "We design clear and consistent identities.",
          "We build websites that are easy to use and purposeful.",
          "We support you throughout your business growth journey.",
        ],
      },
      values: {
        title: "What Defines Us",
        items: [
          {
            label: "Clarity",
            desc: "We design to communicate clearly and effectively.",
          },
          { label: "Trust", desc: "We create solid and consistent solutions." },
          {
            label: "Growth",
            desc: "Every action is aimed at driving your business forward.",
          },
          {
            label: "Innovation",
            desc: "We combine creativity and strategy in every project.",
          },
        ],
      },
      cta: {
        title: "Let’s talk about your brand",
        description:
          "We are here to help you take your brand to the next level.",
      },
    },

    services: {
      title: "Services",
      hero: {
        description:
          "We design brands and websites with purpose: visual and digital solutions that inspire trust and support your business growth.",
        ctaLabel: "View portfolio",
      },
      branding: {
        title: "Strategic Branding",
        intro:
          "We create visual identities that reflect coherence and trust. Our process doesn’t end with a logo: we deliver an adaptable system that allows you to communicate clearly and stay consistent across every touchpoint.",
        options: [
          {
            title: "Essential Identity",
            description:
              "Logo, color palette, typography, and initial applications (cards, signatures, social media).",
          },
          {
            title: "Brand System",
            description:
              "Full visual identity with a simple brand guide, templates, and consistency across all formats.",
          },
          {
            title: "Advanced Branding",
            description:
              "Brand strategy, visual storytelling, and resources tailored for competitive markets.",
          },
        ],
        ctaLabel: "Request proposal",
      },
      web: {
        title: "Web Development",
        intro:
          "We design elegant and functional websites tailored to each business’s needs. From fast, easy-to-manage solutions to high-performance custom platforms.",
        options: [
          {
            title: "Practical Website",
            description:
              "WordPress, Wix, or Squarespace. Informational websites ready quickly, easy for clients to manage.",
          },
          {
            title: "E-commerce",
            description:
              "Shopify or WooCommerce. Online stores with catalog, cart, payments, and shipping integrations.",
          },
          {
            title: "Custom Website",
            description:
              "Next.js or other custom development. Unique design, advanced SEO, and tailored functionalities.",
          },
        ],
        ctaLabel: "View web portfolio",
      },
      closing: {
        title: "Let’s talk about your brand",
        description:
          "Not every brand needs the same. We help you find the solution that’s right for your business.",
      },
    },
  },
};
