import React from "react";
import { Link } from "react-router-dom";

function RachelRuston() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Rachel Ruston</h1>
        <p className="text-lg text-gray-700 mb-2">
          <strong>Primary Fragrance:</strong> Parfums de Marly Delina Exclusif
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Notes:</strong> Top: Pear, Lychee, Grapefruit; Heart: Turkish
          Rose, Incense, Vetiver; Base: Vanilla, Musk, Oud
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Occasion:</strong> Perfect for daily wear and professional
          settings.
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Why it Matches:</strong> This fragrance complements Rachel's
          warm yet powerful personality, with a soft elegance suited to everyday
          interactions.
        </p>
        <Link
          to="/fragrance-picks"
          className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded shadow hover:bg-blue-700"
        >
          Back to All Picks
        </Link>
      </div>
    </div>
  );
}

export default RachelRuston;
