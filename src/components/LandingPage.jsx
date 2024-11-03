import React from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] bg-gradient-to-b from-backgroundPrimary to-backgroundSecondary text-center px-6 sm:px-8 lg:px-16">
      <h1 className="text-5xl font-serif font-bold text-textAccent mb-10 leading-tight">
        Welcome to Scentful Stories
      </h1>
      <p className="text-lg text-textPrimary mb-12 max-w-2xl leading-relaxed">
        Hi, I’m Eleazar! Welcome to my little corner of the fragrance world,
        where I believe in making life a bit better, one sniff at a time.
        Scentful Stories is my passion project—a blog where I share my favorite
        fragrance picks, each one chosen to reflect the unique essence of the
        people I’ve had the pleasure of matching. Explore these curated scent
        journeys, and maybe even find a bit of inspiration for your own.
      </p>
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
