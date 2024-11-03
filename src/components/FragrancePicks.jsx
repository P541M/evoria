import React from "react";
import { Link } from "react-router-dom";

function FragrancePicks() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Personalized Fragrance Picks
      </h2>
      <div className="max-w-4xl mx-auto space-y-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800">Rachel Ruston</h3>
          <p className="text-gray-600 mb-2">
            A powerful yet warm personality, perfect for a sophisticated scent.
          </p>
          <Link
            to="/fragrance-picks/rachel-ruston"
            className="text-blue-600 hover:underline"
          >
            View Full Profile
          </Link>
        </div>

        {/* Add more profiles as needed */}
      </div>
    </div>
  );
}

export default FragrancePicks;
