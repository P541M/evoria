import React from "react";
import { Link } from "react-router-dom";

function FragrancePicks() {
  return (
    <div className="fade-in mx-12 min-h-screen bg-black pb-12 pt-28 text-white sm:mx-12 md:mx-14 lg:mx-16">
      <h2 className="mb-8 text-center font-playfair text-4xl sm:mb-10 sm:text-5xl">
        Evoria Chapters
      </h2>

      <div className="mx-auto max-w-2xl space-y-10 sm:space-y-12 md:max-w-3xl lg:max-w-5xl">
        <div>
          <h3 className="mb-5 border-b border-offWhite/40 pb-1 font-playfair text-2xl sm:pb-2 sm:text-3xl">
            Chapter 1. Rachel Ruston
          </h3>
          <p className="mb-6 text-base sm:text-lg">
            Rachel radiates grace and authority, embodying both{" "}
            <span className="italic">strength</span> and{" "}
            <span className="italic">warmth</span>. Her scent profile captures
            her elegance, from daytime notes of calm to evening fragrances that
            enhance her charisma. Rachel’s story is one of sophistication and
            empathy, reflected through scents as inviting as she is.
          </p>
          <Link
            to="/chapters/rachel-ruston"
            className="text-base underline transition duration-200 hover:text-offWhite sm:text-lg"
          >
            View Full Chapter
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FragrancePicks;
