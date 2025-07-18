import {
  FaCheckCircle,
  FaPalette,
  FaFeather,
  FaBullseye,
  FaPuzzlePiece,
} from "react-icons/fa";

const valuesIcons = [
  <FaCheckCircle className="text-primary-400" />, // Professionalism
  <FaPalette className="text-primary-400" />, // Creativity
  <FaFeather className="text-primary-400" />, // Elegance
  <FaBullseye className="text-primary-400" />, // Precision
  <FaPuzzlePiece className="text-primary-400" />, // Adaptability
];

export default function ValuesAbout({ values, title = "Our Values" }) {
  return (
    <section className="py-16 px-4 flex justify-center">
      <div className="max-w-5xl w-full bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl border border-white/10 p-8">
        <h3 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-primary drop-shadow">
          {title}
        </h3>
        <div className="grid md:grid-cols-5 gap-8">
          {values.map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="mb-3 text-3xl">{valuesIcons[i]}</span>
              <p className="font-bold mb-1 text-light">{item.label}</p>
              <span className="text-sm text-gray-300 text-center">
                {item.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
