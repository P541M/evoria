import React, { useState } from "react";
import { Link } from "react-router-dom";

const chapters = [
  {
    id: 1,
    title: "Rachel Ruston",
    description:
      "Rachel exudes poise and warmth, blending calm energy with evening refinement. Her chapter captures elegance through fragrances that mirror her empathetic spirit. Rachel’s story is one of sophistication and kindness, creating an inviting presence that feels effortlessly graceful.",
    link: "/chapters/rachel-ruston",
  },
  {
    id: 2,
    title: "Kate Tschirhart",
    description:
      "Kate’s vibrant elegance shines in every detail, merging uplifting energy with gentle warmth. Her chapter flows with dynamic notes that reflect her nurturing and lively nature. Kate’s story celebrates her balance of spirited charm and grace through scents that are both vibrant and welcoming.",
    link: "/chapters/kate-tschirhart",
  },
  {
    id: 3,
    title: "Lyna Tran",
    description:
      "Lyna radiates approachable charm with her vibrant yet cozy demeanor. Her chapter unfolds with soft, joyful notes that evoke warmth and cheer. Lyna’s story balances playful simplicity and genuine sweetness, mirrored through fragrances that celebrate her lighthearted and inviting essence.",
    link: "/chapters/lyna-tran",
  },
  {
    id: 4,
    title: "Hannah Andrea Rosario",
    description:
      "Hannah’s bold sophistication and creative spirit define her magnetic presence. Her chapter reveals fragrances blending confidence with graceful refinement. Hannah’s story reflects a harmony of strength and elegance, brought to life through scents as dynamic and polished as she is.",
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
          className="w-full rounded-full border border-offWhite/40 bg-black p-3 pl-5 text-base text-offWhite placeholder-offWhite transition duration-200 focus:outline-none focus:ring-2 focus:ring-offWhite/70 sm:text-lg"
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
          <p className="text-center text-lg italic text-offWhite sm:text-xl">
            No chapters match your search.
          </p>
        )}
      </div>
    </div>
  );
}

export default FragrancePicks;
