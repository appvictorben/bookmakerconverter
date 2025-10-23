import { useState, useEffect } from "react";
import axios from "axios";

export default function ConverterForm() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [code, setCode] = useState("");
  const [result, setResult] = useState<any>(null);
  const [bookmakers, setBookmakers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get<any[]>("/api/bookmakers")
      .then(res => setBookmakers(res.data))
      .catch(() => setBookmakers([
        { code: "1xbet:ng", name: "1xbet - Nigeria" },
        { code: "bet9ja", name: "Bet9ja" }
      ]));
  }, []);

  const convert = async () => {
    setLoading(true);
    const res = await axios.post("/api/proxy/convert", { from, to, code });
    setResult(res.data);
    setLoading(false);
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold text-indigo-700 mb-4 text-center">
        Convert Your Code
      </h2>
      <div className="grid gap-3">
        <select value={from} onChange={e => setFrom(e.target.value)} className="border rounded-md p-2">
          <option value="">From Bookmaker</option>
          {bookmakers.map(b => <option key={b.code} value={b.code}>{b.name}</option>)}
        </select>
        <select value={to} onChange={e => setTo(e.target.value)} className="border rounded-md p-2">
          <option value="">To Bookmaker</option>
          {bookmakers.map(b => <option key={b.code} value={b.code}>{b.name}</option>)}
        </select>
        <input
          placeholder="Enter Code"
          value={code}
          onChange={e => setCode(e.target.value)}
          className="border rounded-md p-2"
        />
        <button
          onClick={convert}
          disabled={loading}
          className="bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
        >
          {loading ? "Converting..." : "Convert"}
        </button>
      </div>
      {result && (
        <div className="mt-4 bg-green-50 border p-3 rounded text-sm">
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
