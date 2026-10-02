/**
 * Style reminder: The Discipline Ledger footer reinforces the training-journal feel
 * with a low-key ink field, practical contact detail and minimal decorative noise.
 */
import { Link } from "wouter";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <img src="./assets/dobu-belt-knot-logo.png" alt="" className="footer-mark" />
          <p className="eyebrow light">A local club for disciplined progress</p>
          <h2>Train with purpose.<br />Progress with a team.</h2>
        </div>
        <div>
          <p className="footer-label">Visit</p>
          <p>DoBu Martial Arts<br />42 Foundry Lane<br />Leeds, LS8 4DB</p>
          <p>Mon–Fri 06:00–21:00<br />Sat–Sun 08:00–17:00</p>
        </div>
        <div>
          <p className="footer-label">Explore</p>
          <Link href="/classes">Disciplines</Link>
          <Link href="/timetable">Weekly timetable</Link>
          <Link href="/membership">Memberships</Link>
          <Link href="/account">Member area</Link>
          <Link href="/about">Meet the team</Link>
        </div>
        <div>
          <p className="footer-label">Contact</p>
          <a href="tel:01135550140">0113 555 0140</a>
          <a href="mailto:train@dobu.example">train@dobu.example</a>
          <p className="social-line">Instagram · Facebook<br />@dobumartialarts</p>
        </div>
      </div>
      <div className="footer-base">
        <span>© 2026 DoBu Martial Arts</span>
        <span>Website demonstrator for Unit 13</span>
      </div>
    </footer>
  );
}
