import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/rr1.jpg";
import img2 from "../../assets/rr2.jpg";

function RachelRuston() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-backgroundPrimary to-backgroundSecondary pt-24 py-12 px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-textAccent mb-8 text-center leading-tight fade-up">
          Rachel Ruston
        </h1>

        <p className="text-lg sm:text-xl italic text-highlight text-center mb-10 fade-up">
          "A fragrance as graceful as your warmth, as powerful as your
          presence."
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold text-textAccent mb-6 border-b pb-2 border-textAccent/40">
          Signature Daytime Scent: Parfums de Marly Delina Exclusif
        </h2>
        <section className="flex flex-col md:flex-row items-start mb-12 fade-up-two">
          <img
            src={img1}
            alt="Delina Exclusif Bottle"
            className="w-full md:w-1/3 rounded-lg shadow-lg mb-4 md:mb-0 md:mr-8"
          />

          <div className="flex-1">
            <p className="text-textPrimary mb-8 leading-relaxed text-base sm:text-lg">
              <strong className="font-semibold text-highlight">
                Why Delina Exclusif?
              </strong>{" "}
              Delina Exclusif is an exceptional choice for daily wear because it
              embodies a balance of{" "}
              <span className="bg-textAccent/10 italic">elegance</span>,{" "}
              <span className="bg-textAccent/10 italic">strength</span>, and{" "}
              <span className="bg-textAccent/10 italic">approachability</span>—
              qualities that truly reflect you. This fragrance combines
              sophistication with subtle warmth, making it feel polished yet
              inviting. It’s refined enough for a professional setting and
              carries an air of authority without overwhelming those around you,
              aligning perfectly with your powerful yet nurturing energy.
            </p>

            <div className="mb-4">
              <h3 className="text-lg sm:text-xl font-semibold text-textAccent mb-4">
                Notes:
              </h3>
              <ul className="list-disc list-inside text-textPrimary ml-4 sm:ml-6 space-y-2">
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

        <p className="text-textPrimary mb-8 leading-relaxed text-base sm:text-lg">
          <strong className="font-semibold text-highlight">Occasion:</strong>{" "}
          Delina Exclusif is ideal for day-to-day office wear, where you need
          something that quietly commands respect but remains soft and inviting.
          Its warm, fruity notes create a subtle signature scent, perfect for an
          everyday fragrance that won’t be overpowering.
        </p>

        <p className="text-textPrimary mb-8 leading-relaxed text-base sm:text-lg">
          <strong className="font-semibold text-highlight">
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
          className="block text-highlight hover:text-highlight/70 transition duration-200 underline mb-12"
        >
          Learn more about Delina Exclusif on Fragrantica
        </a>

        <h2 className="text-2xl sm:text-3xl font-semibold text-textAccent mb-6 border-b pb-2 border-textAccent/40">
          Evening Opulence: Carolina Herrera Good Girl Suprême
        </h2>
        <section className="flex flex-col md:flex-row items-start mb-12 fade-up-three">
          <img
            src={img2}
            alt="Good Girl Suprême Bottle"
            className="w-full md:w-1/3 rounded-lg shadow-lg mb-4 md:mb-0 md:mr-8"
          />

          <div className="flex-1">
            <p className="text-textPrimary mb-8 leading-relaxed text-base sm:text-lg">
              <strong className="font-semibold text-highlight">
                Why Good Girl Suprême?
              </strong>{" "}
              Good Girl Suprême brings a touch of{" "}
              <span className="bg-textAccent/10 italic">boldness</span> and{" "}
              <span className="bg-textAccent/10 italic">sophistication</span>{" "}
              that shines in social settings. This fragrance resonates with your
              natural ability to stand out effortlessly while staying grounded.
              With its balance of berries, tonka bean, and vetiver, it’s both
              rich and inviting—qualities that align with your leadership style
              and warmth. It’s an ideal match for evening gatherings, events, or
              social occasions where you want a fragrance that enhances your
              presence.
            </p>

            <div className="mb-4">
              <h3 className="text-lg sm:text-xl font-semibold text-textAccent mb-4">
                Notes:
              </h3>
              <ul className="list-disc list-inside text-textPrimary ml-4 sm:ml-6 space-y-2">
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

        <p className="text-textPrimary mb-8 leading-relaxed text-base sm:text-lg">
          <strong className="font-semibold text-highlight">Occasion:</strong>{" "}
          Good Girl Suprême is best suited for social or evening events where a
          more pronounced, memorable fragrance is appropriate. The balance of
          richness and elegance makes it ideal for dinners, gatherings, or
          professional social events where a bolder yet sophisticated scent can
          make a statement.
        </p>

        <p className="text-textPrimary mb-8 leading-relaxed text-base sm:text-lg">
          <strong className="font-semibold text-highlight">
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
          className="block text-highlight hover:text-highlight/70 transition duration-200 underline mb-12"
        >
          Learn more about Good Girl Suprême on Fragrantica
        </a>

        <div className="flex justify-center fade-up-four">
          <Link
            to="/stories"
            className="mt-8 px-6 sm:px-8 py-3 bg-textAccent text-backgroundSecondary font-semibold rounded-full shadow-md hover:bg-textAccent/90 transition duration-300 text-base sm:text-lg"
          >
            Back to Scent Stories
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RachelRuston;
