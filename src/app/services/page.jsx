import Link from "next/link";

export default function Services() {
  // Datos temporales mientras solucionas el problema principal
  const services = [
    {
      id: 1,
      title: "Web Design",
      description: "Custom web design solutions",
      slug: "web-design",
    },
    {
      id: 2,
      title: "Branding",
      description: "Complete brand identity",
      slug: "branding",
    },
  ];

  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Our Services</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services && services.length > 0 ? (
            services.map((service) => (
              <div key={service.id} className="p-6 border rounded-lg">
                <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
                <p className="mb-4">{service.description}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-blue-600 hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            ))
          ) : (
            <p>No services available at the moment.</p>
          )}
        </div>
      </div>
    </main>
  );
}
