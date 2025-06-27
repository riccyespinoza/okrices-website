export default function ContactPage() {
  return (
    <section className="max-w-4xl mx-auto py-16">
      <h1 className="text-3xl font-semibold mb-6">Contact</h1>
      <p className="text-text-muted mb-6">
        Ready to work together or just want to say hi? Use the form below or
        email us at{" "}
        <a href="mailto:hello@okrices.com" className="text-accent underline">
          hello@okrices.com
        </a>
        .
      </p>

      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm mb-1">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your name"
            className="w-full p-2 bg-background border border-mutedgray rounded-md text-light"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            className="w-full p-2 bg-background border border-mutedgray rounded-md text-light"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm mb-1">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Write your message here..."
            rows={4}
            className="w-full p-2 bg-background border border-mutedgray rounded-md text-light"
          />
        </div>

        <button
          type="submit"
          className="bg-accent text-white px-6 py-2 rounded-md hover:opacity-90 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
