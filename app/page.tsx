"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [url, setUrl] = useState("");
  const [marketplace, setMarketplace] = useState("UAE");
  const [brand, setBrand] = useState("");
  const [message, setMessage] = useState("");
  const handleGenerate = async () => {
    const response = await fetch("/api/scrape", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url,
      }),
    });

    const data = await response.json();

    setMessage(data.markdown);
  };
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-900">
      <div className="w-full max-w-xl rounded-lg bg-white p-8 shadow">

        <h1 className="mb-6 text-3xl font-bold">
          Amazon UAE Listing Generator
        </h1>

        <div className="mb-4">
          <label className="mb-2 block font-medium">
            Manufacturer URL
          </label>

          <input
            type="text"
            placeholder="https://..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full rounded border p-2"
          />
        </div>

        <div className="mb-4">
          <label className="mb-2 block font-medium">
            Marketplace
          </label>

          <select
            value={marketplace}
            onChange={(e) => setMarketplace(e.target.value)}
            className="w-full rounded border p-2"
          >
            <option value="UAE">UAE</option>
            <option value="JP">JP</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="mb-2 block font-medium">
            Brand (Optional)
          </label>

          <input
            type="text"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="w-full rounded border p-2"
          />
        </div>

        <button
          onClick={handleGenerate}
          className="w-full rounded bg-blue-600 py-3 text-white hover:bg-blue-700"
        >
          Generate
        </button>

        {message && (
          <div className="mt-6 rounded bg-gray-100 p-4">
            <h2 className="font-semibold">Response</h2>
            <p>{message}</p>
          </div>
        )}
      </div>
    </main>
  );
}