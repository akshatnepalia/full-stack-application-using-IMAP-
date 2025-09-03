import React, { useState } from "react";

function Dashboard() {
  const [headers, setHeaders] = useState("");
  const [chain, setChain] = useState([]);
  const [esp, setEsp] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://your-backend.onrender.com/process-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ headers }),
      });

      const data = await res.json();
      setChain(data.chain);
      setEsp(data.esp);
    } catch (err) {
      console.error("Error processing email:", err);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Email Flow Dashboard</h1>

      {/* Input form */}
      <form onSubmit={handleSubmit} className="mb-6">
        <textarea
          className="w-full p-3 border rounded mb-3"
          rows="6"
          placeholder="Paste email headers here..."
          value={headers}
          onChange={(e) => setHeaders(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Process Email
        </button>
      </form>

      {/* ESP type */}
      {esp && (
        <div className="mb-4">
          <span className="font-semibold">Detected ESP:</span>{" "}
          <span className="px-2 py-1 bg-green-100 text-green-700 rounded">
            {esp}
          </span>
        </div>
      )}

      {/* Chain display */}
      {chain.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold mb-2">Receiving Chain:</h2>
          <ul className="space-y-2">
            {chain.map((hop, idx) => (
              <li
                key={idx}
                className="p-3 border rounded shadow-sm bg-gray-50"
              >
                <span className="font-semibold">Hop {hop.hop}:</span>{" "}
                {hop.detail}
                <br />
                <small className="text-gray-500">{hop.timestamp}</small>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
