import React from "react";

function Vocab() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-backgroundPrimary to-backgroundSecondary pt-24 py-12 px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto">
        {/* Main Title with consistent styling */}
        <h2 className="text-4xl sm:text-5xl font-serif font-bold text-textAccent text-center mb-12 sm:mb-16 leading-tight fade-up">
          Vocabulary
        </h2>

        {/* Vocabulary sections with consistent animations */}
        <div className="space-y-12">
          <div className="fade-up">
            <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-textAccent mb-4 border-b pb-2 border-textAccent/40">
              Top Notes
            </h3>
            <p className="text-textPrimary leading-relaxed text-base sm:text-lg">
              Top notes are the initial scents you smell when you first apply a
              fragrance. They are usually light, fresh, and evaporate quickly to
              make way for the heart notes.
            </p>
          </div>

          <div className="fade-up-two">
            <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-textAccent mb-4 border-b pb-2 border-textAccent/40">
              Middle Notes / Heart Notes
            </h3>
            <p className="text-textPrimary leading-relaxed text-base sm:text-lg">
              Middle notes, or heart notes, emerge once the top notes dissipate.
              These notes represent the core of the fragrance and tend to be
              more mellow and harmonious, lasting longer than the top notes.
            </p>
          </div>

          <div className="fade-up-three">
            <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-textAccent mb-4 border-b pb-2 border-textAccent/40">
              Base Notes
            </h3>
            <p className="text-textPrimary leading-relaxed text-base sm:text-lg">
              Base notes are the final scent that appears once the top and
              middle notes have evaporated. They are rich and deep, often
              lasting for several hours and providing the fragrance with its
              lasting qualities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vocab;
