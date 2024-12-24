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
              Goddess Burberry for Women captures the essence of your confident
              and discerning personality. This elegant fragrance blends the soft
              sophistication of vanilla and lavender with a touch of warmth and
              boldness, perfectly reflecting your ability to balance strength
              and approachability. Its harmonious notes enhance your natural
              grace and creative spirit, making it an ideal choice for someone
              as dynamic and poised as you.
            </p>

            <div>
              <h3 className="mb-3 text-lg text-white sm:text-xl">Notes:</h3>
              <ul className="ml-4 list-inside list-disc space-y-2 text-lg text-white sm:ml-6 sm:text-xl">
                <li>Top Notes: Vanilla, Lavender, Cacao, Ginger</li>
                <li>Heart Notes: Vanilla Caviar</li>
                <li>Base Notes: Vanilla Absolute</li>
              </ul>
            </div>
          </div>
        </section>

        <p className="mb-8 text-lg text-white sm:text-xl">
          Goddess Burberry is more than just a scent—it’s a statement of who you
          are. The richness of vanilla paired with the fresh elegance of
          lavender creates an aura of quiet confidence and understated power.
          Its refined warmth reflects your ability to inspire and connect with
          others effortlessly. This fragrance enhances your grounded
          sophistication, making it a seamless extension of your bold yet
          inviting personality. Perfect for someone who values a scent as
          multi-faceted as their own character.
        </p>

        <p className="mb-8 text-lg text-white sm:text-xl">
          Picture yourself stepping into a room filled with opportunity, whether
          it’s a pivotal business meeting, a creative endeavor, or an evening
          social event. The delicate blend of vanilla and lavender fills the
          air, complementing your commanding presence and approachable charm.
          Goddess Burberry is perfect for scenarios that call for strength and
          refinement, from professional milestones to celebratory moments.
          Wherever life takes you, this fragrance elevates the experience,
          grounding you in confidence and grace.
        </p>

        <div className="mb-10 space-x-2 text-lg sm:mb-12 sm:text-xl">
          <a
            href="https://www.fragrantica.com/perfume/Burberry/Goddess-83483.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline transition duration-200 hover:text-offWhite"
          >
            Learn more about Goddess on Fragrantica
          </a>
          <span className="text-white">|</span>
          <a
            href="https://fragrancebuy.ca/products/burberrygoddessintense-woman"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline transition duration-200 hover:text-offWhite"
          >
            Purchase Goddess at FragranceBuy
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
