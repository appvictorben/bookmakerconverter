export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-16">
      <div className="max-w-6xl mx-auto text-center text-sm space-y-2">
        <p>© {new Date().getFullYear()} Bookmaker Converter. All rights reserved.</p>
        <p>
          Built with ❤️ using <span className="text-indigo-400">Next.js</span> and{" "}
          <span className="text-indigo-400">TailwindCSS</span>.
        </p>
      </div>
    </footer>
  );
}
