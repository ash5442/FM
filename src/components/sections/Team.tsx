"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Team() {
  const { tr } = useLanguage();
  const t = tr.team;

  return (
    <section style={{ padding: "100px 24px", background: "#EDEAE4" }}>
      <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 20 }}>
          <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", color: "#7A4F2D", textTransform: "uppercase", background: "rgba(122,79,45,0.1)", border: "1px solid rgba(122,79,45,0.2)", borderRadius: 100, padding: "5px 14px" }}>
            {t.badge}
          </span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }}
          style={{ fontSize: "clamp(28px, 4.5vw, 50px)", fontWeight: 800, letterSpacing: "-0.02em", color: "#1A1A1A", marginBottom: 52, lineHeight: 1.1 }}>
          {t.heading}{" "}
          <span style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic", fontWeight: 400, color: "#7A4F2D" }}>{t.headingItalic}</span>
        </motion.h2>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="team-card"
          style={{ background: "#E5E1DA", border: "1px solid rgba(26,26,26,0.08)", borderRadius: 20, padding: "44px 36px", display: "flex", flexDirection: "column", alignItems: "center", gap: 20, width: "100%", maxWidth: 340, margin: "0 auto" }}>
          <div style={{ width: 88, height: 88, borderRadius: "50%", background: "rgba(26,26,26,0.08)", border: "2px solid rgba(122,79,45,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30, fontWeight: 800, color: "#7A4F2D", fontFamily: "var(--font-instrument-serif)", fontStyle: "italic" }}>
            FM
          </div>

          <div>
            <div style={{ fontSize: 20, fontWeight: 700, color: "#1A1A1A", marginBottom: 4, letterSpacing: "-0.01em" }}>Farouk Mchiche</div>
            <div style={{ fontSize: 13, color: "#7A4F2D", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>{t.role}</div>
          </div>

          <div style={{ display: "flex", gap: 10 }}>
            {[
              {
                label: "X",
                href: "https://x.com/FaroukMchiche",
                svg: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.845L1.254 2.25H8.08l4.253 5.622 5.912-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>,
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/farouk-mchiche-3a455a2b8",
                svg: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>,
              },
            ].map(({ label, href, svg }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{ width: 36, height: 36, borderRadius: "50%", border: "1px solid rgba(122,79,45,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#7A4F2D", transition: "all 0.2s" }}
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
