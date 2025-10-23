import ConverterForm from "../components/ConverterForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-linear-to-r from-indigo-600 to-blue-500 text-white py-20">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Convert Betting Codes Across Bookmakers Instantly
          </h1>
          <p className="text-lg mb-8 text-indigo-100">
            Your universal bookmaker code translator. Fast, accurate, and free.
          </p>
          <a
            href="#converter"
            className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-100"
          >
            Try the Converter ↓
          </a>
        </div>
      </section>

      {/* Converter Section */}
      <section id="converter" className="py-16 bg-gray-50">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">
          Bookmaker Code Converter
        </h2>
        <ConverterForm />
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-4 text-center">
          <div>
            <h3 className="font-semibold text-indigo-700 mb-2">🌍 Multi-Bookmaker Support</h3>
            <p className="text-gray-600 text-sm">
              Convert codes between 1xBet, Bet9ja, SportyBet, Betway, and many others.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-indigo-700 mb-2">⚡ Instant Conversion</h3>
            <p className="text-gray-600 text-sm">
              Get your converted code in seconds with real-time backend logic.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-indigo-700 mb-2">🔒 Privacy Protected</h3>
            <p className="text-gray-600 text-sm">
              No personal data stored — all conversions happen securely and privately.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
