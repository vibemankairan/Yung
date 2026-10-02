/**
 * Style reminder: The Discipline Ledger header is compact, practical and ink-led,
 * with a clearly visible vermilion action marker and no generic glassmorphism.
 */
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/classes", label: "Disciplines" },
  { href: "/timetable", label: "Timetable" },
  { href: "/membership", label: "Membership" },
  { href: "/account", label: "Member area" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand-lockup" onClick={() => setMenuOpen(false)}>
          <img
            src="./assets/dobu-belt-knot-logo.png"
            alt="DoBu Martial Arts belt-knot symbol"
            className="brand-mark"
          />
          <span>
            <strong>DoBu</strong>
            <em>Martial Arts</em>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={location === item.href ? "nav-link active" : "nav-link"}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/account" className="header-cta">
          Join DoBu
        </Link>

        <Button
          variant="ghost"
          size="icon"
          className="mobile-menu-button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </Button>
      </div>

      {menuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link href="/account" onClick={() => setMenuOpen(false)} className="mobile-join-link">
            Join DoBu
          </Link>
        </nav>
      )}
    </header>
  );
}
