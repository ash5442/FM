"use client";

import Link from "next/link";
import Logo from "./Logo";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { tr } = useLanguage();
  const f = tr.footer;

  return (
    <footer style={{ backgroundColor: "#E0DCD5", borderTop: "1px solid rgba(26,26,26,0.08)", padding: "48px 24px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: 28, textAlign: "center" }}>
        <Logo size="sm" />

        <nav style={{ display: "flex", flexWrap: "wrap", gap: "8px 28px", justifyContent: "center" }}>
          {f.links.map((l) => (
            <Link key={l.label} href={l.href} style={{ color: "#1A1A1A", textDecoration: "none", fontSize: 13, opacity: 0.65, fontWeight: 500 }}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div style={{ display: "flex", gap: 12 }}>
          {[
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/farouk-mchiche-3a455a2b8",
              svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>,
            },
            {
              label: "X",
              href: "https://x.com/FaroukMchiche",
              svg: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.845L1.254 2.25H8.08l4.253 5.622 5.912-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>,
            },
          ].map(({ label, href, svg }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              style={{ width: 38, height: 38, borderRadius: "50%", border: "1px solid rgba(26,26,26,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "#7A4F2D", textDecoration: "none", transition: "all 0.2s" }}
              onMouseEnter={(e) => { const a = e.currentTarget as HTMLAnchorElement; a.style.background = "#7A4F2D"; a.style.color = "#EDEAE4"; a.style.borderColor = "#7A4F2D"; }}
              onMouseLeave={(e) => { const a = e.currentTarget as HTMLAnchorElement; a.style.background = "transparent"; a.style.color = "#7A4F2D"; a.style.borderColor = "rgba(26,26,26,0.12)"; }}
            >
              {svg}
            </a>
          ))}
        </div>

        <p style={{ fontSize: 12, opacity: 0.45, color: "#1A1A1A" }}>{f.copy}</p>
      </div>
    </footer>
  );
}
