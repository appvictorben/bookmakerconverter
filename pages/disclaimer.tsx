import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Disclaimer() {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4 text-indigo-700">Disclaimer</h1>
        <p className="text-gray-700 leading-relaxed">
          This website is not affiliated with any bookmaker or betting company. 
          All trademarks belong to their respective owners. 
          We do not encourage gambling and only provide a tool for code conversion.
        </p>
      </div>
      <Footer />
    </>
  );
}
