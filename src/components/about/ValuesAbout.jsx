import {
  FaCheckCircle,
  FaPalette,
  FaFeather,
  FaBullseye,
  FaPuzzlePiece,
} from "react-icons/fa";

const icons = [
  FaCheckCircle, // Professionalism
  FaPalette, // Creativity
  FaFeather, // Elegance
  FaBullseye, // Precision
  FaPuzzlePiece, // Adaptability
];

export default function ValuesAbout({ values, title = "Our Values" }) {
  return (
    <section className="bg-primary py-24 px-4">
      <h3 className="text-center text-3xl md:text-4xl font-bold mb-14">
        {title}
      </h3>

      <div className="grid gap-8 md:grid-cols-5 max-w-6xl mx-auto">
        {values.map((v, i) => {
          const Icon = icons[i];
          return (
            <div
              key={v.label}
              className="bg-white/5 backdrop-blur-sm border border-white/10
                         rounded-xl p-6 text-center hover:scale-105 transition"
            >
              <Icon className="text-accent text-3xl mb-3 mx-auto" />
              <h4 className="font-semibold text-light mb-2">{v.label}</h4>
              <p className="text-gray-300 text-sm">{v.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
