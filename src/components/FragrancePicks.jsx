import React from "react";
import { Link } from "react-router-dom";

function FragrancePicks() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-backgroundPrimary to-backgroundSecondary pt-24 py-12 px-4 sm:px-6 md:px-8 lg:px-16">
      {/* Main Title with fast fade-up */}
      <h2 className="text-4xl sm:text-5xl font-serif font-bold text-textAccent text-center mb-12 sm:mb-16 leading-tight fade-up">
        Scent Stories
      </h2>

      <div className="max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto space-y-12 sm:space-y-16">
        {/* Profile section with delayed fade-up */}
        <div className="fade-up-two">
          <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-textPrimary mb-4 border-b pb-2 border-textAccent/40">
            Rachel Ruston
          </h3>
          <p className="text-textPrimary mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg">
            With a presence that radiates grace and authority, Rachel embodies a
            harmonious blend of <span className="italic">strength</span> and{" "}
            <span className="italic">warmth</span>. Her scent profile mirrors
            her elegance and depth, from daytime notes that evoke a sense of
            polished calm to evening fragrances that amplify her natural
            charisma. Rachel’s story is one of sophistication and empathy,
            delicately crafted through scents that feel as powerful and inviting
            as she is.
          </p>
          <Link
            to="/stories/rachel-ruston"
            className="text-highlight font-medium text-base sm:text-lg hover:text-highlight/70 transition duration-200"
          >
            View Full Story
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FragrancePicks;
