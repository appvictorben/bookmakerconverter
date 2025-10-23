import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4 text-indigo-700">Contact Us</h1>
        <p className="text-gray-700 mb-4">
          Have questions or feedback? Reach out to us via email.
        </p>
        <a
          href="mailto:support@bookmakerconverter.com"
          className="text-indigo-600 font-medium hover:underline"
        >
          support@bookmakerconverter.com
        </a>
      </div>
      <Footer />
    </>
  );
}
