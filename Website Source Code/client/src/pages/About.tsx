/**
 * Style reminder: The Discipline Ledger About page combines welcoming community imagery,
 * documented coaching credentials and strong editorial information hierarchy.
 */
import { PageIntro } from "@/components/PageIntro";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { instructors } from "@/lib/dobuData";
import { MapPin, MessageCircleHeart, Phone, Sparkles } from "lucide-react";

export default function About() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <PageIntro number="04" eyebrow="The DoBu community" title="Serious coaching in a gym where people can belong.">
          <p>DoBu is a local martial arts gym for adults, young people and families. We teach through clear progressions and support every member to train with confidence and respect.</p>
        </PageIntro>

        <section className="about-photo-section">
          <div className="about-photo-wrap">
            <img src="./assets/dobu-kids-class.jpg" alt="A martial arts coach guiding children in a beginner class" className="about-photo" />
          </div>
          <div className="community-statement">
            <Sparkles size={28} />
            <h2>Progress looks different for every member. The standard remains the same: coach with care, train with purpose.</h2>
            <p>Alongside martial arts classes, DoBu offers a full fitness room, sauna, steam room, changing facilities and tailored strength and conditioning support.</p>
          </div>
        </section>

        <section className="coach-section">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">Meet the team</p>
              <h2>Experience you can learn from.</h2>
            </div>
            <p>Our coaches combine martial-arts expertise with the practical knowledge needed to help new and experienced students progress safely.</p>
          </div>
          <div className="coach-list">
            {instructors.map((instructor, index) => (
              <article className="coach-entry" key={instructor.name}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{instructor.name}</h3>
                  <p className="coach-role">{instructor.role}</p>
                </div>
                <p>{instructor.expertise}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-panel">
          <div>
            <p className="eyebrow light">Find DoBu</p>
            <h2>Ready to visit the gym?</h2>
          </div>
          <div className="contact-details">
            <p><MapPin size={18} /> 42 Foundry Lane, Leeds, LS8 4DB</p>
            <p><Phone size={18} /> 0113 555 0140</p>
            <p><MessageCircleHeart size={18} /> train@dobu.example</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
