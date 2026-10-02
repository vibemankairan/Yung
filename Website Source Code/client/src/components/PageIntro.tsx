/**
 * Style reminder: Page intros use a numbered editorial ledger rhythm,
 * strong hierarchy and generous whitespace instead of centred hero blocks.
 */
import { ReactNode } from "react";

export function PageIntro({ number, eyebrow, title, children }: { number: string; eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section className="page-intro">
      <div className="page-number">{number}</div>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <div className="intro-copy">{children}</div>
      </div>
    </section>
  );
}
