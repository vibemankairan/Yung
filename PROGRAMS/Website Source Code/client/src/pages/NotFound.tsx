/**
 * Style reminder: Even error states retain the Discipline Ledger's calm,
 * practical voice, strong hierarchy and accessible ink-on-paper contrast.
 */
import { Link } from "wouter";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <p className="eyebrow">404 · Page not found</p>
      <h1>This route is not on the training plan.</h1>
      <p>The page may have moved. Return to the DoBu home page and choose your next session from there.</p>
      <Link href="/" className="primary-link">Return home</Link>
    </main>
  );
}
