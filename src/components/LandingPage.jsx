import React from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-black px-4 text-center text-white sm:px-6 md:px-8 lg:px-16">
      <h1 className="fade-up font-playfair mb-8 text-4xl sm:mb-12 sm:text-5xl">
        Welcome to Scentful Stories
      </h1>

      <div className="mb-8 max-w-xl space-y-6 text-base sm:mb-12 sm:max-w-2xl sm:space-y-8 sm:text-lg">
        <p className="fade-up-two">
          Scentful Stories is a curated journey through the world of fragrance.
          Each selection reflects a unique character, chosen to capture an
          individual’s essence.
        </p>
        <p className="fade-up-three">
          Created by Eleazar, this project combines a deep appreciation for
          scent with a dedication to storytelling. Every fragrance featured here
          has been handpicked to inspire, evoke, and leave a lasting impression.
        </p>
      </div>

      <button
        onClick={() => navigate("/stories")}
        className="fade-up-four rounded-full bg-white px-6 py-3 text-base text-black shadow-md transition duration-300 hover:bg-offWhite sm:px-8 sm:text-lg"
      >
        Discover Scent Stories
      </button>
    </div>
  );
}

export default LandingPage;
