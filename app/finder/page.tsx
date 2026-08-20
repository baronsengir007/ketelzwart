import type { Metadata } from "next";
import Nav from "../Nav";
import Footer from "../Footer";
import BeanFinder from "./BeanFinder";

export const metadata: Metadata = {
  title: "Find your bean — Ketelzwart",
  description:
    "Three questions, one recommendation: which of our three beans fits how you actually drink coffee.",
};

export default function Finder() {
  return (
    <main>
      <Nav active="finder" />
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-10">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-wine">
          Three questions
        </p>
        <h1 className="mt-4 font-display text-6xl font-light tracking-[-0.02em]">
          Find your bean
        </h1>
        <p className="mt-5 max-w-lg text-ink-soft">
          Three questions about how you actually drink coffee; one honest
          recommendation from a menu of three.
        </p>
        <div className="mt-12">
          <BeanFinder />
        </div>
      </section>
      <Footer />
    </main>
  );
}
