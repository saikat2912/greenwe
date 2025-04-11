import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          Greenwe
        </Link>

        <nav className="space-x-6 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-indigo-600">Home</Link>
          <Link href="/#services" className="hover:text-indigo-600">Services</Link>
          <Link href="/portfolio" className="hover:text-indigo-600">Portfolio</Link>
          <Link href="/about" className="hover:text-indigo-600">About</Link>
          <Link href="/contact" className="hover:text-indigo-600">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
