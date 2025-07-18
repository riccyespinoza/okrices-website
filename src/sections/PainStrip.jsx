import { motion } from "framer-motion";

export default function PainStrip() {
  return (
    <motion.section
      className="bg-[#a55130] text-dark flex flex-col items-center justify-center text-center py-24 px-6 space-y-6"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl sm:text-4xl font-semibold max-w-3xl">
        Frustrated by an inconsistent brand or an under-performing site?
        {/* ¿Tu marca se siente… */}
      </h2>
      <p className="max-w-2xl">
        Our research-driven process crafts visual systems that grow with your
        business.
        {/* Nuestro proceso… */}
      </p>
    </motion.section>
  );
}
