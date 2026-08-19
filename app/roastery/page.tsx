import type { Metadata } from "next";
import Nav from "../Nav";
import Footer from "../Footer";

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
          <h1 className="font-display text-5xl font-medium leading-tight">
            Twelve kilos at a time, and no more
          </h1>
          <p className="mt-6 leading-relaxed text-ink-soft">
            Our drum roasts twelve kilos per batch. Small enough to taste
            every single batch before it goes into a bag; large enough to
            keep the neighbourhood in coffee. Every batch gets a number and
            a card in the roast log, and that card travels with your bag.
          </p>
          <p className="mt-4 leading-relaxed text-ink-soft">
            We buy from two importers who pay above the Fairtrade minimum
            per lot, and we tell you per bean what it cost. No stories
            about journeys to origin; just the numbers.
          </p>
          <p className="mt-4 leading-relaxed text-ink-soft">
            The kettle room is open during shop hours. If the drum is
            running you are welcome to watch; first crack is at minute
            eight, give or take.
          </p>
        </div>

        {/* Signature: the roast-log tasting card */}
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
      </section>
      <Footer />
    </main>
  );
}
