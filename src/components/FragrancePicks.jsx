import React, { useState } from "react";
import { Link } from "react-router-dom";

const chapters = [
  {
    id: 1,
    title: "Rachel Ruston",
    description:
      'Rachel radiates grace and authority, embodying both "strength" and "warmth". Her chapter captures her elegance, from daytime notes of calm to evening fragrances that enhance her charisma. Rachel’s story is one of sophistication and empathy, reflected through scents as inviting as she is.',
    link: "/chapters/rachel-ruston",
  },
  {
    id: 2,
    title: "Kate Tschirhart",
    description:
      "Kate exudes vibrant elegance, seamlessly blending energy with warmth. Her chapter combines fresh, uplifting notes with a gentle embrace, reflecting her nurturing and sophisticated spirit. Kate’s story embodies lively grace and attentive presence through dynamic, welcoming scents.",
    link: "/chapters/kate-tschirhart",
  },
  {
    id: 3,
    title: "Lyna Tran",
    description:
      "Lyna embodies a light-hearted charm and a genuine warmth that draws people to her. Her chapter unfolds in soft, delightful notes, reflecting her vibrant yet cozy essence. Lyna’s story captures the balance of simplicity and sweetness, mirrored through scents that celebrate her cheerful and approachable spirit.",
    link: "/chapters/lyna-tran",
  },
  {
    id: 4,
    title: "Hannah Andrea Rosario",
    description:
      "Hannah exudes a bold and discerning charm, blending creativity with sophistication. Her chapter unfolds with a fragrance that captures her balanced essence, reflecting confidence, elegance, and approachability. Hannah’s story is one of grace and strength, wrapped in a scent as dynamic and refined as she is.",
    link: "/chapters/hannah-andrea-rosario",
  },
];

function FragrancePicks() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredChapters = chapters.filter((chapter) =>
    chapter.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

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

      <div className="mx-auto mb-8 max-w-md">
        <input
          type="text"
          placeholder="Search for a chapter..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-full border border-offWhite/40 bg-black p-3 pl-5 text-offWhite placeholder-offWhite transition duration-200 focus:outline-none focus:ring-2 focus:ring-offWhite/70"
        />
      </div>

      <div className="mx-auto max-w-2xl space-y-10 sm:space-y-12 md:max-w-3xl lg:max-w-5xl">
        {filteredChapters.length > 0 ? (
          filteredChapters.map((chapter) => (
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
          ))
        ) : (
          <p className="text-center text-lg italic text-gray-400">
            No profiles match your search.
          </p>
        )}
      </div>
    </div>
  );
}

export default FragrancePicks;
