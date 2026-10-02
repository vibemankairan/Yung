/**
 * Style reminder: The Discipline Ledger timetable prioritises practical scanning,
 * accessible filter controls and content-first schedule cards over a dense data table.
 */
import { PageIntro } from "@/components/PageIntro";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Button } from "@/components/ui/button";
import { schedule } from "@/lib/dobuData";
import { CalendarDays, ChevronRight, Clock, UserRound } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "wouter";

const days = ["All days", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const categories = ["All", "Martial arts", "Youth", "Training", "Private"];

export default function Timetable() {
  const [day, setDay] = useState("All days");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(
    () => schedule.filter((item) => (day === "All days" || item.day === day) && (category === "All" || item.category === category)),
    [day, category],
  );

  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <PageIntro number="02" eyebrow="Weekly programme" title="Your week, built around steady progress.">
          <p>Use the timetable filters to find classes that work with your routine. Private tuition and open-mat practice can be arranged directly with the team.</p>
        </PageIntro>

        <section className="timetable-section" aria-labelledby="schedule-heading">
          <div className="filter-panel">
            <div>
              <p className="eyebrow">Find your session</p>
              <h2 id="schedule-heading">Weekly timetable</h2>
            </div>
            <div className="filter-groups">
              <fieldset>
                <legend>Day</legend>
                <div className="filter-row">
                  {days.map((value) => (
                    <Button key={value} type="button" variant="ghost" onClick={() => setDay(value)} className={day === value ? "filter-button selected" : "filter-button"}>
                      {value.replace("All days", "All")}
                    </Button>
                  ))}
                </div>
              </fieldset>
              <fieldset>
                <legend>Class type</legend>
                <div className="filter-row">
                  {categories.map((value) => (
                    <Button key={value} type="button" variant="ghost" onClick={() => setCategory(value)} className={category === value ? "filter-button selected" : "filter-button"}>
                      {value}
                    </Button>
                  ))}
                </div>
              </fieldset>
            </div>
          </div>

          <p className="results-note" aria-live="polite">{filtered.length} scheduled {filtered.length === 1 ? "session" : "sessions"} shown</p>
          <div className="schedule-list">
            {filtered.map((item) => (
              <article className="schedule-card" key={`${item.day}-${item.time}-${item.className}`}>
                <div className="schedule-day"><CalendarDays size={17} /> {item.day}</div>
                <div className="schedule-time"><Clock size={17} /> {item.time}</div>
                <h3>{item.className}</h3>
                <p><UserRound size={16} /> Coach: {item.instructor}</p>
                <span className={`category-pill ${item.category.toLowerCase().replace(" ", "-")}`}>{item.category}</span>
              </article>
            ))}
          </div>
          {filtered.length === 0 && <p className="empty-state">No sessions match those filters. Try another day or class type.</p>}
        </section>

        <section className="callout-strip">
          <div>
            <p className="eyebrow light">Not sure where to start?</p>
            <h2>Tell us your goal and we will point you to a first session.</h2>
          </div>
          <Link href="/membership" className="light-outline-link">Plan your first visit <ChevronRight size={18} /></Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
