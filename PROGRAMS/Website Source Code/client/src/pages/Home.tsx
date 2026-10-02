/**
 * Style reminder: The Discipline Ledger home page is an asymmetrical editorial introduction.
 * It balances a low-key hero image, ink typography, paper texture and rare vermilion action cues.
 */
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { programmes } from "@/lib/dobuData";
import { ArrowDownRight, ArrowRight, CalendarDays, MapPin, ShieldCheck } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <section className="home-hero">
          <div className="hero-copy">
            <p className="eyebrow">Martial arts · fitness · self-defence</p>
            <h1>Train with purpose.<br /><span>Progress with a team.</span></h1>
            <p className="hero-description">Practical coaching, structured progress and a welcoming training floor for every level of experience.</p>
            <div className="hero-actions">
              <Link href="/account" className="primary-link">Create member account <ArrowRight size={18} /></Link>
              <Link href="/classes" className="secondary-link">Explore disciplines</Link>
            </div>
            <div className="hero-meta">
              <span><MapPin size={16} /> Leeds, LS8 4DB</span>
              <span><CalendarDays size={16} /> Sessions 7 days a week</span>
            </div>
          </div>
          <div className="hero-image-panel">
            <img src="./assets/dobu-hero-training.jpg" alt="DoBu members practising a coached martial arts drill in the training area" />
            <div className="hero-image-caption"><span>01</span> Focus. Technique. Community.</div>
          </div>
        </section>

        <section className="intro-band">
          <p className="eyebrow">Built for the long run</p>
          <h2>We teach more than moves. We build the routine, confidence and control that keep people coming back.</h2>
          <Link href="/about" className="circle-link" aria-label="Learn more about DoBu"><ArrowDownRight size={26} /></Link>
        </section>

        <section className="programme-preview">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">Four routes onto the mat</p>
              <h2>Find a discipline that fits your goals.</h2>
            </div>
            <Link href="/classes" className="text-link">All disciplines <ArrowRight size={17} /></Link>
          </div>
          <div className="programme-preview-list">
            {programmes.map((programme) => (
              <Link href="/classes" className="programme-preview-item" key={programme.name}>
                <span>{programme.number}</span>
                <h3>{programme.name}</h3>
                <p>{programme.level}</p>
                <ArrowRight size={19} />
              </Link>
            ))}
          </div>
        </section>

        <section className="home-membership-callout">
          <div>
            <p className="eyebrow light">Memberships from £25 per month</p>
            <h2>Choose a plan with room to grow.</h2>
          </div>
          <div>
            <p>Start with the number of sessions you can commit to. When your training grows, your membership can too.</p>
            <Link href="/membership" className="light-outline-link">Compare plans <ArrowRight size={18} /></Link>
          </div>
        </section>

        <section className="promise-grid">
          <article><span>01</span><ShieldCheck size={25} /><h3>Coached safely</h3><p>Clear instruction and thoughtful progressions from first session onwards.</p></article>
          <article><span>02</span><CalendarDays size={25} /><h3>Built around real weeks</h3><p>Early, evening and weekend sessions for work, school and family routines.</p></article>
          <article><span>03</span><MapPin size={25} /><h3>One complete gym</h3><p>Martial arts, fitness training, sauna, steam room and changing facilities in one place.</p></article>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
