import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/cg1.jpg";

function CallieGibson() {
  return (
    <div className="fade-in mx-12 min-h-screen bg-black pb-12 pt-28 text-white sm:mx-12 md:mx-14 lg:mx-16">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-center font-playfair text-4xl text-white sm:mb-8 sm:text-5xl">
          Callie Gibson
        </h1>

        <p className="mx-auto mb-8 max-w-3xl text-center text-lg italic text-white sm:text-xl">
          "A fragrance that reflects your spirited energy and thoughtful depth,
          gracefully blending warmth and vitality."
        </p>

        <h2 className="mb-5 border-b border-offWhite/40 pb-1 font-playfair text-2xl sm:pb-2 sm:text-3xl">
          Signature Scent: Nectarine Blossom & Honey by Jo Malone London
        </h2>

        <section className="mb-10 flex flex-col items-start sm:mb-12 md:flex-row">
          <img
            src={img1}
            alt="Nectarine Blossom & Honey Bottle"
            className="mx-auto mb-8 w-3/5 rounded-md shadow-lg sm:w-3/4 md:mx-0 md:mb-0 md:mr-6 md:w-1/4"
          />

          <div className="flex-1">
            <p className="mb-8 text-lg text-white sm:text-xl">
              Nectarine Blossom & Honey by Jo Malone London perfectly reflects
              your dynamic essence, seamlessly blending vitality with calm
              sophistication. The light, fruity notes of nectarine and black
              currant capture your expressive and loving energy, while the
              grounded warmth of vetiver and plum mirrors your thoughtful,
              analytical side. This fragrance is as multifaceted as you
              are—vibrant yet introspective, lively yet serene.
            </p>

            <div>
              <h3 className="mb-3 text-lg text-white sm:text-xl">Notes:</h3>
              <ul className="ml-4 list-inside list-disc space-y-2 text-lg text-white sm:ml-6 sm:text-xl">
                <li>Top Notes: Green Notes, Black Currant, Petitgrain</li>
                <li>Middle Notes: Nectarine, Black Locust</li>
                <li>Base Notes: Peach, Plum, Vetiver</li>
              </ul>
            </div>
          </div>
        </section>

        <p className="mb-8 text-lg text-white sm:text-xl">
          This scent is an invitation to embrace every facet of who you
          are—lighthearted and reflective, energetic and serene. The fruity and
          floral top notes uplift with a fresh, inviting energy, while the warm
          base layers provide an elegant depth that lingers. It’s a fragrance
          that enhances your ability to leave a lasting impression without
          overpowering, perfect for those who appreciate subtle sophistication.
        </p>

        <p className="mb-8 text-lg text-white sm:text-xl">
          Imagine walking through a serene park, the playful brightness of
          nectarine blending effortlessly with the earthy calm of vetiver. Or
          picture an intimate evening, the comforting sweetness of peach and
          honey wrapping around you like a gentle embrace. Whether navigating
          the demands of the day or savoring quiet, meaningful moments,
          Nectarine Blossom & Honey adds an understated elegance that resonates
          with the beauty of the moment.
        </p>

        <div className="mb-10 space-x-2 text-lg sm:mb-12 sm:text-xl">
          <a
            href="https://www.fragrantica.com/perfume/Jo-Malone-London/Nectarine-Blossom-Honey-3782.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline transition duration-200 hover:text-offWhite"
          >
            Learn more about Nectarine Blossom & Honey on Fragrantica
          </a>
          <span className="text-white">|</span>
          <a
            href="https://fragrancebuy.ca/products/jomalonenectarineblossomandhoney-man"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline transition duration-200 hover:text-offWhite"
          >
            Purchase Nectarine Blossom & Honey at FragranceBuy
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

export default CallieGibson;
