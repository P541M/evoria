import React from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] bg-gradient-to-b from-backgroundPrimary to-backgroundSecondary text-center px-4 sm:px-6 md:px-8 lg:px-16">
      {/* Adjusted responsive padding for different screen sizes */}
      <h1 className="text-4xl sm:text-5xl font-serif font-bold text-textAccent mb-8 sm:mb-12 leading-tight">
        Welcome to Scentful Stories
      </h1>
      <div className="text-base sm:text-lg text-textPrimary mb-8 sm:mb-12 max-w-xl sm:max-w-2xl leading-relaxed space-y-6 sm:space-y-8">
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
        onClick={() => navigate("/scentful-stories")}
        className="px-6 sm:px-8 py-3 bg-textAccent text-backgroundSecondary font-semibold rounded-full shadow-md hover:bg-textAccent/90 transition duration-300 text-base sm:text-lg"
      >
        Discover Scent Stories
      </button>
    </div>
  );
}

export default LandingPage;
