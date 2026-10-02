/**
 * Style reminder: The Discipline Ledger membership page presents prices as a clear
 * progression ledger, using one vermilion focal plan and calm accessible form design.
 */
import { PageIntro } from "@/components/PageIntro";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Button } from "@/components/ui/button";
import { additionalServices, memberships } from "@/lib/dobuData";
import { Check, ShieldCheck } from "lucide-react";
import { FormEvent, useState } from "react";

export default function Membership() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <PageIntro number="03" eyebrow="Membership options" title="A clear plan for the way you want to train.">
          <p>Start with the sessions you can realistically attend, then increase your training as your confidence and goals grow. There are no hidden joining fees in the published monthly plans.</p>
        </PageIntro>

        <section className="membership-ledger" aria-label="Membership plans">
          {memberships.map((plan, index) => (
            <article key={plan.name} className={index === 2 ? "membership-plan featured-plan" : "membership-plan"}>
              {index === 2 && <span className="plan-marker">A flexible progression plan</span>}
              <p className="plan-index">0{index + 1}</p>
              <h2>{plan.name}</h2>
              <p className="plan-price"><strong>{plan.price}</strong> {plan.period}</p>
              <p>{plan.detail}</p>
              <a href="#membership-form" className="plan-link">Ask about this plan</a>
            </article>
          ))}
        </section>

        <section className="services-section">
          <div>
            <p className="eyebrow">Additional training</p>
            <h2>Build a programme around your own goals.</h2>
          </div>
          <ul className="service-list">
            {additionalServices.map((service) => <li key={service}><Check size={17} /> {service}</li>)}
          </ul>
        </section>

        <section className="membership-form-section" id="membership-form">
          <div className="form-copy">
            <p className="eyebrow">First visit enquiry</p>
            <h2>Start a conversation with the coaching team.</h2>
            <p>Tell us what you would like to train and the days that usually work for you. A coach can recommend an appropriate first session.</p>
            <p className="privacy-note"><ShieldCheck size={18} /> This demonstration form validates input in the browser. A live site would send data only over HTTPS to a secured server-side account service.</p>
          </div>
          <form className="membership-form" onSubmit={handleSubmit} noValidate>
            <label htmlFor="name">Your name</label>
            <input id="name" name="name" required autoComplete="name" placeholder="e.g. Alex Morgan" />
            <label htmlFor="email">Email address</label>
            <input id="email" name="email" required type="email" autoComplete="email" placeholder="alex@example.com" />
            <label htmlFor="interest">I am interested in</label>
            <select id="interest" name="interest" required defaultValue="">
              <option value="" disabled>Select a discipline or membership</option>
              <option>Jiu-jitsu</option>
              <option>Karate</option>
              <option>Judo</option>
              <option>Muay Thai</option>
              <option>Junior membership</option>
              <option>Fitness training</option>
            </select>
            <label htmlFor="message">Anything we should know?</label>
            <textarea id="message" name="message" rows={4} placeholder="For example: I am completely new to martial arts and can usually train after work." />
            <Button type="submit" className="form-submit">Send enquiry</Button>
            {submitted && <p className="success-message" role="status">Thank you. Your enquiry has been prepared for the DoBu team. In the live version, this would be securely delivered to the membership inbox.</p>}
          </form>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
