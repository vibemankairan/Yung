/**
 * Style reminder: This Discipline Ledger page uses editorial programme entries,
 * paper-and-ink contrast and vermilion progression markers.
 */
import { PageIntro } from "@/components/PageIntro";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { programmes } from "@/lib/dobuData";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "wouter";

export default function Classes() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <PageIntro number="01" eyebrow="The training floor" title="Choose the discipline that meets you where you are.">
          <p>Every programme is coached in stages, so you can build useful technique, fitness and confidence at a pace that makes sense for you.</p>
        </PageIntro>

        <section className="programme-ledger" aria-label="Martial arts programmes">
          {programmes.map((programme, index) => (
            <article key={programme.name} className="programme-row">
              <div className="programme-index">{programme.number}</div>
              <div className="programme-title">
                <h2>{programme.name}</h2>
                <span>{programme.level}</span>
              </div>
              <p>{programme.description}</p>
              <Link href="/timetable" aria-label={`See ${programme.name} timetable`} className="round-arrow">
                <ArrowRight size={20} />
              </Link>
              {index === 0 && <span className="programme-tag">Most popular starting point</span>}
            </article>
          ))}
        </section>

        <section className="split-feature paper-section">
          <div className="split-image-wrap">
            <img src="./assets/dobu-karate-practice.jpg" alt="Two karate students practising a controlled partnered drill" className="feature-image" />
          </div>
          <div className="feature-copy">
            <p className="eyebrow">Start with the fundamentals</p>
            <h2>Good training is clear, coached and repeatable.</h2>
            <p>First-time members are never expected to know everything. Your coach explains the purpose of each drill, offers practical adjustments and helps you work safely with partners at your level.</p>
            <ul className="tick-list">
              <li><Check size={17} /> Beginner-friendly progressions in every discipline</li>
              <li><Check size={17} /> Clean matted training area and full changing facilities</li>
              <li><Check size={17} /> Fitness, self-defence and private tuition available</li>
            </ul>
            <Link href="/membership" className="text-link">Compare memberships <ArrowRight size={17} /></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
