import React from "react";

function Vocab() {
  return (
    <div className="min-h-screen bg-black px-4 pb-12 pt-20 text-white sm:px-6 md:px-10 lg:px-16">
      <div className="mx-auto max-w-2xl md:max-w-3xl lg:max-w-4xl">
        <h2 className="fade-up font-playfair mb-8 text-center text-4xl sm:mb-10 sm:text-5xl">
          Vocabulary
        </h2>

        <div className="space-y-10 sm:space-y-12">
          <div className="fade-up">
            <h3 className="font-playfair mb-5 border-b border-offWhite/40 pb-1 text-2xl sm:pb-2 sm:text-3xl">
              Top Notes
            </h3>
            <p className="text-base sm:text-lg">
              Top notes are the initial scents you smell when you first apply a
              fragrance. They are usually light, fresh, and evaporate quickly to
              make way for the heart notes.
            </p>
          </div>

          <div className="fade-up-two">
            <h3 className="font-playfair mb-5 border-b border-offWhite/40 pb-1 text-2xl sm:pb-2 sm:text-3xl">
              Middle Notes / Heart Notes
            </h3>
            <p className="text-base sm:text-lg">
              Middle notes, or heart notes, emerge once the top notes dissipate.
              These notes represent the core of the fragrance and tend to be
              more mellow and harmonious, lasting longer than the top notes.
            </p>
          </div>

          <div className="fade-up-three">
            <h3 className="font-playfair mb-5 border-b border-offWhite/40 pb-1 text-2xl sm:pb-2 sm:text-3xl">
              Base Notes
            </h3>
            <p className="text-base sm:text-lg">
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
