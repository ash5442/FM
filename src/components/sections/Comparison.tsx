"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

function Row({ text, check }: { text: string; check: boolean }) {
  return (
    <li style={{ display: "flex", alignItems: "center", gap: 12, padding: "13px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <span style={{ width: 22, height: 22, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: check ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.05)", fontSize: 12, fontWeight: 700, color: check ? "#fff" : "rgba(255,255,255,0.3)" }}>
        {check ? "✓" : "✗"}
      </span>
      <span style={{ fontSize: 14, fontWeight: 500, color: check ? "#fff" : "rgba(255,255,255,0.38)" }}>
        {text}
      </span>
    </li>
  );
}

export default function Comparison() {
  const { tr } = useLanguage();
  const c = tr.comparison;

  return (
    <section id="comparison" style={{ padding: "100px 24px", background: "#E5E1DA" }}>
      <div style={{ maxWidth: 980, margin: "0 auto" }}>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: 20 }}>
          <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", color: "#7A4F2D", textTransform: "uppercase", background: "rgba(122,79,45,0.1)", border: "1px solid rgba(122,79,45,0.2)", borderRadius: 100, padding: "5px 14px" }}>
            {c.badge}
          </span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }}
          style={{ textAlign: "center", fontSize: "clamp(28px, 4.5vw, 50px)", fontWeight: 800, letterSpacing: "-0.02em", color: "#1A1A1A", marginBottom: 16, lineHeight: 1.1 }}>
          {c.heading}{" "}
          <span style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic", fontWeight: 400, color: "#7A4F2D" }}>{c.headingItalic}</span>
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          style={{ textAlign: "center", color: "#1A1A1A", opacity: 0.6, fontSize: 16, maxWidth: 440, margin: "0 auto 60px", lineHeight: 1.65 }}>
          {c.sub}
        </motion.p>

        <div className="comparison-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>

          {/* LEFT — Others */}
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div style={{ background: "#1A1A2E", borderRadius: "14px 14px 0 0", padding: "18px 24px", border: "1px solid #3B82F6", borderBottom: "none", display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(59,130,246,0.15)", border: "1px solid rgba(59,130,246,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2" />
                  <polyline points="2 17 12 22 22 17" />
                  <polyline points="2 12 12 17 22 12" />
                </svg>
              </div>
              <span style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic", fontSize: 20, color: "#fff" }}>{c.othersLabel}</span>
            </div>
            <div style={{ background: "#16161A", border: "1px solid #3B82F6", borderTop: "none", borderRadius: "0 0 14px 14px", padding: "4px 24px 16px" }}>
              <ul style={{ listStyle: "none" }}>{c.others.map((item: string, i: number) => <Row key={i} text={item} check={false} />)}</ul>
            </div>
          </motion.div>

          {/* RIGHT — Us (floats to top on mobile via .comparison-us CSS class) */}
          <motion.div className="comparison-us" initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div style={{ background: "#1A1A1A", borderRadius: "14px 14px 0 0", padding: "18px 24px", border: "1px solid rgba(122,79,45,0.35)", borderBottom: "none", display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(122,79,45,0.2)", border: "1px solid rgba(122,79,45,0.4)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-instrument-serif)", fontStyle: "italic", fontSize: 14, fontWeight: 800, color: "#C87941" }}>
                FM
              </div>
              <span style={{ fontSize: 15, fontWeight: 700, color: "#fff", letterSpacing: "0.04em", textTransform: "uppercase" }}>{c.oursLabel}</span>
            </div>
            <div style={{ background: "#1A1A1A", border: "1px solid rgba(122,79,45,0.35)", borderTop: "none", borderRadius: "0 0 14px 14px", padding: "4px 24px 16px" }}>
              <ul style={{ listStyle: "none" }}>{c.ours.map((item: string, i: number) => <Row key={i} text={item} check={true} />)}</ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
