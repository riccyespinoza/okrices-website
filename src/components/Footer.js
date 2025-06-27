export default function Footer() {
  return (
    <footer className="bg-darkgray text-mutedgray text-sm px-6 py-8 mt-12">
      <div className="max-w-6xl mx-auto text-center">
        © {new Date().getFullYear()} Okrices. All rights reserved.
      </div>
    </footer>
  );
}
