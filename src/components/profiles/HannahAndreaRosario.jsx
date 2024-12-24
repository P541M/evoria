import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/har1.jpg";

function HannahAndreaRosario() {
  return (
    <div className="fade-in mx-12 min-h-screen bg-black pb-12 pt-28 text-white sm:mx-12 md:mx-14 lg:mx-16">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-center font-playfair text-4xl text-white sm:mb-8 sm:text-5xl">
          Hannah Andrea Rosario
        </h1>

        <p className="mx-auto mb-8 max-w-3xl text-center text-lg italic text-white sm:text-xl">
          "A fragrance that celebrates your boldness, fuels your creativity, and
          grounds you in sophistication."
        </p>

        <h2 className="mb-5 border-b border-offWhite/40 pb-1 font-playfair text-2xl sm:pb-2 sm:text-3xl">
          Signature Scent: Goddess Burberry for Women
        </h2>

        <section className="mb-10 flex flex-col items-start sm:mb-12 md:flex-row">
          <img
            src={img1}
            alt="Goddess Burberry Bottle"
            className="mx-auto mb-8 w-3/5 rounded-md shadow-lg sm:w-3/4 md:mx-0 md:mb-0 md:mr-6 md:w-1/4"
          />

          <div className="flex-1">
            <p className="mb-8 text-lg text-white sm:text-xl">
              Goddess Burberry for Women is a fragrance that reflects your
              confident and discerning essence. With its elegant florals and
              subtle warmth, it resonates with your ability to balance strength
              with approachability. This scent enhances your natural grace and
              boldness, creating a perfect harmony that complements every facet
              of your character.
            </p>

            <div>
              <h3 className="mb-3 text-lg text-white sm:text-xl">Notes:</h3>
              <ul className="ml-4 list-inside list-disc space-y-2 text-lg text-white sm:ml-6 sm:text-xl">
                <li>Top Notes: Lavender, Mandarin Orange</li>
                <li>Heart Notes: Jasmine, Tuberose</li>
                <li>Base Notes: Vanilla, Sandalwood, Amber</li>
              </ul>
            </div>
          </div>
        </section>

        <p className="mb-8 text-lg text-white sm:text-xl">
          Goddess Burberry transitions seamlessly through your day, exuding a
          perfect blend of creativity and grounded sophistication. Its floral
          notes capture your approachable charm, while its warm base creates an
          aura of quiet confidence.
        </p>

        <p className="mb-8 text-lg text-white sm:text-xl">
          Imagine the confident aroma of lavender and jasmine enhancing your
          every moment. Goddess Burberry becomes an essential part of your
          story, reflecting your bold and professional yet inviting spirit.
        </p>

        <div className="mb-10 space-x-2 text-lg sm:mb-12 sm:text-xl">
          <a
            href="https://www.fragrantica.com/perfume/Burberry/Goddess-123456.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline transition duration-200 hover:text-offWhite"
          >
            Learn more about Goddess Burberry on Fragrantica
          </a>
          <span className="text-white">|</span>
          <a
            href="https://fragrancebuy.ca/products/goddessburberry-woman"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline transition duration-200 hover:text-offWhite"
          >
            Purchase Goddess Burberry at FragranceBuy
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

export default HannahAndreaRosario;
