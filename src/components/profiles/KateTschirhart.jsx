import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/kt.jpg";

function KateTschirhart() {
  return (
    <div className="fade-in mx-12 min-h-screen bg-black pb-12 pt-28 text-white sm:mx-12 md:mx-14 lg:mx-16">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-center font-playfair text-4xl text-white sm:mb-8 sm:text-5xl">
          Kate Tschirhart
        </h1>

        <p className="mx-auto mb-8 max-w-3xl text-center text-lg italic text-white sm:text-xl">
          "May this fragrance embrace you with the warmth and elegance that you
          so beautifully embody."
        </p>

        <h2 className="mb-5 border-b border-offWhite/40 pb-1 font-playfair text-2xl sm:pb-2 sm:text-3xl">
          Signature Scent: Hermès Eau des Merveilles
        </h2>

        <section className="mb-10 flex flex-col items-start sm:mb-12 md:flex-row">
          <img
            src={img1}
            alt="Delina Exclusif Bottle"
            className="mx-auto mb-8 w-3/5 rounded-md shadow-lg sm:w-3/4 md:mx-0 md:mb-0 md:mr-6 md:w-1/4"
          />

          <div className="flex-1">
            <p className="mb-8 text-lg text-white sm:text-xl">
              Eau des Merveilles is an exceptional choice for you because it
              embodies a harmony of light freshness, and subtle warmth—
              qualities that truly reflect your charismatic and loving nature.
              This fragrance blends sophistication with a cozy undertone, making
              it feel both polished and inviting. It’s versatile enough to
              complement your graceful presence in any setting, aligning
              perfectly with your energetic yet nurturing personality.
            </p>

            <div>
              <h3 className="mb-3 text-lg text-white sm:text-xl">Notes:</h3>
              <ul className="ml-4 list-inside list-disc space-y-2 text-lg text-white sm:ml-6 sm:text-xl">
                <li>Top Notes: Orange, Elemi Resin, Lemon</li>
                <li>Heart Notes: Amber, Pepper, Pink Pepper, Violet</li>
                <li>
                  Base Notes: Fir, Cedar, Madagascar Vetiver, Oakmoss, Benzoin
                </li>
              </ul>
            </div>
          </div>
        </section>

        <p className="mb-8 text-lg text-white sm:text-xl">
          Eau des Merveilles is ideal for your day-to-day activities, where you
          balance caring for your family and embracing moments of joy and
          laughter. Its fresh citrus and resinous top notes provide an
          invigorating start to your day, while the warm base notes offer a
          comforting and lasting impression, perfect for creating a welcoming
          atmosphere wherever you go.
        </p>

        <p className="mb-8 text-lg text-white sm:text-xl">
          Imagine yourself stepping into your day, your fragrance leaving a
          trail of elegance and warmth, perfectly complementing your
          interactions and enhancing your charismatic presence. Whether you’re
          enjoying a walk with your children, preparing a cozy meal, or sharing
          a laugh with loved ones, Eau des Merveilles continues to resonate,
          reflecting your loving and motherly spirit.
        </p>

        <div className="mb-10 space-x-2 text-lg sm:mb-12 sm:text-xl">
          <a
            href="https://www.fragrantica.com/perfume/Hermes/Eau-des-Merveilles-9.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline transition duration-200 hover:text-offWhite"
          >
            Learn more about Eau des Merveilles on Fragrantica
          </a>
          <span className="text-white">|</span>
          <a
            href="https://fragrancebuy.ca/products/hermesmerveilleux-woman"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline transition duration-200 hover:text-offWhite"
          >
            Purchase Eau des Merveilles at FragranceBuy
          </a>
        </div>

        <div className="flex justify-center">
          <Link
            to="/chapters"
            className="mt-10 rounded-full bg-white px-6 py-3 text-lg text-black shadow-md transition duration-300 hover:bg-offWhite sm:px-8 sm:text-xl"
          >
            Back to Evoria Chapters
          </Link>
        </div>
      </div>
    </div>
  );
}

export default KateTschirhart;
