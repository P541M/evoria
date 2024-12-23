import React from "react";

function Vocab() {
  return (
    <div className="fade-in mx-12 min-h-screen bg-black pb-12 pt-28 text-white sm:mx-12 md:mx-14 lg:mx-16">
      <div className="mx-auto max-w-2xl md:max-w-3xl lg:max-w-5xl">
        <h1 className="mb-6 text-center font-playfair text-4xl text-white sm:mb-8 sm:text-5xl">
          Vocabulary
        </h1>

        <p className="mx-auto mb-8 max-w-3xl text-center text-lg italic text-white sm:text-xl">
          Deepen your fragrance knowledge with our comprehensive vocabulary.
          Each term is thoughtfully defined to highlight the nuances of our
          personalized chapters.
        </p>

        <div className="space-y-10 sm:space-y-12">
          <div>
            <h2 className="mb-5 border-b border-offWhite/40 pb-1 font-playfair text-2xl sm:pb-2 sm:text-3xl">
              Top Notes
            </h2>
            <p className="text-lg sm:text-xl">
              Top notes are the initial scents you smell when you first apply a
              fragrance. They are usually light, fresh, and evaporate quickly to
              make way for the heart notes.
            </p>
          </div>

          <div>
            <h2 className="mb-5 border-b border-offWhite/40 pb-1 font-playfair text-2xl sm:pb-2 sm:text-3xl">
              Middle Notes / Heart Notes
            </h2>
            <p className="text-lg sm:text-xl">
              Middle notes, or heart notes, emerge once the top notes dissipate.
              These notes represent the core of the fragrance and tend to be
              more mellow and harmonious, lasting longer than the top notes.
            </p>
          </div>

          <div>
            <h2 className="mb-5 border-b border-offWhite/40 pb-1 font-playfair text-2xl sm:pb-2 sm:text-3xl">
              Base Notes
            </h2>
            <p className="text-lg sm:text-xl">
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
