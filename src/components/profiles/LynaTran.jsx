import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/lt1.jpg";
import img2 from "../../assets/lt2.jpg";

function LynaTran() {
  return (
    <div className="fade-in mx-12 min-h-screen bg-black pb-12 pt-28 text-white sm:mx-12 md:mx-14 lg:mx-16">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-center font-playfair text-4xl text-white sm:mb-8 sm:text-5xl">
          Lyna Tran
        </h1>

        <p className="mx-auto mb-8 max-w-3xl text-center text-lg italic text-white sm:text-xl">
          "A fragrance that dances with your laughter, wraps around your warmth,
          and celebrates your vibrant heart."
        </p>

        <h2 className="mb-5 border-b border-offWhite/40 pb-1 font-playfair text-2xl sm:pb-2 sm:text-3xl">
          Signature Daytime Scent: Gucci Flora Gorgeous Gardenia
        </h2>

        <section className="mb-10 flex flex-col items-start sm:mb-12 md:flex-row">
          <img
            src={img1}
            alt="Flora Gorgeous Gardenia Bottle"
            className="mx-auto mb-8 w-3/5 rounded-md shadow-lg sm:w-3/4 md:mx-0 md:mb-0 md:mr-6 md:w-1/4"
          />

          <div className="flex-1">
            <p className="mb-8 text-lg text-white sm:text-xl">
              Gucci Flora Gorgeous Gardenia mirrors your vibrant energy and
              effortless charm. With sweet florals like gardenia and tuberose
              paired with fruity undertones of pear and mandarin orange, this
              fragrance perfectly captures your lively and graceful spirit. It’s
              an ideal choice for days filled with laughter and meaningful
              moments, reflecting the joy you bring to those around you.
            </p>

            <div>
              <h3 className="mb-3 text-lg text-white sm:text-xl">Notes:</h3>
              <ul className="ml-4 list-inside list-disc space-y-2 text-lg text-white sm:ml-6 sm:text-xl">
                <li>Top Notes: Pear, Mandarin Orange</li>
                <li>Heart Notes: Gardenia, Tuberose</li>
                <li>Base Notes: Musk, Cedarwood</li>
              </ul>
            </div>
          </div>
        </section>

        <p className="mb-8 text-lg text-white sm:text-xl">
          Flora Gorgeous Gardenia adds a touch of playful elegance to your day.
          Its light and inviting aroma complements your friendly and cheerful
          personality, making it the perfect companion for casual gatherings or
          tranquil moments.
        </p>

        <p className="mb-8 text-lg text-white sm:text-xl">
          Picture yourself walking into a sunlit room, the soft notes of
          gardenia and pear creating an aura of joy and warmth that resonates
          with your genuine and approachable nature.
        </p>

        <div className="mb-10 space-x-2 text-lg sm:mb-12 sm:text-xl">
          <a
            href="https://www.fragrantica.com/perfume/Gucci/Flora-Gorgeous-Gardenia-12345.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline transition duration-200 hover:text-offWhite"
          >
            Learn more about Gucci Flora Gorgeous Gardenia on Fragrantica
          </a>
          <span className="text-white">|</span>
          <a
            href="https://fragrancebuy.ca/products/guccifloragardenia-woman"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline transition duration-200 hover:text-offWhite"
          >
            Purchase Gucci Flora Gorgeous Gardenia at FragranceBuy
          </a>
        </div>

        <h2 className="mb-5 border-b border-offWhite/40 pb-1 font-playfair text-2xl sm:pb-2 sm:text-3xl">
          Signature Evening Scent: Ariana Grande Pink Cloud
        </h2>

        <section className="mb-10 flex flex-col items-start sm:mb-12 md:flex-row">
          <img
            src={img2}
            alt="Ariana Grande Pink Cloud Bottle"
            className="mx-auto mb-8 w-3/5 rounded-md shadow-lg sm:w-3/4 md:mx-0 md:mb-0 md:mr-6 md:w-1/4"
          />

          <div className="flex-1">
            <p className="mb-8 text-lg text-white sm:text-xl">
              Ariana Grande Pink Cloud encapsulates your dreamy, whimsical side.
              With its delicate blend of lavender, coconut, and vanilla, this
              fragrance evokes a sense of sweetness and lightness. It’s a
              perfect match for evenings where you shine with your approachable
              charm and enchanting warmth.
            </p>

            <div>
              <h3 className="mb-3 text-lg text-white sm:text-xl">Notes:</h3>
              <ul className="ml-4 list-inside list-disc space-y-2 text-lg text-white sm:ml-6 sm:text-xl">
                <li>Top Notes: Lavender, Bergamot</li>
                <li>Heart Notes: Coconut, Berries</li>
                <li>Base Notes: Vanilla, Cashmere Musk</li>
              </ul>
            </div>
          </div>
        </section>

        <p className="mb-8 text-lg text-white sm:text-xl">
          Pink Cloud is the perfect scent for evenings spent connecting with
          loved ones or unwinding under the stars. Its soft and sweet notes
          enhance your natural friendliness and make every moment feel magical.
        </p>

        <p className="mb-8 text-lg text-white sm:text-xl">
          Imagine an evening filled with laughter and joy, the comforting scent
          of Pink Cloud wrapping around you like a cozy embrace, highlighting
          your bright and welcoming personality.
        </p>

        <div className="mb-10 space-x-2 text-lg sm:mb-12 sm:text-xl">
          <a
            href="https://www.fragrantica.com/perfume/Ariana-Grande/Pink-Cloud-67890.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline transition duration-200 hover:text-offWhite"
          >
            Learn more about Ariana Grande Pink Cloud on Fragrantica
          </a>
          <span className="text-white">|</span>
          <a
            href="https://fragrancebuy.ca/products/arianagrandepinkcloud-woman"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline transition duration-200 hover:text-offWhite"
          >
            Purchase Ariana Grande Pink Cloud at FragranceBuy
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

export default LynaTran;
