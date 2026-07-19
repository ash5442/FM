"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

function IconMegaphone() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7A4F2D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11l19-9-9 19-2-8-8-2z" />
    </svg>
  );
}

function IconGlobe() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7A4F2D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function IconBolt() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7A4F2D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

const icons = [IconMegaphone, IconGlobe, IconBolt];

export default function Services() {
  const { tr } = useLanguage();
  const s = tr.services;

  return (
    <section id="services" style={{ padding: "100px 24px", background: "#EDEAE4" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: 20 }}>
          <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", color: "#7A4F2D", textTransform: "uppercase", background: "rgba(122,79,45,0.1)", border: "1px solid rgba(122,79,45,0.2)", borderRadius: 100, padding: "5px 14px" }}>
            {s.badge}
          </span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }}
          style={{ textAlign: "center", fontSize: "clamp(28px, 4.5vw, 52px)", fontWeight: 800, letterSpacing: "-0.02em", color: "#1A1A1A", marginBottom: 16, lineHeight: 1.1 }}>
          {s.heading}{" "}
          <span style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic", fontWeight: 400, color: "#7A4F2D" }}>{s.headingItalic}</span>
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          style={{ textAlign: "center", color: "#1A1A1A", opacity: 0.6, fontSize: 16, maxWidth: 480, margin: "0 auto 64px", lineHeight: 1.65 }}>
          {s.sub}
        </motion.p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          {s.cards.map(({ title, desc }, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ background: "#E5E1DA", border: "1px solid rgba(26,26,26,0.08)", borderRadius: 16, padding: "36px 32px", transition: "transform 0.2s, box-shadow 0.2s", cursor: "default" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 16px 48px rgba(26,26,26,0.08)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}
              >
                <div style={{ width: 52, height: 52, borderRadius: 12, background: "rgba(122,79,45,0.1)", border: "1px solid rgba(122,79,45,0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                  <Icon />
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#1A1A1A", marginBottom: 12, lineHeight: 1.35, letterSpacing: "-0.01em" }}>{title}</h3>
                <p style={{ fontSize: 15, color: "#1A1A1A", opacity: 0.6, lineHeight: 1.65 }}>{desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
