"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const LOGO_MAP: Record<string, { src: string; alt: string; fit: "contain" | "cover"; bg?: string; border?: string }> = {
  "Soukaina R": { src: "/images/hellopilates-logo.png", alt: "Hello Pilates",           fit: "contain" },
  "Ikram N":    { src: "/images/evara-logo.png",        alt: "Evara Movement & Wellness",fit: "contain" },
  "Johana P":   { src: "/images/johana-logo.png",       alt: "Johana Yoga Studio",      fit: "cover"   },
};

function LogoAvatar({ name }: { name: string }) {
  const logo = LOGO_MAP[name];

  if (name === "Dr Hassan B") {
    return (
      <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#fff", border: "1px solid rgba(0,0,0,0.1)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: 4, overflow: "hidden" }}>
        <Image src="/images/hassan-logo.png" alt="Hassan Medical Centre" width={48} height={48}
          style={{ objectFit: "contain", width: "100%", height: "100%" }} />
      </div>
    );
  }

  if (name === "Nouhaila M") {
    return (
      <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#1B4F72", flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 3, border: "1.5px solid rgba(62,207,207,0.3)", padding: 6 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
          <span style={{ color: "#3ECFCF", fontSize: 7, lineHeight: 1 }}>✦</span>
          <span style={{ color: "#3ECFCF", fontSize: 7, fontWeight: 800, letterSpacing: "0.01em", lineHeight: 1, fontFamily: "var(--font-inter)", whiteSpace: "nowrap" }}>
            Nutrishape
          </span>
        </div>
        <span style={{ color: "#3ECFCF", fontSize: 5, fontWeight: 500, letterSpacing: "0.03em", lineHeight: 1, opacity: 0.85, fontFamily: "var(--font-inter)", textAlign: "center", whiteSpace: "nowrap" }}>
          By Nouhaila MDARHRI
        </span>
      </div>
    );
  }

  if (logo) {
    return (
      <Image
        src={logo.src}
        alt={logo.alt}
        width={56}
        height={56}
        style={{
          borderRadius: "50%",
          objectFit: logo.fit,
          flexShrink: 0,
          border: "1px solid rgba(122,79,45,0.15)",
        }}
      />
    );
  }

  const initials = name.split(" ").map((n) => n[0]).join("").slice(0, 2);
  return (
    <div style={{
      width: 40, height: 40, borderRadius: "50%",
      background: "rgba(26,26,26,0.08)",
      border: "1px solid rgba(122,79,45,0.2)",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: 13, fontWeight: 700, color: "#7A4F2D", flexShrink: 0,
    }}>
      {initials}
    </div>
  );
}

function Stars() {
  return (
    <div style={{ display: "flex", gap: 3, marginBottom: 16 }}>
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#7A4F2D">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const { tr } = useLanguage();
  const r = tr.reviews;

  return (
    <section id="reviews" style={{ padding: "100px 24px", background: "#EDEAE4" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: 20 }}>
          <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", color: "#7A4F2D", textTransform: "uppercase", background: "rgba(122,79,45,0.1)", border: "1px solid rgba(122,79,45,0.2)", borderRadius: 100, padding: "5px 14px" }}>
            {r.badge}
          </span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }}
          style={{ textAlign: "center", fontSize: "clamp(28px, 4.5vw, 50px)", fontWeight: 800, letterSpacing: "-0.02em", color: "#1A1A1A", marginBottom: 16, lineHeight: 1.1 }}>
          {r.heading}{" "}
          <span style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic", fontWeight: 400, color: "#7A4F2D" }}>
            {r.headingItalic}
          </span>
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          style={{ textAlign: "center", color: "#1A1A1A", opacity: 0.6, fontSize: 16, maxWidth: 460, margin: "0 auto 60px", lineHeight: 1.65 }}>
          {r.sub}
        </motion.p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {(r.items as { name: string; role: string; quote: string }[]).map((review, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{ background: "#E5E1DA", border: "1px solid rgba(26,26,26,0.08)", borderRadius: 16, padding: "28px 28px 24px" }}>
              <Stars />
              <p style={{ fontSize: 15, color: "#1A1A1A", lineHeight: 1.7, marginBottom: 24, opacity: 0.8, fontStyle: "italic" }}>
                &ldquo;{review.quote}&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <LogoAvatar name={review.name} />
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#1A1A1A" }}>{review.name}</div>
                  <div style={{ fontSize: 12, color: "#1A1A1A", opacity: 0.5, marginTop: 2 }}>{review.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
