import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/rr1.jpg";
import img2 from "../../assets/rr2.jpg";

function RachelRuston() {
  return (
    <div className="min-h-screen bg-black px-4 pb-12 pt-20 text-white sm:px-6 md:px-10 lg:px-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="fade-up mb-6 text-center font-serif text-4xl text-white sm:mb-8 sm:text-5xl">
          Rachel Ruston
        </h1>

        <p className="fade-up-two mb-8 text-center text-lg italic text-white sm:mb-10 sm:text-xl">
          "A fragrance as graceful as your warmth, as powerful as your
          presence."
        </p>

        <h2 className="fade-up-three mb-5 border-b border-white/40 pb-1 text-2xl text-white sm:mb-6 sm:pb-2 sm:text-3xl">
          Signature Daytime Scent: Parfums de Marly Delina Exclusif
        </h2>

        <section className="fade-up-four mb-10 flex flex-col items-start sm:mb-12 md:flex-row">
          <img
            src={img1}
            alt="Delina Exclusif Bottle"
            className="mx-auto mb-6 w-3/4 rounded-xl shadow-lg sm:w-2/3 md:mx-0 md:mb-0 md:mr-6 md:w-1/3"
          />

          <div className="flex-1">
            <p className="mb-4 text-base text-white sm:text-lg">
              <strong className="text-white">Why Delina Exclusif?</strong>{" "}
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
              <ul className="ml-4 list-inside list-disc space-y-2 text-base text-white sm:ml-6 sm:text-lg">
                <li>
                  <strong>Top Notes:</strong> Litchi, Pear, Bergamot,
                  Grapefruit, Pink Pepper
                </li>
                <li>
                  <strong>Heart Notes:</strong> Turkish Rose, Agarwood (Oud),
                  Incense
                </li>
                <li>
                  <strong>Base Notes:</strong> Vanilla, Amber, Woody Notes,
                  Musk, Vetiver, Evernyl
                </li>
              </ul>
            </div>
          </div>
        </section>

        <p className="fade-up mb-6 text-base text-white sm:text-lg">
          <strong className="text-white">Occasion:</strong> Delina Exclusif is
          ideal for day-to-day office wear, where you need something that
          quietly commands respect but remains soft and inviting. Its warm,
          fruity notes create a subtle signature scent, perfect for an everyday
          fragrance that won’t be overpowering.
        </p>

        <p className="fade-up-two mb-6 text-base text-white sm:text-lg">
          <strong className="text-white">
            Why Pick Delina Exclusif for Certain Days?
          </strong>{" "}
          Imagine yourself stepping into important meetings, letting this
          fragrance ground and uplift you. A light application makes this
          fragrance blend seamlessly into your work environment, complementing
          your aura of authority and compassion.
        </p>

        <a
          href="https://www.fragrantica.com/perfume/Parfums-de-Marly/Delina-Exclusif-50370.html"
          target="_blank"
          rel="noopener noreferrer"
          className="fade-up-three mb-10 block text-white underline transition duration-200 hover:text-offWhite sm:mb-12"
        >
          Learn more about Delina Exclusif on Fragrantica
        </a>

        <h2 className="fade-up mb-5 border-b border-white/40 pb-1 text-2xl text-white sm:mb-6 sm:pb-2 sm:text-3xl">
          Evening Opulence: Carolina Herrera Good Girl Suprême
        </h2>

        <section className="fade-up-two mb-10 flex flex-col items-start sm:mb-12 md:flex-row">
          <img
            src={img2}
            alt="Good Girl Suprême Bottle"
            className="mx-auto mb-6 w-3/4 rounded-xl shadow-lg sm:w-2/3 md:mx-0 md:mb-0 md:mr-6 md:w-1/3"
          />

          <div className="flex-1">
            <p className="mb-4 text-base text-white sm:text-lg">
              <strong className="text-white">Why Good Girl Suprême?</strong>{" "}
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
              <ul className="ml-4 list-inside list-disc space-y-2 text-base text-white sm:ml-6 sm:text-lg">
                <li>
                  <strong>Top Notes:</strong> Forest Fruits, Egyptian Jasmine
                </li>
                <li>
                  <strong>Heart Notes:</strong> Tonka Bean, Tuberose
                </li>
                <li>
                  <strong>Base Notes:</strong> Vetiver
                </li>
              </ul>
            </div>
          </div>
        </section>

        <p className="fade-up-three mb-6 text-base text-white sm:text-lg">
          <strong className="text-white">Occasion:</strong> Good Girl Suprême is
          best suited for social or evening events where a more pronounced,
          memorable fragrance is appropriate. The balance of richness and
          elegance makes it ideal for dinners, gatherings, or professional
          social events where a bolder yet sophisticated scent can make a
          statement.
        </p>

        <p className="fade-up-four mb-6 text-base text-white sm:text-lg">
          <strong className="text-white">
            Why Pick Good Girl Suprême for Certain Days?
          </strong>{" "}
          Picture yourself at an evening gathering, letting Good Girl Suprême
          enhance your natural elegance and charm. The grounding vetiver and
          warm tonka bean create a lasting impression, making it a great choice
          for enhancing your presence while still reflecting your warmth and
          strength.
        </p>

        <a
          href="https://www.fragrantica.com/perfume/Carolina-Herrera/Good-Girl-Supreme-61769.html"
          target="_blank"
          rel="noopener noreferrer"
          className="fade-up mb-10 block text-white underline transition duration-200 hover:text-offWhite sm:mb-12"
        >
          Learn more about Good Girl Suprême on Fragrantica
        </a>

        <div className="fade-up-two flex justify-center">
          <Link
            to="/stories"
            className="mt-10 rounded-full bg-white px-6 py-3 text-base text-black shadow-md transition duration-300 hover:bg-offWhite sm:px-8 sm:text-lg"
          >
            Back to Scent Stories
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RachelRuston;
