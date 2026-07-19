"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Logo from "../Logo";
import { useLanguage } from "@/context/LanguageContext";

const TYPE_SPEED = 55;
const DELETE_SPEED = 30;
const PAUSE_MS = 2000;

function useTypewriter(phrases: string[]) {
  const [displayed, setDisplayed] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Reset when the phrase list changes (e.g. language switch)
  useEffect(() => {
    setDisplayed("");
    setPhraseIdx(0);
    setIsDeleting(false);
    setIsPaused(false);
  }, [phrases]);

  useEffect(() => {
    if (!phrases || phrases.length === 0) return;
    const target = phrases[phraseIdx] ?? "";

    if (isPaused) {
      const id = setTimeout(() => { setIsPaused(false); setIsDeleting(true); }, PAUSE_MS);
      return () => clearTimeout(id);
    }

    if (!isDeleting) {
      if (displayed.length < target.length) {
        const id = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), TYPE_SPEED);
        return () => clearTimeout(id);
      } else {
        setIsPaused(true);
      }
    } else {
      if (displayed.length > 0) {
        const id = setTimeout(() => setDisplayed(displayed.slice(0, -1)), DELETE_SPEED);
        return () => clearTimeout(id);
      } else {
        setIsDeleting(false);
        setPhraseIdx((i) => (i + 1) % phrases.length);
      }
    }
  }, [displayed, phraseIdx, isDeleting, isPaused, phrases]);

  return displayed;
}

const bgAnim = `
  @keyframes floatOrb1 {
    0%,100% { transform: translate(0,0) scale(1); }
    33%      { transform: translate(40px,-30px) scale(1.08); }
    66%      { transform: translate(-20px,20px) scale(0.95); }
  }
  @keyframes floatOrb2 {
    0%,100% { transform: translate(0,0) scale(1); }
    50%     { transform: translate(-50px,40px) scale(1.1); }
  }
  @keyframes floatOrb3 {
    0%,100% { transform: translate(0,0); }
    40%     { transform: translate(30px,-50px); }
    80%     { transform: translate(-10px,20px); }
  }
  @keyframes gridFade {
    0%,100% { opacity: 0.03; }
    50%     { opacity: 0.065; }
  }
  @keyframes blink {
    0%,100% { opacity: 1; }
    50%     { opacity: 0; }
  }
`;

export default function Hero() {
  const { tr } = useLanguage();
  const typed = useTypewriter(tr.hero.typingPhrases as string[]);

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(100px, 18vw, 120px) clamp(20px, 5vw, 24px) clamp(60px, 10vw, 80px)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        background: "#EDEAE4",
      }}
    >
      <style>{bgAnim}</style>
      <style>{`
        @media (max-width: 767px) {
          .hero-logo  { display: none !important; }
          .hero-line  { font-size: 36px !important; }
          .hero-static-line { font-size: 32px !important; }
        }
      `}</style>

      {/* Animated background */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: "radial-gradient(circle, rgba(26,20,16,0.25) 1px, transparent 1px)", backgroundSize: "32px 32px", animation: "gridFade 8s ease-in-out infinite" }} />
      <div style={{ position: "absolute", top: "-10%", right: "-8%", width: 560, height: 560, borderRadius: "50%", background: "radial-gradient(circle, rgba(122,79,45,0.13) 0%, transparent 65%)", animation: "floatOrb1 12s ease-in-out infinite", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-15%", left: "-10%", width: 640, height: 640, borderRadius: "50%", background: "radial-gradient(circle, rgba(26,20,16,0.07) 0%, transparent 65%)", animation: "floatOrb2 16s ease-in-out infinite", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "35%", left: "12%", width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle, rgba(122,79,45,0.08) 0%, transparent 70%)", animation: "floatOrb3 10s ease-in-out infinite", pointerEvents: "none" }} />
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
        style={{ position: "absolute", top: "50%", left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent 0%, rgba(122,79,45,0.12) 30%, rgba(122,79,45,0.12) 70%, transparent 100%)", transformOrigin: "center", pointerEvents: "none" }}
      />

      {/* Content */}
      <div style={{ maxWidth: 900, margin: "0 auto", position: "relative" }}>

        {/* Logo — hidden on mobile (navbar already shows it) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
          className="hero-logo"
          style={{ display: "flex", justifyContent: "center", marginBottom: 52 }}
        >
          <Logo size="lg" animate={true} href="/" />
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
          style={{ marginBottom: 30 }}
        >
          {/* Line 1 — typing text */}
          <div
            className="hero-line"
            style={{
              fontSize: "clamp(48px, 7vw, 82px)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "#7A4F2D",
              textTransform: "uppercase",
              minHeight: "1.1em",
            }}
          >
            {typed}
            <span style={{ animation: "blink 1s step-start infinite", color: "#7A4F2D" }}>|</span>
          </div>

          {/* Line 2 — static */}
          <div
            className="hero-line hero-static-line"
            style={{
              fontSize: "clamp(48px, 7vw, 82px)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "#1A1410",
              textTransform: "uppercase",
            }}
          >
            {tr.hero.staticLine}
          </div>
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
          animate={{ opacity: 0.65, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.85, ease: "easeOut" }}
          style={{ fontSize: "clamp(16px, 2vw, 19px)", color: "#1A1A1A", lineHeight: 1.72, maxWidth: 540, margin: "0 auto 48px" }}
        >
          {tr.hero.sub}
        </motion.p>

        {/* CTA + socials */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.05, ease: [0.22, 1, 0.36, 1] as const }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}
        >
          <Link href="/contact" className="hero-cta-link">
            <button
              style={{ background: "#7A4F2D", color: "#EDEAE4", border: "none", borderRadius: 10, padding: "16px 38px", fontSize: 15, fontWeight: 700, letterSpacing: "0.04em", cursor: "pointer", transition: "all 0.2s", fontFamily: "var(--font-inter)", boxShadow: "0 8px 32px rgba(122,79,45,0.22)" }}
              onMouseEnter={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.background = "#5E3A1E"; b.style.transform = "translateY(-2px)"; b.style.boxShadow = "0 14px 40px rgba(122,79,45,0.32)"; }}
              onMouseLeave={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.background = "#7A4F2D"; b.style.transform = "translateY(0)"; b.style.boxShadow = "0 8px 32px rgba(122,79,45,0.22)"; }}
            >
              {tr.hero.cta}
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
