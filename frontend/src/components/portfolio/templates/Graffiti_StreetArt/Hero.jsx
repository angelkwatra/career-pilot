import React from "react";
import { SprayCan } from "lucide-react"; // graffiti vibe icon

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-500 via-purple-600 to-yellow-400 text-white p-8">
      <SprayCan className="w-12 h-12 mb-4 text-green-300" />
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-widest drop-shadow-lg graffiti-text">
        Graffiti StreetArt
      </h1>
      <p className="mt-6 text-lg md:text-xl max-w-2xl text-center text-gray-100">
        Bold, vibrant, and rebellious — showcase your portfolio with a street-art inspired design.
      </p>
      <div className="mt-8 flex gap-4">
        <button className="px-6 py-3 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-lg font-semibold">
          Explore My Work
        </button>
        <button className="px-6 py-3 bg-white text-black hover:bg-gray-200 rounded-lg font-semibold">
          Contact Me
        </button>
      </div>
    </section>
  );
}
