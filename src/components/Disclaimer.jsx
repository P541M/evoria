import React from "react";

function Disclaimer() {
  return (
    <div className="fade-in mx-12 min-h-screen bg-black pb-12 pt-28 text-white sm:mx-12 md:mx-14 lg:mx-16">
      <div className="mx-auto max-w-2xl md:max-w-3xl lg:max-w-5xl">
        <h1 className="mb-6 text-center font-playfair text-4xl text-white sm:mb-8 sm:text-5xl">
          Disclaimer
        </h1>

        <p className="mx-auto mb-8 max-w-3xl text-center text-lg italic text-white sm:text-xl">
          A message to all my valued readers about fragrance selections and
          recommendations.
        </p>

        <div className="space-y-10 sm:space-y-12">
          <div>
            <h2 className="mb-5 border-b border-offWhite/40 pb-1 font-playfair text-2xl sm:pb-2 sm:text-3xl">
              Recommendations
            </h2>
            <p className="text-lg sm:text-xl">
              The fragrances highlighted in each chapter are carefully chosen
              based on their unique characteristics and suitability for specific
              themes or personalities. However, these are only suggestions and
              should not be taken as definitive advice.
            </p>
          </div>

          <div>
            <h2 className="mb-5 border-b border-offWhite/40 pb-1 font-playfair text-2xl sm:pb-2 sm:text-3xl">
              Your Personal Preferences
            </h2>
            <p className="text-lg sm:text-xl">
              Fragrance is deeply personal, and I encourage you to explore
              options that resonate with your tastes and preferences. The
              ultimate goal is to find a scent that makes you feel confident and
              reflects your unique identity.
            </p>
          </div>

          <div>
            <h2 className="mb-5 border-b border-offWhite/40 pb-1 font-playfair text-2xl sm:pb-2 sm:text-3xl">
              No Obligations
            </h2>
            <p className="text-lg sm:text-xl">
              I want to emphasize that you are under no obligation to purchase
              the fragrances featured in our chapters. These selections are
              meant to inspire and guide you but should not dictate your
              choices. Always prioritize what you truly love and enjoy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Disclaimer;
