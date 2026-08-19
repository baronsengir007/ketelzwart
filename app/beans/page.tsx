/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Nav from "../Nav";
import Footer from "../Footer";

export const metadata: Metadata = {
  title: "The beans — Ketelzwart",
  description:
    "Three beans, roasted weekly in Amsterdam-Noord: Guji, Huila and the Kettle Blend. Priced openly, ordered light to dark.",
};

const BEANS = [
  {
    name: "Guji, Ethiopia",
    profile: "light · floral · bergamot",
    price: "€14.50 / 250 g",
    img: "beans.jpg",
    alt: "Light-roasted coffee beans filling the frame",
    body: "Washed lot from the Guji highlands, 2025 harvest. Roasted in 9:40 to 203°C, the lightest roast we sell. Jasmine and apricot in the cup; at its best as a pour-over.",
  },
  {
    name: "Huila, Colombia",
    profile: "medium · red fruit · panela",
    price: "€13.00 / 250 g",
    img: "pour.jpg",
    alt: "Pour-over brewing, water poured into a glass carafe",
    body: "A dependable washed Huila that takes milk without disappearing. Red fruit up front, raw cane sugar at the end. Our everyday advice for filter and Aeropress.",
  },
  {
    name: "Kettle Blend",
    profile: "darker · cocoa · espresso-steady",
    price: "€11.50 / 250 g",
    img: "scoop.jpg",
    alt: "A metal scoop turning freshly roasted beans",
    body: "The one blend we allow ourselves: Brazil and Huila, roasted past first crack for cocoa and weight. Built for espresso machines that get used before 7:00.",
  },
];

export default function Beans() {
  return (
    <main>
      <Nav active="beans" />
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-10">
        <h1 className="font-display text-5xl font-medium">
          Three beans, nothing else
        </h1>
        <p className="mt-4 max-w-lg text-ink-soft">
          More flavours than three we do not need. Roasted every week,
          ordered light to dark, prices on the shelf and on the site.
        </p>
        <div className="mt-14 space-y-20">
          {BEANS.map((b, i) => (
            <article
              data-reveal
              key={b.name}
              className={`grid items-center gap-8 md:grid-cols-2 ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="img-zoom">
                <img
                  src={`../img/${b.img}`}
                  alt={b.alt}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div>
                <h2 className="font-display text-3xl font-medium">{b.name}</h2>
                <p className="mt-1 font-mono text-xs uppercase tracking-wide text-ink-soft">
                  {b.profile}
                </p>
                <p className="mt-4 max-w-md leading-relaxed text-ink-soft">
                  {b.body}
                </p>
                <p className="mt-4 text-sm font-bold">{b.price}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-16 border-t border-rule pt-6 text-sm text-ink-soft">
          Bags are roasted to order and picked up at the roastery, or taste
          all three first at a{" "}
          <a href="../visit/" className="text-wine underline underline-offset-4">
            Saturday tasting
          </a>
          .
        </p>
      </section>
      <Footer />
    </main>
  );
}
