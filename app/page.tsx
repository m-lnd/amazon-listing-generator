import Image from "next/image";

export default function Home() {
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
            className="w-full rounded border p-2"
          />
        </div>

        <div className="mb-4">
          <label className="mb-2 block font-medium">
            Marketplace
          </label>

          <select className="w-full rounded border p-2">
            <option>UAE</option>
            <option>JP</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="mb-2 block font-medium">
            Brand (Optional)
          </label>

          <input
            type="text"
            className="w-full rounded border p-2"
          />
        </div>

        <button className="w-full rounded bg-blue-600 py-3 text-white">
          Generate
        </button>

      </div>
    </main>
  );
}