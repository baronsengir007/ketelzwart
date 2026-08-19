export default function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-ink-soft">
        <p>
          <span className="font-display text-base font-semibold text-ink">
            Ketelzwart
          </span>{" "}
          is a fictional roastery. A portfolio project by Rienk Rienks -{" "}
          <a
            href="https://github.com/baronsengir007/ketelzwart"
            className="text-wine underline underline-offset-4"
          >
            source and design notes on GitHub
          </a>
          . Photography via Unsplash. Built with Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
