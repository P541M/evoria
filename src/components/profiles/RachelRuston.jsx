import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/rr1.jpg";
import img2 from "../../assets/rr2.jpg";

function RachelRuston() {
  return (
    <div className="fade-in mx-12 min-h-screen bg-black pb-12 pt-28 text-white sm:mx-12 md:mx-14 lg:mx-16">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-center font-playfair text-4xl text-white sm:mb-8 sm:text-5xl">
          Rachel Ruston
        </h1>

        <p className="mx-auto mb-8 max-w-3xl text-center text-lg italic text-white sm:text-xl">
          "A fragrance as graceful as your warmth, as powerful as your
          presence."
        </p>

        <h2 className="mb-5 border-b border-offWhite/40 pb-1 font-playfair text-2xl sm:pb-2 sm:text-3xl">
          Signature Daytime Scent: Parfums de Marly Delina Exclusif
        </h2>

        <section className="mb-10 flex flex-col items-start sm:mb-12 md:flex-row">
          <img
            src={img1}
            alt="Delina Exclusif Bottle"
            className="mx-auto mb-8 w-3/5 rounded-md shadow-lg sm:w-3/4 md:mx-0 md:mb-0 md:mr-6 md:w-1/4"
          />

          <div className="flex-1">
            <p className="mb-8 text-lg text-white sm:text-xl">
              Delina Exclusif is an exceptional choice for daily wear because it
              embodies a balance of{" "}
              <span className="bg-white/10 italic">elegance</span>,{" "}
              <span className="bg-white/10 italic">strength</span>, and{" "}
              <span className="bg-white/10 italic">approachability</span>—
              qualities that truly reflect you. This fragrance combines
              sophistication with subtle warmth, making it feel polished yet
              inviting. It’s refined enough for a professional setting and
              carries an air of authority without overwhelming those around you,
              aligning perfectly with your powerful yet nurturing energy.
            </p>

            <div>
              <h3 className="mb-3 text-lg text-white sm:text-xl">Notes:</h3>
              <ul className="ml-4 list-inside list-disc space-y-2 text-lg text-white sm:ml-6 sm:text-xl">
                <li>
                  Top Notes: Litchi, Pear, Bergamot, Grapefruit, Pink Pepper
                </li>
                <li>Heart Notes: Turkish Rose, Agarwood (Oud), Incense</li>
                <li>
                  Base Notes: Vanilla, Amber, Woody Notes, Musk, Vetiver,
                  Evernyl
                </li>
              </ul>
            </div>
          </div>
        </section>

        <p className="mb-8 text-lg text-white sm:text-xl">
          Delina Exclusif is ideal for day-to-day office wear, where you need
          something that quietly commands respect but remains soft and inviting.
          Its warm, fruity notes create a subtle signature scent, perfect for an
          everyday fragrance that won’t be overpowering.
        </p>

        <p className="mb-8 text-lg text-white sm:text-xl">
          Imagine yourself stepping into important meetings, letting this
          fragrance ground and uplift you. A light application makes this
          fragrance blend seamlessly into your work environment, complementing
          your aura of authority and compassion.
        </p>

        <div className="mb-10 space-x-2 text-lg sm:mb-12 sm:text-xl">
          <a
            href="https://www.fragrantica.com/perfume/Parfums-de-Marly/Delina-Exclusif-50370.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline transition duration-200 hover:text-offWhite"
          >
            Learn more about Delina Exclusif on Fragrantica
          </a>
          <span className="text-white">|</span>
          <a
            href="https://fragrancebuy.ca/products/delinaexclusif-woman"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline transition duration-200 hover:text-offWhite"
          >
            Purchase Delina Exclusif at FragranceBuy
          </a>
        </div>

        <h2 className="mb-5 border-b border-offWhite/40 pb-1 font-playfair text-2xl sm:pb-2 sm:text-3xl">
          Evening Opulence: Carolina Herrera Good Girl Suprême
        </h2>

        <section className="mb-10 flex flex-col items-start sm:mb-12 md:flex-row">
          <img
            src={img2}
            alt="Good Girl Suprême Bottle"
            className="mx-auto mb-8 w-3/5 rounded-md shadow-lg sm:w-3/4 md:mx-0 md:mb-0 md:mr-6 md:w-1/4"
          />

          <div className="flex-1">
            <p className="mb-8 text-lg text-white sm:text-xl">
              Good Girl Suprême brings a touch of{" "}
              <span className="bg-white/10 italic">boldness</span> and{" "}
              <span className="bg-white/10 italic">sophistication</span> that
              shines in social settings. This fragrance resonates with your
              natural ability to stand out effortlessly while staying grounded.
              With its balance of berries, tonka bean, and vetiver, it’s both
              rich and inviting—qualities that align with your leadership style
              and warmth. It’s an ideal match for evening gatherings, events, or
              social occasions where you want a fragrance that enhances your
              presence.
            </p>

            <div>
              <h3 className="mb-3 text-lg text-white sm:text-xl">Notes:</h3>
              <ul className="ml-4 list-inside list-disc space-y-2 text-lg text-white sm:ml-6 sm:text-xl">
                <li>Top Notes: Forest Fruits, Egyptian Jasmine</li>
                <li>Heart Notes: Tonka Bean, Tuberose</li>
                <li>Base Notes: Vetiver</li>
              </ul>
            </div>
          </div>
        </section>

        <p className="mb-8 text-lg text-white sm:text-xl">
          Good Girl Suprême is best suited for social or evening events where a
          more pronounced, memorable fragrance is appropriate. The balance of
          richness and elegance makes it ideal for dinners, gatherings, or
          professional social events where a bolder yet sophisticated scent can
          make a statement.
        </p>

        <p className="mb-8 text-lg text-white sm:text-xl">
          Picture yourself at an evening gathering, letting Good Girl Suprême
          enhance your natural elegance and charm. The grounding vetiver and
          warm tonka bean create a lasting impression, making it a great choice
          for enhancing your presence while still reflecting your warmth and
          strength.
        </p>

        <div className="mb-10 space-x-2 text-lg sm:mb-12 sm:text-xl">
          <a
            href="https://www.fragrantica.com/perfume/Carolina-Herrera/Good-Girl-Supreme-61769.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline transition duration-200 hover:text-offWhite"
          >
            Learn more about Good Girl Suprême on Fragrantica
          </a>
          <span className="text-white">|</span>
          <a
            href="https://fragrancebuy.ca/products/goodgirlsupreme-woman"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline transition duration-200 hover:text-offWhite"
          >
            Purchase Good Girl Suprême at FragranceBuy
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

export default RachelRuston;
