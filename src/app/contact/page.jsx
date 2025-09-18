// src/app/contact/page.jsx
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export const metadata = {
  title: "Contact – Okrices",
  description:
    "Contact web designer Florida, hire branding expert Fort Lauderdale. Start your branding or web project with Okrices.",
};

export default function ContactPage() {
  return (
    <main id="main-content" className="py-24 md:py-32">
      {/* HERO con el mismo estilo/animación que Branding/Web */}
      <ContactHero />

      {/* Layout principal: 2 columnas (form) + (info) */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Columna izquierda (2/3): Formulario */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Columna derecha (1/3): Información y enlaces */}
          <div className="lg:col-span-1">
            <ContactInfo />
          </div>
        </div>
      </section>
    </main>
  );
}

// /* src/app/contact/page.jsx
//    Propósito: ofrecer dos formularios distintos en la misma vista.
//    - Diseño responsivo (mobile → stacked, desktop → side-by-side)
//    - Sin backend todavía: usa Formspree como placeholder.
// */

// export const metadata = {
//   title: "Contact – Okrices",
//   description:
//     "Start your branding or web project with Okrices or just say hello.",
// };

// export default function ContactPage() {
//   return (
//     <main className="max-w-5xl mx-auto px-6 py-16 space-y-16">
//       {/* Encabezado */}
//       <header className="text-center space-y-4">
//         <h1 className="text-3xl md:text-4xl font-extrabold text-primary">
//           Let’s work together
//         </h1>
//         <p className="text-text-muted max-w-2xl mx-auto">
//           Choose the form that fits your needs. We reply within 24&nbsp;hours.
//         </p>
//       </header>

//       {/* Contenedor flex para ambas rutas */}
//       <div className="flex flex-col md:flex-row gap-10">
//         {/* Project Inquiry */}
//         <section className="flex-1 bg-background/80 border border-white/10 rounded-xl p-6 space-y-6">
//           <h2 className="text-xl font-semibold text-light">
//             1. Project Inquiry
//           </h2>
//           <form
//             action="https://formspree.io/f/your-id-here"
//             method="POST"
//             className="space-y-4"
//           >
//             <div>
//               <label htmlFor="p-name" className="block text-sm mb-1">
//                 Name
//               </label>
//               <input
//                 id="p-name"
//                 name="name"
//                 required
//                 placeholder="Your name"
//                 className="w-full p-2 bg-background border border-mutedgray rounded-md text-light"
//               />
//             </div>

//             <div>
//               <label htmlFor="p-email" className="block text-sm mb-1">
//                 Email
//               </label>
//               <input
//                 id="p-email"
//                 type="email"
//                 name="email"
//                 required
//                 placeholder="you@example.com"
//                 className="w-full p-2 bg-background border border-mutedgray rounded-md text-light"
//               />
//             </div>

//             {/* Tipo de proyecto */}
//             <div>
//               <label htmlFor="type" className="block text-sm mb-1">
//                 Project type
//               </label>
//               <select
//                 id="type"
//                 name="type"
//                 className="w-full p-2 bg-background border border-mutedgray rounded-md text-light"
//               >
//                 <option>Brand Identity</option>
//                 <option>Web Design / Dev</option>
//                 <option>Both (Full Package)</option>
//                 <option>Other</option>
//               </select>
//             </div>

//             {/* Presupuesto */}
//             <div>
//               <label htmlFor="budget" className="block text-sm mb-1">
//                 Estimated budget (USD)
//               </label>
//               <select
//                 id="budget"
//                 name="budget"
//                 className="w-full p-2 bg-background border border-mutedgray rounded-md text-light"
//               >
//                 <option>Less than $2,000</option>
//                 <option>$2,000 – $5,000</option>
//                 <option>$5,000 – $10,000</option>
//                 <option>$10,000+</option>
//               </select>
//             </div>

//             {/* Mensaje */}
//             <div>
//               <label htmlFor="details" className="block text-sm mb-1">
//                 Project details
//               </label>
//               <textarea
//                 id="details"
//                 name="details"
//                 rows={4}
//                 placeholder="Tell us about your goals, timeline, references…"
//                 className="w-full p-2 bg-background border border-mutedgray rounded-md text-light"
//               />
//             </div>

//             <button
//               type="submit"
//               className="bg-accent text-white px-6 py-2 rounded-md hover:opacity-90 transition"
//             >
//               Send Project Brief
//             </button>
//           </form>
//         </section>

//         {/* Say Hello */}
//         <section className="flex-1 bg-background/80 border border-white/10 rounded-xl p-6 space-y-6">
//           <h2 className="text-xl font-semibold text-light">
//             2. Just Say Hello
//           </h2>
//           <form
//             action="https://formspree.io/f/your-id-here"
//             method="POST"
//             className="space-y-4"
//           >
//             <div>
//               <label htmlFor="h-name" className="block text-sm mb-1">
//                 Name
//               </label>
//               <input
//                 id="h-name"
//                 name="name"
//                 required
//                 placeholder="Your name"
//                 className="w-full p-2 bg-background border border-mutedgray rounded-md text-light"
//               />
//             </div>

//             <div>
//               <label htmlFor="h-email" className="block text-sm mb-1">
//                 Email
//               </label>
//               <input
//                 id="h-email"
//                 type="email"
//                 name="email"
//                 required
//                 placeholder="you@example.com"
//                 className="w-full p-2 bg-background border border-mutedgray rounded-md text-light"
//               />
//             </div>

//             <div>
//               <label htmlFor="h-message" className="block text-sm mb-1">
//                 Message
//               </label>
//               <textarea
//                 id="h-message"
//                 name="message"
//                 rows={4}
//                 required
//                 placeholder="What’s on your mind?"
//                 className="w-full p-2 bg-background border border-mutedgray rounded-md text-light"
//               />
//             </div>

//             <button
//               type="submit"
//               className="bg-accent text-white px-6 py-2 rounded-md hover:opacity-90 transition"
//             >
//               Say Hi 👋
//             </button>
//           </form>
//         </section>
//       </div>
//     </main>
//   );
// }
