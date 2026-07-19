"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function FinalCTA() {
  const { tr } = useLanguage();
  const c = tr.finalCta;

  return (
    <section style={{ padding: "100px 24px", background: "#EDEAE4", textAlign: "center" }}>
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ fontSize: 12, letterSpacing: "0.12em", color: "#7A4F2D", textTransform: "uppercase", fontWeight: 600, marginBottom: 24, opacity: 0.7 }}>
          {c.tag}
        </motion.p>

        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }}
          style={{ fontSize: "clamp(30px, 5vw, 58px)", fontWeight: 800, letterSpacing: "-0.02em", color: "#1A1A1A", lineHeight: 1.08, marginBottom: 20 }}>
          {c.heading}{" "}
          <span style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic", fontWeight: 400, color: "#7A4F2D" }}>{c.headingItalic}</span>
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          style={{ fontSize: 16, color: "#1A1A1A", opacity: 0.6, lineHeight: 1.65, marginBottom: 40 }}>
          {c.sub}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
          <Link href="/contact">
            <button
              style={{ background: "#7A4F2D", color: "#EDEAE4", border: "none", borderRadius: 10, padding: "16px 40px", fontSize: 15, fontWeight: 700, letterSpacing: "0.04em", cursor: "pointer", transition: "all 0.2s", fontFamily: "var(--font-inter)", boxShadow: "0 8px 32px rgba(122,79,45,0.22)" }}
              onMouseEnter={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.background = "#5E3A1E"; b.style.transform = "translateY(-2px)"; b.style.boxShadow = "0 12px 40px rgba(122,79,45,0.3)"; }}
              onMouseLeave={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.background = "#7A4F2D"; b.style.transform = "translateY(0)"; b.style.boxShadow = "0 8px 32px rgba(122,79,45,0.22)"; }}
            >
              {c.cta}
            </button>
          </Link>

          <div style={{ display: "flex", gap: 14 }}>
            {[
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/farouk-mchiche-3a455a2b8",
                svg: <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>,
              },
              {
                label: "X",
                href: "https://x.com/FaroukMchiche",
                svg: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.845L1.254 2.25H8.08l4.253 5.622 5.912-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>,
              },
            ].map(({ label, href, svg }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{ width: 42, height: 42, borderRadius: "50%", border: "1px solid rgba(122,79,45,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#7A4F2D", transition: "all 0.2s", background: "transparent" }}
                onMouseEnter={(e) => { const a = e.currentTarget as HTMLAnchorElement; a.style.background = "#7A4F2D"; a.style.color = "#EDEAE4"; }}
                onMouseLeave={(e) => { const a = e.currentTarget as HTMLAnchorElement; a.style.background = "transparent"; a.style.color = "#7A4F2D"; }}
              >
                {svg}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
