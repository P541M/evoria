import React from "react";
import { Link } from "react-router-dom";

const chapters = [
  {
    id: 0,
    title: "Rachel Ruston",
    description:
      'Rachel radiates grace and authority, embodying both "strength" and "warmth". Her scent profile captures her elegance, from daytime notes of calm to evening fragrances that enhance her charisma. Rachel’s story is one of sophistication and empathy, reflected through scents as inviting as she is.',
    link: "/chapters/rachel-ruston",
  },
];

function FragrancePicks() {
  return (
    <div className="fade-in mx-12 min-h-screen bg-black pb-12 pt-28 text-white sm:mx-12 md:mx-14 lg:mx-16">
      <h1 className="mb-6 text-center font-playfair text-4xl text-white sm:mb-8 sm:text-5xl">
        Evoria Chapters
      </h1>

      <p className="mx-auto mb-8 max-w-3xl text-center text-lg italic text-white sm:text-xl">
        Each chapter is uniquely personalized and thoughtfully written for the
        individual it features, reflecting their distinct personality and
        essence.
      </p>

      <div className="mx-auto max-w-2xl space-y-10 sm:space-y-12 md:max-w-3xl lg:max-w-5xl">
        {chapters.map((chapter) => (
          <div key={chapter.id}>
            <h2 className="mb-5 border-b border-offWhite/40 pb-1 font-playfair text-2xl sm:pb-2 sm:text-3xl">
              {`Chapter ${chapter.id}. ${chapter.title}`}
            </h2>
            <p className="mb-6 text-lg sm:text-xl">{chapter.description}</p>
            <Link
              to={chapter.link}
              className="text-lg underline transition duration-200 hover:text-offWhite sm:text-xl"
            >
              View Full Chapter
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FragrancePicks;
