/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Home() {
  return (
    <main>
      <Nav />

      {/* Hero: edge-to-edge photo, headline panel on reading width */}
      <section className="relative">
        <div className="relative">
          <img
            src="img/hero.jpg"
            alt="Freshly roasted beans pouring from the cooling drum of the roaster"
            className="h-[64vh] min-h-[440px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-transparent" />
        </div>
        <div className="mx-auto max-w-6xl px-6">
        <div className="relative -mt-28 max-w-2xl bg-paper p-8 pb-0 sm:ml-10">
          <h1 className="font-display text-5xl font-medium leading-[1.04] sm:text-6xl">
            Born dark,
            <br />
            roasted <em className="text-wine">light</em>.
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">
            Ketelzwart roasts small batches in Amsterdam-Noord. Every
            Saturday the kettle room is open: taste three beans side by
            side and take home the one that stays with you.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-5">
            <Link
              href="/visit/"
              className="inline-block border border-wine px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-wine transition-colors hover:bg-wine hover:text-paper"
            >
              Book a tasting
            </Link>
            <Link
              href="/finder/"
              className="text-sm font-bold text-wine underline-offset-4 hover:underline"
            >
              Find your bean in three questions
            </Link>
          </div>
        </div>
        </div>
      </section>

      {/* Teaser: the promise in one line each */}
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-3">
        <Link href="/beans/" className="group border-t border-rule pt-5">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-wine">
            The beans
          </p>
          <h2 className="mt-2 font-display text-2xl font-medium group-hover:text-wine">
            Three beans, nothing else
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            Light, medium, darker. Roasted every week, priced openly,
            ordered light to dark.
          </p>
        </Link>
        <Link href="/roastery/" className="group border-t border-rule pt-5">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-wine">
            The roastery
          </p>
          <h2 className="mt-2 font-display text-2xl font-medium group-hover:text-wine">
            Twelve kilos at a time
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            Every batch gets a number and a card in the roast log. The
            card travels with your bag.
          </p>
        </Link>
        <Link href="/visit/" className="group border-t border-rule pt-5">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-wine">
            Saturdays
          </p>
          <h2 className="mt-2 font-display text-2xl font-medium group-hover:text-wine">
            Tasting at the kettle
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            Three coffees, three brew methods, forty-five minutes. Free,
            next to the roaster.
          </p>
        </Link>
      </section>

      <Footer />
    </main>
  );
}
