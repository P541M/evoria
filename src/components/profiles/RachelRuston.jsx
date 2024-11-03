import React from "react";
import { Link } from "react-router-dom";

function RachelRuston() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-backgroundPrimary to-backgroundSecondary pt-16 py-12 px-4 sm:px-6 md:px-8 lg:px-16">
      {/* Added responsive padding for mobile and tablet */}
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-textAccent mb-8 sm:mb-12 text-center leading-tight">
          Rachel Ruston
        </h1>

        {/* Signature Daytime Scent Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-textAccent mb-4 border-b pb-2 border-textAccent/40">
            Signature Daytime Scent: Parfums de Marly Delina Exclusif
          </h2>
          <p className="text-textPrimary mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
            <strong className="font-semibold text-highlight">
              Why Delina Exclusif?
            </strong>{" "}
            Delina Exclusif is an exceptional choice for daily wear because it
            embodies a balance of elegance, strength, and approachability—
            qualities that truly reflect you. This fragrance combines
            sophistication with subtle warmth, making it feel polished yet
            inviting. It’s refined enough for a professional setting and carries
            an air of authority without overwhelming those around you, aligning
            perfectly with your powerful yet nurturing energy.
          </p>

          <div className="mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl font-semibold text-textAccent mb-2">
              Notes:
            </h3>
            <ul className="list-disc list-inside text-textPrimary ml-4 sm:ml-6 space-y-2">
              <li>
                <strong>Top Notes:</strong> Pear, Lychee, Grapefruit
              </li>
              <li>
                <strong>Heart Notes:</strong> Turkish Rose, Incense, Vetiver
              </li>
              <li>
                <strong>Base Notes:</strong> Vanilla, Musk, Evernyl (a woody
                moss-like note), and Oud
              </li>
            </ul>
          </div>

          <p className="text-textPrimary mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
            <strong className="font-semibold text-highlight">Occasion:</strong>{" "}
            Delina Exclusif is ideal for day-to-day office wear, where you need
            something that quietly commands respect but remains soft and
            inviting. Its warm, fruity notes create a subtle signature scent,
            perfect for an everyday fragrance that won’t be overpowering.
          </p>

          <p className="text-textPrimary leading-relaxed text-base sm:text-lg">
            <strong className="font-semibold text-highlight">
              Why Pick Delina Exclusif for Certain Days?
            </strong>{" "}
            Choose Delina Exclusif when you want to make a steady, professional
            impression. Its fruity and musky undertones are both uplifting and
            grounding, ideal for days with strategic meetings or interactions
            that require your natural warmth to shine through. A light
            application makes this fragrance blend seamlessly into your work
            environment, complementing your aura of authority and compassion.
          </p>
        </section>

        {/* Evening Opulence Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-textAccent mb-4 border-b pb-2 border-textAccent/40">
            Evening Opulence: Carolina Herrera Good Girl Suprême
          </h2>
          <p className="text-textPrimary mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
            <strong className="font-semibold text-highlight">
              Why Good Girl Suprême?
            </strong>{" "}
            Good Girl Suprême brings a touch of boldness and sophistication that
            shines in social settings. This fragrance resonates with your
            natural ability to stand out effortlessly while staying grounded.
            With its balance of berries, tonka bean, and vetiver, it’s both rich
            and inviting—qualities that align with your leadership style and
            warmth. It’s an ideal match for evening gatherings, events, or
            social occasions where you want a fragrance that enhances your
            presence.
          </p>

          <div className="mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl font-semibold text-textAccent mb-2">
              Notes:
            </h3>
            <ul className="list-disc list-inside text-textPrimary ml-4 sm:ml-6 space-y-2">
              <li>
                <strong>Top Notes:</strong> Juicy Berries, Egyptian Jasmine
              </li>
              <li>
                <strong>Heart Notes:</strong> Tonka Bean
              </li>
              <li>
                <strong>Base Notes:</strong> Vetiver (an earthy, grounding note)
              </li>
            </ul>
          </div>

          <p className="text-textPrimary mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
            <strong className="font-semibold text-highlight">Occasion:</strong>{" "}
            Good Girl Suprême is best suited for social or evening events where
            a more pronounced, memorable fragrance is appropriate. The balance
            of richness and elegance makes it ideal for dinners, gatherings, or
            professional social events where a bolder yet sophisticated scent
            can make a statement.
          </p>

          <p className="text-textPrimary leading-relaxed text-base sm:text-lg">
            <strong className="font-semibold text-highlight">
              Why Pick Good Girl Suprême for Certain Days?
            </strong>{" "}
            Opt for Good Girl Suprême on days when you have events or gatherings
            after work. Its bolder presence and layered complexity make it
            suitable for social situations where a touch of glamour is welcomed.
            The grounding vetiver and warm tonka bean create a lasting
            impression, making it a great choice for enhancing your presence
            while still reflecting your warmth and strength.
          </p>
        </section>

        {/* Back Link */}
        <div className="flex justify-center">
          <Link
            to="/scentful-stories"
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
