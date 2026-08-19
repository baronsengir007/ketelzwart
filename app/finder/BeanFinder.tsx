"use client";

import { useState } from "react";

type Answers = { brew?: string; milk?: string; mood?: string };

const QUESTIONS = [
  {
    key: "brew" as const,
    q: "How do you usually brew?",
    options: [
      ["filter", "Filter, pour-over or Aeropress"],
      ["espresso", "Espresso machine or moka pot"],
      ["any", "Whatever the morning allows"],
    ],
  },
  {
    key: "milk" as const,
    q: "Milk in your cup?",
    options: [
      ["black", "Black, always"],
      ["milk", "A splash or more"],
      ["depends", "Depends on the coffee"],
    ],
  },
  {
    key: "mood" as const,
    q: "What should the cup do?",
    options: [
      ["surprise", "Surprise me: florals, fruit, the works"],
      ["comfort", "Comfort me: round, sweet, familiar"],
      ["wake", "Wake me: dark, heavy, dependable"],
    ],
  },
];

function recommend(a: Answers) {
  if (a.mood === "wake" || (a.brew === "espresso" && a.milk === "milk")) {
    return {
      name: "Kettle Blend",
      why: "Espresso-steady, cocoa-deep, and it carries milk without disappearing. Roasted past first crack for exactly this job.",
      href: "../beans/",
    };
  }
  if (a.mood === "surprise" && a.milk !== "milk") {
    return {
      name: "Guji, Ethiopia",
      why: "Our lightest roast: jasmine, bergamot and apricot. Best black, best as a pour-over, best when you have five quiet minutes.",
      href: "../beans/",
    };
  }
  return {
    name: "Huila, Colombia",
    why: "Red fruit and raw cane sugar, friendly in every brewer, happy with or without milk. The safe answer that is not boring.",
    href: "../beans/",
  };
}

export default function BeanFinder() {
  const [answers, setAnswers] = useState<Answers>({});
  const [step, setStep] = useState(0);

  const done = step >= QUESTIONS.length;
  const current = QUESTIONS[step];

  if (done) {
    const r = recommend(answers);
    return (
      <div className="proefkaart border border-rule p-8 shadow-[0_16px_40px_-24px_rgba(28,22,19,0.4)]">
        <p className="font-mono text-xs uppercase tracking-wider text-ink-soft">
          Your bean
        </p>
        <h2 className="mt-2 font-display text-4xl font-medium text-wine">
          {r.name}
        </h2>
        <p className="mt-4 max-w-md leading-relaxed text-ink-soft">{r.why}</p>
        <div className="mt-6 flex flex-wrap gap-5">
          <a
            href={r.href}
            className="press inline-block border border-wine px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-wine transition-colors hover:bg-wine hover:text-paper"
          >
            See the bean
          </a>
          <button
            onClick={() => {
              setAnswers({});
              setStep(0);
            }}
            className="text-sm font-bold text-ink-soft underline-offset-4 hover:underline"
          >
            Start over
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-wider text-ink-soft">
        Question {step + 1} of {QUESTIONS.length}
      </p>
      <h2 className="mt-2 font-display text-3xl font-medium">{current.q}</h2>
      <div className="mt-6 grid gap-3 sm:max-w-lg">
        {current.options.map(([value, label]) => (
          <button
            key={value}
            onClick={() => {
              setAnswers((a) => ({ ...a, [current.key]: value }));
              setStep((s) => s + 1);
            }}
            className="border border-rule bg-card px-5 py-4 text-left transition-colors hover:border-wine hover:text-wine"
          >
            {label}
          </button>
        ))}
      </div>
      {step > 0 && (
        <button
          onClick={() => setStep((s) => s - 1)}
          className="mt-5 text-sm text-ink-soft underline-offset-4 hover:underline"
        >
          Back
        </button>
      )}
    </div>
  );
}
