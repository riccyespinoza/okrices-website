export default function Home() {
  return (
    <div className="bg-red-500 p-8 min-h-screen">
      <h1 className="text-white text-4xl font-bold mb-4">
        ¡Tailwind CSS está funcionando!
      </h1>
      <p className="text-yellow-300 text-xl mb-6">
        Si ves fondo rojo y este texto amarillo, todo está bien.
      </p>

      {/* Usando nombres de colores simplificados */}
      <div className="bg-primary p-6 rounded-lg mb-4">
        <h2 className="text-white text-2xl font-bold">
          Color Personalizado Terracota
        </h2>
        <p className="text-white/80">
          Este div debería ser TERRACOTA (#d4825a)
        </p>
      </div>

      <div className="bg-background p-6 rounded-lg border border-gray-400">
        <h2 className="text-text-primary text-2xl font-bold">
          Fondo Personalizado Oscuro
        </h2>
        <p className="text-text-muted">Este div debería ser NEGRO (#020617)</p>
      </div>
    </div>
  );
}
