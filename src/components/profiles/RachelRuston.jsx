import React from "react";
import { Link } from "react-router-dom";

function RachelRuston() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Rachel Ruston</h1>

        {/* Signature Daytime Scent */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Signature Daytime Scent: Parfums de Marly Delina Exclusif
          </h2>
          <p className="text-gray-700 mb-4">
            <strong>Why Delina Exclusif?</strong> Delina Exclusif is an
            exceptional choice for daily wear because it embodies a balance of
            elegance, strength, and approachability—qualities that truly reflect
            you. This fragrance combines sophistication with subtle warmth,
            making it feel polished yet inviting. It’s refined enough for a
            professional setting and carries an air of authority without
            overwhelming those around you, aligning perfectly with your powerful
            yet nurturing energy.
          </p>

          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-700">Notes:</h3>
            <ul className="list-disc list-inside text-gray-600">
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

          <p className="text-gray-700 mb-4">
            <strong>Occasion:</strong> Delina Exclusif is ideal for day-to-day
            office wear, where you need something that quietly commands respect
            but remains soft and inviting. Its warm, fruity notes create a
            subtle signature scent, perfect for an everyday fragrance that won’t
            be overpowering.
          </p>

          <p className="text-gray-700 mb-4">
            <strong>Why Pick Delina Exclusif for Certain Days?</strong> Choose
            Delina Exclusif when you want to make a steady, professional
            impression. Its fruity and musky undertones are both uplifting and
            grounding, ideal for days with strategic meetings or interactions
            that require your natural warmth to shine through. A light
            application makes this fragrance blend seamlessly into your work
            environment, complementing your aura of authority and compassion.
          </p>
        </section>

        {/* Evening Opulence */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Evening Opulence: Carolina Herrera Good Girl Suprême
          </h2>
          <p className="text-gray-700 mb-4">
            <strong>Why Good Girl Suprême?</strong> Good Girl Suprême brings a
            touch of boldness and sophistication that shines in social settings.
            This fragrance resonates with your natural ability to stand out
            effortlessly while staying grounded. With its balance of berries,
            tonka bean, and vetiver, it’s both rich and inviting—qualities that
            align with your leadership style and warmth. It’s an ideal match for
            evening gatherings, events, or social occasions where you want a
            fragrance that enhances your presence.
          </p>

          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-700">Notes:</h3>
            <ul className="list-disc list-inside text-gray-600">
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

          <p className="text-gray-700 mb-4">
            <strong>Occasion:</strong> Good Girl Suprême is best suited for
            social or evening events where a more pronounced, memorable
            fragrance is appropriate. The balance of richness and elegance makes
            it ideal for dinners, gatherings, or professional social events
            where a bolder yet sophisticated scent can make a statement.
          </p>

          <p className="text-gray-700 mb-4">
            <strong>Why Pick Good Girl Suprême for Certain Days?</strong> Opt
            for Good Girl Suprême on days when you have events or gatherings
            after work. Its bolder presence and layered complexity make it
            suitable for social situations where a touch of glamour is welcomed.
            The grounding vetiver and warm tonka bean create a lasting
            impression, making it a great choice for enhancing your presence
            while still reflecting your warmth and strength.
          </p>
        </section>

        <Link
          to="/fragrance-picks"
          className="inline-block mt-6 px-4 py-2 bg-blue-600 text-white font-semibold rounded shadow hover:bg-blue-700"
        >
          Back to All Picks
        </Link>
      </div>
    </div>
  );
}

export default RachelRuston;
