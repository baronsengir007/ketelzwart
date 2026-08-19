import type { Metadata } from "next";
import Nav from "../Nav";
import Footer from "../Footer";

export const metadata: Metadata = {
  title: "Book a tasting — Ketelzwart",
  description:
    "Saturday tastings at the kettle: three coffees, three brew methods, forty-five minutes. Free, at the roastery in Amsterdam-Noord.",
};

export default function Visit() {
  return (
    <main>
      <Nav active="visit" />
      <section className="mx-auto max-w-[1400px] px-6 pb-24 pt-10">
        <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-center">
          <div>
            <h1 className="font-display text-5xl font-medium leading-tight">
              Saturday at the kettle
            </h1>
            <p className="mt-5 max-w-md leading-relaxed text-ink-soft">
              Every Saturday at 10:00 and 12:00 we taste the week&apos;s
              batches: three coffees, three brew methods, forty-five
              minutes. It is free, and you sit next to the roaster.
            </p>
            <p className="mt-4 max-w-md leading-relaxed text-ink-soft">
              Walk-ins are welcome while there are stools; a reservation
              guarantees one. Bring nothing but taste.
            </p>
            <div className="mt-7">
              <a
                href="mailto:hello@ketelzwart.example?subject=Tasting%20reservation"
                className="inline-block border border-wine px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-wine transition-colors hover:bg-wine hover:text-paper"
              >
                Reserve — Saturday 10:00 or 12:00
              </a>
            </div>
          </div>
          <div className="border-l-2 border-wine pl-6 font-mono text-sm leading-loose text-ink-soft">
            Ketelzwart roastery
            <br />
            Asterweg 20-D, Amsterdam-Noord
            <br />
            wed–fri 9:00–17:00 · sat 9:00–15:00
            <br />
            hello@ketelzwart.example
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
