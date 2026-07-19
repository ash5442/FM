"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { lang, toggle, tr } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const links = [
    { label: tr.nav.services,   href: "#services" },
    { label: tr.nav.process,    href: "#process" },
    { label: tr.nav.comparison, href: "#comparison" },
    { label: tr.nav.reviews,    href: "#reviews" },
    { label: tr.nav.contact,    href: "/contact" },
  ];

  const close = () => setMenuOpen(false);

  return (
    <>
      {/* ── Top bar ───────────────────────────────────────── */}
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        transition: "all 0.3s ease",
        backgroundColor: scrolled ? "rgba(224,220,213,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(26,26,26,0.08)" : "none",
      }}>
        <nav style={{
          maxWidth: 1200, margin: "0 auto", padding: "0 24px",
          height: 72, display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <Logo size="sm" />

          {/* Desktop links */}
          <ul className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 36, listStyle: "none" }}>
            {links.map((l) => (
              <li key={l.label}>
                <Link href={l.href} style={{ color: "#1A1A1A", textDecoration: "none", fontSize: 14, fontWeight: 500, letterSpacing: "0.03em", opacity: 0.75, transition: "opacity 0.2s, color 0.2s" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; (e.currentTarget as HTMLAnchorElement).style.color = "#7A4F2D"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.75"; (e.currentTarget as HTMLAnchorElement).style.color = "#1A1A1A"; }}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop right actions */}
          <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <button onClick={toggle} style={{ background: "transparent", border: "1px solid rgba(26,26,26,0.18)", borderRadius: 8, padding: "8px 14px", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", cursor: "pointer", color: "#1A1A1A", fontFamily: "var(--font-inter)", transition: "all 0.2s", display: "flex", alignItems: "center", gap: 6 }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#7A4F2D"; (e.currentTarget as HTMLButtonElement).style.color = "#7A4F2D"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(26,26,26,0.18)"; (e.currentTarget as HTMLButtonElement).style.color = "#1A1A1A"; }}>
              <span style={{ opacity: lang === "en" ? 1 : 0.45 }}>EN</span>
              <span style={{ opacity: 0.3 }}>/</span>
              <span style={{ opacity: lang === "fr" ? 1 : 0.45 }}>FR</span>
            </button>
            <Link href="/contact">
              <button style={{ background: "#7A4F2D", color: "#EDEAE4", border: "none", borderRadius: 8, padding: "10px 22px", fontSize: 13, fontWeight: 600, letterSpacing: "0.04em", cursor: "pointer", transition: "background 0.2s, transform 0.15s", fontFamily: "var(--font-inter)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#5E3A1E"; (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#7A4F2D"; (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)"; }}>
                {tr.nav.cta}
              </button>
            </Link>
          </div>

          {/* Mobile right: EN/FR + hamburger */}
          <div className="nav-mobile" style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {/* EN/FR pill */}
            <button onClick={toggle} style={{ background: "transparent", border: "1px solid rgba(26,26,26,0.18)", borderRadius: 8, padding: "7px 11px", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", cursor: "pointer", fontFamily: "var(--font-inter)", display: "flex", alignItems: "center", gap: 4 }}>
              <span style={{ color: lang === "en" ? "#7A4F2D" : "rgba(26,26,26,0.35)", fontWeight: lang === "en" ? 800 : 600 }}>EN</span>
              <span style={{ opacity: 0.25, color: "#1A1A1A" }}>/</span>
              <span style={{ color: lang === "fr" ? "#7A4F2D" : "rgba(26,26,26,0.35)", fontWeight: lang === "fr" ? 800 : 600 }}>FR</span>
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              style={{ background: "none", border: "none", cursor: "pointer", padding: 8, display: "flex", flexDirection: "column", gap: 5 }}
            >
              <span style={{ display: "block", width: 24, height: 2, background: "#1A1A1A", borderRadius: 2 }} />
              <span style={{ display: "block", width: 24, height: 2, background: "#1A1A1A", borderRadius: 2 }} />
              <span style={{ display: "block", width: 24, height: 2, background: "#1A1A1A", borderRadius: 2 }} />
            </button>
          </div>
        </nav>
      </header>

      {/* ── Full-screen mobile menu ────────────────────────── */}
      <div
        aria-hidden={!menuOpen}
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          background: "#F5F0E8",
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
          /* slide-down animation */
          transform: menuOpen ? "translateY(0)" : "translateY(-100%)",
          opacity: menuOpen ? 1 : 0,
          transition: "transform 0.35s cubic-bezier(0.22,1,0.36,1), opacity 0.25s ease",
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      >
        {/* Menu top bar: logo + close */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px", height: 72, borderBottom: "1px solid rgba(122,79,45,0.1)", flexShrink: 0 }}>
          <Logo size="sm" />
          <button
            onClick={close}
            aria-label="Close menu"
            style={{ background: "none", border: "none", cursor: "pointer", padding: 8, display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A1410" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav style={{ flex: 1, padding: "8px 24px 0" }}>
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={close}
              style={{
                display: "block",
                width: "100%",
                padding: "24px 0",
                color: "#1A1410",
                textDecoration: "none",
                fontSize: 28,
                fontWeight: 600,
                letterSpacing: "-0.01em",
                borderBottom: "1px solid rgba(122,79,45,0.15)",
                textAlign: "center",
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* EN | FR toggle */}
        <div style={{ display: "flex", justifyContent: "center", gap: 0, padding: "32px 24px 40px" }}>
          <button
            onClick={() => { if (lang !== "en") toggle(); }}
            style={{
              width: 80, minHeight: 48,
              background: lang === "en" ? "rgba(122,79,45,0.1)" : "transparent",
              border: `1px solid ${lang === "en" ? "#7A4F2D" : "rgba(26,20,16,0.2)"}`,
              borderRight: "none",
              borderRadius: "10px 0 0 10px",
              fontSize: 15, fontWeight: 800, letterSpacing: "0.1em",
              cursor: "pointer",
              color: lang === "en" ? "#7A4F2D" : "rgba(26,20,16,0.35)",
              fontFamily: "var(--font-inter)",
              transition: "all 0.2s",
            }}
          >EN</button>
          <button
            onClick={() => { if (lang !== "fr") toggle(); }}
            style={{
              width: 80, minHeight: 48,
              background: lang === "fr" ? "rgba(122,79,45,0.1)" : "transparent",
              border: `1px solid ${lang === "fr" ? "#7A4F2D" : "rgba(26,20,16,0.2)"}`,
              borderRadius: "0 10px 10px 0",
              fontSize: 15, fontWeight: 800, letterSpacing: "0.1em",
              cursor: "pointer",
              color: lang === "fr" ? "#7A4F2D" : "rgba(26,20,16,0.35)",
              fontFamily: "var(--font-inter)",
              transition: "all 0.2s",
            }}
          >FR</button>
        </div>
      </div>

      <style>{`
        .nav-desktop { display: flex !important; }
        .nav-mobile  { display: none  !important; }
        @media (max-width: 767px) {
          .nav-desktop { display: none  !important; }
          .nav-mobile  { display: flex !important; }
        }
      `}</style>
    </>
  );
}
