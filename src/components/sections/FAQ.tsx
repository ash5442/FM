"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid rgba(26,26,26,0.08)", overflow: "hidden" }}>
      <button
        onClick={() => setOpen(!open)}
        className="faq-accordion-btn"
        style={{ width: "100%", padding: "20px 0", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, textAlign: "left", fontFamily: "var(--font-inter)" }}
      >
        <span style={{ fontSize: 15, fontWeight: 600, color: "#1A1A1A", lineHeight: 1.4, flex: 1 }}>{q}</span>
        <div style={{ width: 28, height: 28, borderRadius: "50%", border: "1px solid rgba(122,79,45,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "transform 0.2s, background 0.2s", transform: open ? "rotate(45deg)" : "rotate(0)", background: open ? "#7A4F2D" : "transparent", color: open ? "#EDEAE4" : "#7A4F2D" }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div key="content" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28, ease: "easeInOut" }} style={{ overflow: "hidden" }}>
            <p style={{ paddingBottom: 20, fontSize: 14, color: "#1A1A1A", opacity: 0.65, lineHeight: 1.75 }}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const { tr } = useLanguage();
  const f = tr.faq;

  return (
    <section style={{ padding: "100px 24px", background: "#E5E1DA" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: 20 }}>
          <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", color: "#7A4F2D", textTransform: "uppercase", background: "rgba(122,79,45,0.1)", border: "1px solid rgba(122,79,45,0.2)", borderRadius: 100, padding: "5px 14px" }}>
            {f.badge}
          </span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }}
          style={{ textAlign: "center", fontSize: "clamp(28px, 4.5vw, 50px)", fontWeight: 800, letterSpacing: "-0.02em", color: "#1A1A1A", marginBottom: 16, lineHeight: 1.1 }}>
          {f.heading}{" "}
          <span style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic", fontWeight: 400, color: "#7A4F2D" }}>{f.headingItalic}</span>
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          style={{ textAlign: "center", color: "#1A1A1A", opacity: 0.6, fontSize: 16, maxWidth: 440, margin: "0 auto 64px", lineHeight: 1.65 }}>
          {f.sub}
        </motion.p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32, alignItems: "start" }}>
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            style={{ background: "#EDE7D9", border: "1.5px solid rgba(122,79,45,0.2)", borderRadius: 20, padding: "40px 32px" }}>
            <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 16, letterSpacing: "-0.01em", color: "#1A1410" }}>{f.cardTitle}</h3>
            <p style={{ fontSize: 15, color: "#1A1410", opacity: 0.65, lineHeight: 1.65, marginBottom: 32 }}>{f.cardSub}</p>
            <Link href="/contact">
              <button
                style={{ background: "#7A4F2D", color: "#EDEAE4", border: "none", borderRadius: 8, padding: "12px 24px", fontSize: 14, fontWeight: 700, cursor: "pointer", transition: "all 0.2s", fontFamily: "var(--font-inter)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = "0.88"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = "1"; }}
              >
                {f.cardBtn}
              </button>
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            style={{ background: "#EDEAE4", border: "1px solid rgba(26,26,26,0.08)", borderRadius: 20, padding: "8px 28px" }}>
            {(f.items as { q: string; a: string }[]).map((item, i) => (
              <AccordionItem key={i} q={item.q} a={item.a} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
