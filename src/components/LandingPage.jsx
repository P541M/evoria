import React from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Welcome to My Fragrance Picks
      </h1>
      <p className="text-lg text-gray-600 mb-8 max-w-md">
        As a fragrance enthusiast, I enjoy helping others find their perfect
        scent match. Here you can see personalized fragrance recommendations
        I’ve made for different individuals, each chosen to match their unique
        personality and lifestyle.
      </p>
      <button
        onClick={() => navigate("/fragrance-picks")}
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        View Fragrance Picks
      </button>
    </div>
  );
}

export default LandingPage;
