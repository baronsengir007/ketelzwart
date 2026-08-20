/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

/* Every subpage used to end in white space. This closes them: one line of
   sense, one way onward, over a faint photo so the page ends on the
   roastery instead of on nothing. */
export default function NextStep({
  kicker,
  line,
  cta,
  href,
  img,
}: {
  kicker: string;
  line: string;
  cta: string;
  href: string;
  img: string;
}) {
  return (
    <section className="veil border-t border-rule">
      <img src={img} alt="" aria-hidden className="veil-img" />
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-24 sm:flex-row sm:items-end sm:justify-between">
        <div data-reveal>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-wine">
            {kicker}
          </p>
          <p className="mt-3 max-w-md font-display text-3xl font-light leading-[1.15]">
            {line}
          </p>
        </div>
        <Link
          data-reveal
          data-delay="1"
          href={href}
          className="press shrink-0 border border-wine px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-wine transition-colors hover:bg-wine hover:text-paper"
        >
          {cta}
        </Link>
      </div>
    </section>
  );
}
