import type { Metadata } from "next";
import Nav from "../Nav";
import Footer from "../Footer";
import NextStep from "../NextStep";

export const metadata: Metadata = {
  title: "The roastery — Ketelzwart",
  description:
    "Twelve kilos per batch, every batch tasted, every batch logged. How Ketelzwart roasts in Amsterdam-Noord.",
};

export default function Roastery() {
  return (
    <main>
      <Nav active="roastery" />
      <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-24 pt-10 md:grid-cols-[1.2fr_1fr] md:items-start">
        <div className="md:pr-10">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-wine">
            The roastery
          </p>
          <h1 className="mt-4 font-display text-6xl font-light leading-[1.05] tracking-[-0.02em]">
            Twelve kilos at a time, and no more
          </h1>
          {/* Three claims, three labels: the page becomes scannable and
              each claim can be checked on its own */}
          <div className="mt-10 space-y-9">
            <div data-reveal className="border-t border-rule pt-5">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-wine">
                The drum
              </p>
              <p className="mt-2 leading-relaxed text-ink-soft">
                Our drum roasts twelve kilos per batch. Small enough to
                taste every single batch before it goes into a bag; large
                enough to keep the neighbourhood in coffee. Every batch
                gets a number and a card in the roast log, and that card
                travels with your bag.
              </p>
            </div>
            <div data-reveal data-delay="1" className="border-t border-rule pt-5">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-wine">
                What we pay
              </p>
              <p className="mt-2 leading-relaxed text-ink-soft">
                We buy from two importers who pay above the Fairtrade
                minimum per lot, and we tell you per bean what it cost. No
                stories about journeys to origin; just the numbers.
              </p>
            </div>
            <div data-reveal data-delay="2" className="border-t border-rule pt-5">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-wine">
                Come watch
              </p>
              <p className="mt-2 leading-relaxed text-ink-soft">
                The kettle room is open during shop hours. If the drum is
                running you are welcome to watch; first crack is at minute
                eight, give or take.
              </p>
            </div>
          </div>
        </div>

        {/* Signature: the roast-log tasting card */}
        <div>
        <aside
          aria-label="Tasting card from the roast log"
          className="proefkaart kaart rotate-[1.2deg] border border-rule p-6 font-mono text-sm leading-[28px] shadow-[0_16px_40px_-24px_rgba(28,22,19,0.4)]"
        >
          <div className="flex justify-between text-xs uppercase tracking-wider text-ink-soft">
            <span>Roast log</span>
            <span>№ 214</span>
          </div>
          <div className="mt-[10px]">
            BEAN&nbsp;&nbsp;&nbsp;&nbsp;Guji, Ethiopia
            <br />
            HARVEST&nbsp;2025, washed
            <br />
            ROAST&nbsp;&nbsp;&nbsp;light — 9:40, 203°C
            <br />
            CUP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bergamot, jasmine, apricot
            <br />
            PAID&nbsp;&nbsp;&nbsp;&nbsp;$4.90/lb — 2.3× FT minimum
          </div>
          <div className="mt-[10px] font-display text-lg italic text-wine">
            &ldquo;best batch of this spring&rdquo;
          </div>
        </aside>
        <p className="mt-8 max-w-sm border-t border-rule pt-5 text-sm leading-relaxed text-ink-soft sm:ml-10">
          Every bag leaves with a card like this one: the batch number, the
          roast in minutes and degrees, what we paid per pound, and what we
          tasted before it went out. Number 214 went out this spring.
        </p>
        </div>
      </section>
      <NextStep
        kicker="Saturdays"
        line="The drum runs while you taste. Come stand next to it."
        cta="Book a tasting"
        href="/visit/"
        img="../img/hero.jpg"
      />
      <Footer />
    </main>
  );
}
