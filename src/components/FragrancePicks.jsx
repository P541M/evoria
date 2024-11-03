import React from "react";
import { Link } from "react-router-dom";

function FragrancePicks() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <h2 className="text-4xl font-serif font-bold text-gray-800 text-center mb-6">
        Scent Stories
      </h2>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <h3 className="text-2xl font-serif font-semibold text-gray-800">
            Rachel Ruston
          </h3>
          <p className="text-gray-700 mb-4">
            A natural leader with a powerful yet nurturing presence, exuding
            warmth and sophistication. Rachel’s essence is a blend of cherry’s
            elegance and strawberry’s refreshing sweetness—approachable,
            refined, and full of compassion.
          </p>
          <Link
            to="/fragrance-picks/rachel-ruston"
            className="text-indigo-600 font-medium hover:text-indigo-400 transition duration-200"
          >
            View Full Story
          </Link>
        </div>

        {/* Add more profiles as needed */}
      </div>
    </div>
  );
}

export default FragrancePicks;
