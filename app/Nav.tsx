import Link from "next/link";

export default function Nav({ active }: { active?: string }) {
  const item = (href: string, label: string, key: string) => (
    <Link
      href={href}
      className={
        active === key
          ? "text-ink underline underline-offset-8 decoration-wine"
          : "text-ink-soft hover:text-ink"
      }
    >
      {label}
    </Link>
  );
  return (
    /* Sticky: the tasting CTA stays reachable the whole way down the page */
    <header className="sticky top-0 z-20 border-b border-rule/70 bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-wrap items-baseline justify-between gap-4 px-6 py-5">
        <Link
          href="/"
          className="font-display text-2xl font-normal tracking-wide"
        >
          Ketelzwart
        </Link>
        <nav className="flex items-baseline gap-6 text-sm">
          {item("/beans/", "The beans", "beans")}
          {item("/roastery/", "The roastery", "roastery")}
          {item("/finder/", "Find your bean", "finder")}
          <Link
            href="/visit/"
            className={
              "font-bold uppercase tracking-[0.12em] text-wine hover:underline underline-offset-4" +
              (active === "visit" ? " underline" : "")
            }
          >
            Book a tasting
          </Link>
        </nav>
      </div>
    </header>
  );
}
