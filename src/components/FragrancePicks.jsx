import React from "react";
import { Link } from "react-router-dom";

function FragrancePicks() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-backgroundPrimary to-backgroundSecondary pt-20 pb-12 px-4 sm:px-6 md:px-10 lg:px-16">
      <h2 className="text-4xl sm:text-5xl font-serif font-bold text-textAccent text-center mb-8 sm:mb-10 leading-tight fade-up">
        Scent Stories
      </h2>

      <div className="max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto space-y-10 sm:space-y-12">
        <div className="fade-up-two">
          <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-textAccent mb-5 border-b pb-1 sm:pb-2 border-textAccent/40">
            Rachel Ruston
          </h3>
          <p className="text-textPrimary mb-6 leading-relaxed text-base sm:text-lg">
            Rachel radiates grace and authority, embodying both{" "}
            <span className="italic">strength</span> and{" "}
            <span className="italic">warmth</span>. Her scent profile captures
            her elegance, from daytime notes of calm to evening fragrances that
            enhance her charisma. Rachel’s story is one of sophistication and
            empathy, reflected through scents as inviting as she is.
          </p>
          <Link
            to="/stories/rachel-ruston"
            className="text-highlight font-medium text-base sm:text-lg hover:text-highlight/70 transition duration-200 underline"
          >
            View Full Story
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FragrancePicks;
