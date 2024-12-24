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
              effortless charm. With sweet florals like gardenia, jasmine, and
              frangipani balanced by fruity touches of pear blossom, red
              berries, and Italian mandarin, this fragrance perfectly embodies
              your lively and graceful spirit. It’s the ideal choice for days
              filled with joy and meaningful connections, reflecting the
              happiness you bring to those around you.
            </p>

            <div>
              <h3 className="mb-3 text-lg text-white sm:text-xl">Notes:</h3>
              <ul className="ml-4 list-inside list-disc space-y-2 text-lg text-white sm:ml-6 sm:text-xl">
                <li>Top Notes: Pear Blossom, Red Berries, Italian Mandarin</li>
                <li>Heart Notes: Gardenia, Jasmine, Frangipani</li>
                <li>Base Notes: Brown Sugar, Patchouli</li>
              </ul>
            </div>
          </div>
        </section>

        <p className="mb-8 text-lg text-white sm:text-xl">
          Gucci Flora Gorgeous Gardenia is more than a fragrance—it's an
          extension of your bright and engaging personality. Its sweet, fresh
          scent brings your vibrant presence to life while maintaining an air of
          elegance and approachability. The combination of light fruitiness and
          warm, floral sophistication creates an aura that is both memorable and
          inviting, perfect for someone who effortlessly balances charm and
          warmth.
        </p>

        <p className="mb-8 text-lg text-white sm:text-xl">
          Picture yourself at a sun-dappled brunch with friends, laughter
          filling the air as you shine in the moment. The uplifting notes of
          pear blossom and Italian mandarin mingle with the delicate florals of
          gardenia and jasmine, making it the perfect scent for casual
          gatherings, relaxed afternoons, or peaceful moments of reflection.
          It’s a fragrance for occasions where your radiance takes center stage.
        </p>

        <div className="mb-10 space-x-2 text-lg sm:mb-12 sm:text-xl">
          <a
            href="https://www.fragrantica.com/perfume/Gucci/Flora-Gorgeous-Gardenia-68578.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline transition duration-200 hover:text-offWhite"
          >
            Learn more about Flora Gorgeous Gardenia on Fragrantica
          </a>
          <span className="text-white">|</span>
          <a
            href="https://fragrancebuy.ca/products/guccifloragorgeousgardeniaedpedition-woman"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline transition duration-200 hover:text-offWhite"
          >
            Purchase Flora Gorgeous Gardenia at FragranceBuy
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
              Ariana Grande Pink Cloud encapsulates your whimsical and dreamy
              nature, combining playful sweetness with enchanting
              sophistication. With vibrant notes of pitahaya, wild berries, and
              pineapple softened by coconut water and vanilla orchid, this
              fragrance perfectly matches your warm, approachable charm. It’s
              the ideal choice for magical evenings where your vibrant spirit
              shines.
            </p>

            <div>
              <h3 className="mb-3 text-lg text-white sm:text-xl">Notes:</h3>
              <ul className="ml-4 list-inside list-disc space-y-2 text-lg text-white sm:ml-6 sm:text-xl">
                <li>Top Notes: Pitahaya, Wild Berries, Pineapple</li>
                <li>Heart Notes: Coconut Water, Vanilla Orchid, Ambrette</li>
                <li>Base Notes: Praline, Musk, Amberwood, Moss</li>
              </ul>
            </div>
          </div>
        </section>

        <p className="mb-8 text-lg text-white sm:text-xl">
          Pink Cloud is an irresistible blend of sweetness and elegance that
          enhances your friendly and vibrant personality. The tropical burst of
          pitahaya and wild berries creates an inviting energy, while the
          coconut water and praline add a cozy, comforting dimension. This
          fragrance is perfect for anyone who loves to balance playfulness with
          sophistication, making every moment feel special and connected.
        </p>

        <p className="mb-8 text-lg text-white sm:text-xl">
          Picture yourself enjoying a serene evening under a canopy of stars,
          laughter echoing as the sweet yet grounding aroma of Pink Cloud
          surrounds you. Its fruity top notes and soft, warm base make it the
          perfect companion for heartfelt gatherings, quiet self-care rituals,
          or spontaneous adventures with friends. Wherever the evening takes
          you, Pink Cloud ensures you carry a sense of magic and joy.
        </p>

        <div className="mb-10 space-x-2 text-lg sm:mb-12 sm:text-xl">
          <a
            href="https://www.fragrantica.com/perfume/Ariana-Grande/Cloud-Pink-83995.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline transition duration-200 hover:text-offWhite"
          >
            Learn more about Pink Cloud on Fragrantica
          </a>
          <span className="text-white">|</span>
          <a
            href="https://fragrancebuy.ca/products/arianagrandecloudpink-woman"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline transition duration-200 hover:text-offWhite"
          >
            Purchase Pink Cloud at FragranceBuy
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
