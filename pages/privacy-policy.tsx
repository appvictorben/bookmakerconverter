import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Privacy() {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4 text-indigo-700">Privacy Policy</h1>
        <p className="text-gray-700 leading-relaxed">
          We respect your privacy. We do not collect or store personal information. 
          Conversion data is processed in real time and not retained on our servers.
        </p>
      </div>
      <Footer />
    </>
  );
}
