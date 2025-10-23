import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4 text-indigo-700">About Us</h1>
        <p className="text-gray-700 leading-relaxed">
          Bookmaker Converter is an innovative web tool designed to help bettors convert betting codes 
          between popular bookmakers across multiple regions. Our goal is to simplify your betting 
          experience by bridging the gap between platforms like 1xBet, Bet9ja, Betway, and more.
        </p>
      </div>
      <Footer />
    </>
  );
}
