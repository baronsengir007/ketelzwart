# Ketelzwart

A fictional specialty coffee roastery in Amsterdam-Noord. Built as a
portfolio demonstration by Rienk Rienks; the site's footer says so too.

Live: https://baronsengir007.github.io/ketelzwart/

## Stack

Next.js (App Router, static export), Tailwind CSS v4, TypeScript.
Deployed on GitHub Pages. Photography via Unsplash (Unsplash License).
Multi-page: home, /beans, /roastery, /visit: shared Nav/Footer
components, per-page metadata, client-side navigation via next/link.

## How this site was designed

Built behavior-first, following the same behavior-driven UI method as my
other demos: derive the layout from a Behavior Read (five behavioural
states: Arrival, Orientation, Decision, Action, Confirmation), then name
the style and patterns from an interface field guide, then execute.

**Behavior Read:** get a design-conscious local (browsing, medium
motivation, first visit) to reserve a Saturday tasting; the barrier is
motivation (why THIS roastery?); the page carries them from Arrival to
Decision; measured by reservation-CTA clicks.

Derived decisions:

- **Style: editorial serif** (magazine DNA: large serif display,
  asymmetric grid, generous whitespace, restrained color): the field
  guide's fit for trust-through-craft brands. Deliberately NOT the
  cream-plus-terracotta coffee cliche: cool paper white, near-black ink,
  a single bordeaux accent.
- **Signature element: the roast-log tasting card**: a ruled index
  card, set in mono, with the real numbers (roast time, temperature,
  purchase price vs Fairtrade minimum). Specificity is the trust play;
  no invented awards, no testimonials.
- **Full-bleed photo hero with an overlapping paper panel**: the
  subject's world (the roaster drum) opens the page; the headline panel
  breaks the photo's frame once, on purpose (one intentional grid break
  reads as design, three read as bugs).
- **Three beans, one honest menu**: a considered-choice set of three
  (Hick's law), ordered light to dark, prices visible before any ask.
- **Type:** Cormorant Garamond (display, true italics), Karla (body),
  IBM Plex Mono (the tasting card). Display weight is 300: at 60-72px a
  light serif reads as considered where a medium weight reads as loud.
  Cormorant's figures are old-style by default, so prices set in the
  display face sit in the line instead of shouting above it.
- **Depth without decoration.** Section-wide photos sit behind the text
  at 14% opacity, masked to fade out at both edges (`.veil` in
  `globals.css`). Measured, not guessed: the softest body text keeps a
  5.5:1 contrast ratio over the darkest part of the photo, above the
  4.5:1 AA floor.
- **Motion is orientation only, and it cannot hide content.** Scroll
  reveals are CSS scroll-driven animations (`animation-timeline: view()`),
  not a JavaScript IntersectionObserver, and they live entirely inside
  `@supports` and `prefers-reduced-motion: no-preference`. That ordering
  is the whole point: a browser without support, or a visitor who asked
  for less motion, never gets the `opacity: 0` starting state at all, so
  no element can end up permanently invisible. Elements in a group
  animate over slightly offset scroll ranges, so a section builds rather
  than flicking into place, and the range closes at 65% of entry so
  anything properly in frame is fully opaque: never a heading above an
  empty gap. This replaced an observer-driven version that did exactly
  that when reveals were applied per element instead of per section.
- **No page is a dead end.** Every subpage closes with one line of
  sense and one way onward (`NextStep.tsx`), because a page that ends
  in white space ends the visit too.

Deliberately not borrowed from the restaurant sites this was measured
against: the endless marquee band (an infinite loop in the interface),
and the cream-plus-serif-plus-terracotta palette the field guide now
lists as a cliche in its own right.

Quality floor: responsive to 390px with no horizontal overflow, visible
focus states, semantic HTML, meaningful alt text on content photos and
`alt=""` on the decorative ones, measured colour contrast,
`prefers-reduced-motion` respected.

## Also demonstrated here

`/finder` is a three-question bean finder: a multi-step form as a typed
React client component (answer state, back navigation, a small
deterministic recommendation function), ending in the roast-log card as
the result surface. Multi-page routing with shared Nav/Footer components
and per-page metadata throughout.

## How this was built

Written in Claude Code, but the design decisions come from a fixed
pipeline rather than from prompting until something looks nice. Two
reference documents of my own do the deciding: a behavior-driven UI
method (the five behavioural states and the Behavior Read above) and an
interface field guide (named layout patterns, style families, and the
cliches to avoid, refreshed as they rotate). Two Claude Code skills
execute against those: `design-taste-frontend` for visual direction and
anti-template discipline, and `emil-design-eng` for the motion rules
(transform and opacity only, ease-out curves, hover gated behind a
pointer query, reduced motion respected).

Behaviour outranks aesthetics at every conflict, and every visual
choice above is traceable back to the Behavior Read. Verification is
part of the loop, not a final glance: layouts are checked in a real
browser at desktop and 390px, colour contrast is measured rather than
eyeballed, and reduced-motion is tested with the media feature actually
forced on.

## Photo credits

Photos from Unsplash (free to use under the Unsplash License):
roaster drum, coffee beans, roasting scoop, pour-over.
