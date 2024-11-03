import React from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-backgroundPrimary to-backgroundSecondary text-center px-4">
      <h1 className="text-5xl font-serif font-bold text-textAccent mb-4">
        Welcome to Scentful Stories
      </h1>
      <p className="text-lg text-textPrimary mb-8 max-w-md">
        Discover a curated selection of personalized fragrance journeys, each
        crafted to capture the unique essence of an individual.
      </p>
      <button
        onClick={() => navigate("/fragrance-picks")}
        className="px-6 py-3 bg-textAccent text-backgroundSecondary font-semibold rounded-lg shadow-md hover:bg-textAccent/90 transition duration-300"
      >
        Discover Scent Stories
      </button>
    </div>
  );
}

export default LandingPage;
