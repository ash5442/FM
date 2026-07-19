"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const links = [
    { label: tr.nav.services, href: "#services" },
    { label: tr.nav.process, href: "#process" },
    { label: tr.nav.comparison, href: "#comparison" },
    { label: tr.nav.reviews, href: "#reviews" },
    { label: tr.nav.contact, href: "/contact" },
  ];

  const close = () => setMenuOpen(false);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.3s ease",
        backgroundColor: scrolled || menuOpen ? "rgba(224,220,213,0.97)" : "transparent",
        backdropFilter: scrolled || menuOpen ? "blur(12px)" : "none",
        borderBottom: scrolled && !menuOpen ? "1px solid rgba(26,26,26,0.08)" : "none",
      }}
    >
      <nav
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Logo size="sm" />

        {/* Desktop nav links */}
        <ul style={{ display: "flex", alignItems: "center", gap: 36, listStyle: "none" }} className="hidden-mobile">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                style={{ color: "#1A1A1A", textDecoration: "none", fontSize: 14, fontWeight: 500, letterSpacing: "0.03em", opacity: 0.75, transition: "opacity 0.2s, color 0.2s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; (e.currentTarget as HTMLAnchorElement).style.color = "#7A4F2D"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.75"; (e.currentTarget as HTMLAnchorElement).style.color = "#1A1A1A"; }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop right actions */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }} className="hidden-mobile">
          <button
            onClick={toggle}
            style={{
              background: "transparent",
              border: "1px solid rgba(26,26,26,0.18)",
              borderRadius: 8,
              padding: "8px 14px",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.08em",
              cursor: "pointer",
              color: "#1A1A1A",
              fontFamily: "var(--font-inter)",
              transition: "all 0.2s",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#7A4F2D"; (e.currentTarget as HTMLButtonElement).style.color = "#7A4F2D"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(26,26,26,0.18)"; (e.currentTarget as HTMLButtonElement).style.color = "#1A1A1A"; }}
          >
            <span style={{ opacity: lang === "en" ? 1 : 0.45 }}>EN</span>
            <span style={{ opacity: 0.3 }}>/</span>
            <span style={{ opacity: lang === "fr" ? 1 : 0.45 }}>FR</span>
          </button>

          <Link href="/contact">
            <button
              style={{ background: "#7A4F2D", color: "#EDEAE4", border: "none", borderRadius: 8, padding: "10px 22px", fontSize: 13, fontWeight: 600, letterSpacing: "0.04em", cursor: "pointer", transition: "background 0.2s, transform 0.15s", fontFamily: "var(--font-inter)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#5E3A1E"; (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#7A4F2D"; (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)"; }}
            >
              {tr.nav.cta}
            </button>
          </Link>
        </div>

        {/* Hamburger button */}
        <button
          className="show-mobile"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          style={{
            background: "none", border: "none", cursor: "pointer",
            padding: 8, display: "flex", flexDirection: "column", gap: 5,
            zIndex: 60, position: "relative",
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block", width: 24, height: 2,
                background: "#1A1A1A", borderRadius: 2,
                transition: "all 0.25s ease",
                transform:
                  menuOpen && i === 0 ? "rotate(45deg) translate(5px, 5px)" :
                  menuOpen && i === 2 ? "rotate(-45deg) translate(5px, -5px)" :
                  "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
                transformOrigin: "center",
              }}
            />
          ))}
        </button>
      </nav>

      {/* Fullscreen mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            style={{
              position: "fixed",
              top: 72,
              left: 0,
              right: 0,
              bottom: 0,
              background: "#EDEAE4",
              zIndex: 49,
              display: "flex",
              flexDirection: "column",
              padding: "0 24px 40px",
              overflowY: "auto",
            }}
          >
            {/* Nav links */}
            <nav>
              {/* Top divider */}
              <div style={{ borderTop: "1px solid rgba(26,26,26,0.08)" }} />
              {links.map((l, i) => (
                <motion.div
                  key={l.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.04 }}
                >
                  <Link
                    href={l.href}
                    onClick={close}
                    style={{
                      display: "block",
                      width: "100%",
                      padding: "16px 0",
                      color: "#1A1A1A",
                      textDecoration: "none",
                      fontSize: 20,
                      fontWeight: 600,
                      letterSpacing: "-0.01em",
                      borderBottom: "1px solid rgba(26,26,26,0.08)",
                    }}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Language toggle + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28 }}
              style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 24 }}
            >
              <button
                onClick={toggle}
                style={{
                  width: "100%",
                  background: "transparent",
                  border: "1px solid rgba(26,26,26,0.18)",
                  borderRadius: 10,
                  padding: "14px",
                  fontSize: 14,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  cursor: "pointer",
                  color: "#1A1A1A",
                  fontFamily: "var(--font-inter)",
                  minHeight: 52,
                }}
              >
                <span style={{ opacity: lang === "en" ? 1 : 0.45 }}>EN</span>
                {" / "}
                <span style={{ opacity: lang === "fr" ? 1 : 0.45 }}>FR</span>
              </button>

              <Link href="/contact" onClick={close} style={{ display: "block" }}>
                <button
                  style={{
                    width: "100%",
                    background: "#7A4F2D",
                    color: "#EDEAE4",
                    border: "none",
                    borderRadius: 10,
                    padding: "16px 22px",
                    fontSize: 15,
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    cursor: "pointer",
                    fontFamily: "var(--font-inter)",
                    minHeight: 52,
                  }}
                >
                  {tr.nav.cta}
                </button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) { .hidden-mobile { display: flex !important; } .show-mobile { display: none !important; } }
        @media (max-width: 767px)  { .hidden-mobile { display: none !important; } .show-mobile { display: flex !important; } }
      `}</style>
    </header>
  );
}
