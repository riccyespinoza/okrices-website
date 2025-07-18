export default function TimelineAbout({ founder, history }) {
  return (
    <section className="py-12 px-4 flex justify-center">
      <div className="max-w-2xl w-full bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl border border-white/10 p-8 text-center">
        <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-primary drop-shadow">
          Our Story
        </h3>
        <p className="text-lg md:text-xl mb-6 text-gray-200">{history}</p>
        <div className="flex flex-col items-center mt-8">
          <div className="flex items-center gap-3">
            <span className="w-14 h-14 rounded-full bg-primary-500 inline-block border-2 border-white/30"></span>
            <div className="text-left">
              <p className="font-medium text-white/80">Founded by</p>
              <p className="font-bold text-white">{founder}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
