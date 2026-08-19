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
  IBM Plex Mono (the tasting card). Motion: none beyond hover: the
  guide's minimalism demands precision, not animation.

Quality floor: responsive, visible focus states, semantic HTML,
meaningful alt text on every photo, `prefers-reduced-motion` trivially
satisfied (no animation).

## Also demonstrated here

`/finder` is a three-question bean finder: a multi-step form as a typed
React client component (answer state, back navigation, a small
deterministic recommendation function), ending in the roast-log card as
the result surface. Multi-page routing with shared Nav/Footer components
and per-page metadata throughout.

## Photo credits

Photos from Unsplash (free to use under the Unsplash License):
roaster drum, coffee beans, roasting scoop, pour-over.
