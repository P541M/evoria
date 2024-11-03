import React from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-center px-4">
      <h1 className="text-5xl font-serif font-bold text-gray-800 mb-4">
        Welcome to Scentful Stories
      </h1>
      <p className="text-lg text-gray-600 mb-8 max-w-md">
        Discover a curated selection of personalized fragrance journeys, each
        crafted to capture the unique essence of an individual. Dive into
        aromatic stories that bring each person's scent personality to life.
      </p>
      <button
        onClick={() => navigate("/fragrance-picks")}
        className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
      >
        Discover Scent Stories
      </button>
    </div>
  );
}

export default LandingPage;
