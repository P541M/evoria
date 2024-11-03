import React from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] bg-gradient-to-b from-backgroundPrimary to-backgroundSecondary text-center px-6 sm:px-8 lg:px-16">
      <h1 className="text-5xl font-serif font-bold text-textAccent mb-10 leading-tight">
        Welcome to Scentful Stories
      </h1>
      <div className="text-lg text-textPrimary mb-12 max-w-2xl leading-relaxed space-y-6">
        <p>
          Scentful Stories is a curated journey through the world of fragrance.
          Each selection reflects a unique character, chosen to capture an
          individual’s essence.
        </p>
        <p>
          Created by Eleazar, this project combines a deep appreciation for
          scent with a dedication to storytelling. Every fragrance featured here
          has been handpicked to inspire, evoke, and leave a lasting impression.
        </p>
        <p>
          Explore these scent profiles and uncover a world where aroma meets
          identity. Discover inspiration, find your signature, or simply enjoy
          the artistry of fragrance.
        </p>
      </div>
      <button
        onClick={() => navigate("/fragrance-picks")}
        className="px-8 py-3 bg-textAccent text-backgroundSecondary font-semibold rounded-full shadow-md hover:bg-textAccent/90 transition duration-300 text-lg"
      >
        Discover Scent Stories
      </button>
    </div>
  );
}

export default LandingPage;
