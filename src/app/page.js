import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#f9f5f0] text-[#3a3a3a] px-4">
      <div className="text-center max-w-xl">
        <h1 className="text-5xl font-serif mb-4">Wildflowers</h1>
        <p className="text-lg mb-6 tracking-wide font-light">
          Where nature brings learning to life
        </p>
        <p className="text-sm text-gray-500 mb-8 italic">
          Something beautiful is blooming soon.
        </p>
        <form className="flex flex-col sm:flex-row gap-3 justify-center">
          <input
            type="email"
            placeholder="Your email"
            className="px-4 py-2 rounded-md border border-gray-300 w-full sm:w-auto"
          />
          <button
            type="submit"
            className="bg-[#3a3a3a] text-white px-5 py-2 rounded-md hover:bg-[#2c2c2c] transition"
          >
            Notify Me
          </button>
        </form>
      </div>
    </main>
  );
}
