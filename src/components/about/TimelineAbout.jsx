export default function TimelineAbout({ founder, history }) {
  return (
    <section className="py-20 px-4 max-w-3xl mx-auto text-center">
      <h3 className="text-3xl md:text-4xl font-bold mb-6 text-light drop-shadow">
        Our&nbsp;<span className="text-accent">Story</span>
      </h3>

      <p className="text-lg md:text-xl mb-10 text-gray-300">{history}</p>

      <div className="flex flex-col items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center text-light text-xl font-bold">
          {founder[0]}
        </div>
        <p className="font-semibold text-light">{founder}</p>
        <span className="text-gray-400">Founder</span>
      </div>
    </section>
  );
}
