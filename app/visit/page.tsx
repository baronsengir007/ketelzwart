/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Nav from "../Nav";
import Footer from "../Footer";

export const metadata: Metadata = {
  title: "Book a tasting — Ketelzwart",
  description:
    "Saturday tastings at the kettle: three coffees, three brew methods, forty-five minutes. Free, at the roastery in Amsterdam-Noord.",
};

/* What actually happens, minute by minute. The barrier here is not price
   (it is free) but not knowing what you are walking into. */
const RUNDOWN = [
  ["0:00", "You get a stool at the kettle and the week's roast log."],
  ["0:05", "Cup one, the lightest. Filter, no milk, no hurry."],
  ["0:20", "Cup two and three side by side: same water, two methods."],
  ["0:40", "Take home whichever one stayed with you. No obligation."],
];

const PRACTICAL = [
  ["Where", "Asterweg 20-D, Amsterdam-Noord"],
  ["When", "Saturdays, 10:00 and 12:00"],
  ["Shop hours", "wed–fri 9:00–17:00 · sat 9:00–15:00"],
  ["Email", "hello@ketelzwart.example"],
];

export default function Visit() {
  return (
    <main>
      <Nav active="visit" />

      {/* Same room in the background from the first screen */}
      <section className="veil">
        <img
          src="../img/hero.jpg"
          alt=""
          aria-hidden
          className="veil-img veil-soft"
        />
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-10">
        <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:items-start">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-wine">
              Reservations
            </p>
            <h1 className="mt-4 font-display text-6xl font-light leading-[1.05] tracking-[-0.02em]">
              Saturday at the kettle
            </h1>
            <p className="mt-6 max-w-md leading-relaxed text-ink-soft">
              Every Saturday at 10:00 and 12:00 we taste the week&apos;s
              batches: three coffees, three brew methods, forty-five
              minutes. It is free, and you sit next to the roaster.
            </p>
            <p className="mt-4 max-w-md leading-relaxed text-ink-soft">
              Walk-ins are welcome while there are stools; a reservation
              guarantees one. Bring nothing but taste.
            </p>
            <div className="mt-8">
              <a
                href="mailto:hello@ketelzwart.example?subject=Tasting%20reservation"
                className="press inline-block border border-wine px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-wine transition-colors hover:bg-wine hover:text-paper"
              >
                Reserve — Saturday 10:00 or 12:00
              </a>
            </div>
          </div>

          {/* Practical facts as a scannable list instead of one mono block */}
          <dl className="border-t border-rule">
            {PRACTICAL.map(([term, value]) => (
              <div
                key={term}
                className="flex flex-wrap gap-x-8 gap-y-1 border-b border-rule py-4"
              >
                <dt className="w-28 shrink-0 font-mono text-xs uppercase tracking-[0.18em] text-wine">
                  {term}
                </dt>
                <dd className="font-mono text-sm text-ink-soft">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
        </div>
      </section>

      {/* Forty-five minutes, spelled out, over the kettle room itself */}
      <section className="veil border-t border-rule">
        <img src="../img/pour.jpg" alt="" aria-hidden className="veil-img" />
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p
            data-reveal
            className="font-mono text-xs uppercase tracking-[0.18em] text-wine"
          >
            Forty-five minutes
          </p>
          <h2
            data-reveal
            data-delay="1"
            className="mt-3 max-w-lg font-display text-4xl font-light leading-[1.1]"
          >
            What happens while you sit there
          </h2>
          <ol className="mt-10 max-w-2xl">
            {RUNDOWN.map(([time, what], i) => (
              <li
                key={time}
                data-reveal
                data-delay={Math.min(i + 1, 3) || undefined}
                className="flex flex-wrap gap-x-8 gap-y-1 border-t border-rule py-4"
              >
                <span className="w-20 shrink-0 font-mono text-sm text-wine">
                  {time}
                </span>
                <span className="max-w-md leading-relaxed text-ink-soft">
                  {what}
                </span>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-sm text-ink-soft">
            Ten stools, so a reservation is the difference between standing
            and sitting.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
