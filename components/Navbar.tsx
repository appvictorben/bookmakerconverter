import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-indigo-700 text-white py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-xl font-bold tracking-wide">
          🎯 Bookmaker Converter
        </Link>
        <div className="space-x-6 text-sm font-medium">
          <Link href="/" className="hover:text-indigo-200">Home</Link>
          <Link href="/about" className="hover:text-indigo-200">About</Link>
          <Link href="/disclaimer" className="hover:text-indigo-200">Disclaimer</Link>
          <Link href="/privacy-policy" className="hover:text-indigo-200">Privacy</Link>
          <Link href="/contact" className="hover:text-indigo-200">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
