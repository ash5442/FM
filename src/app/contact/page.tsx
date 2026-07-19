"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/sections/FAQ";
import { useLanguage } from "@/context/LanguageContext";

/* ── Icons ──────────────────────────────────────────────────── */

function IconMail() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7A4F2D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function IconPerson() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7A4F2D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c0-3.5 3.1-6 7-6s7 2.5 7 6" />
      <path d="M17.5 10c.9-.3 2 .1 2.5 1s.3 2-.5 2.7" />
      <path d="M19.5 7.5c1.8-.5 3.7.6 4.2 2.4" />
    </svg>
  );
}

function IconHeadphones() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7A4F2D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
  );
}

const CARD_ICONS = [IconMail, IconPerson];

/* ── Page ───────────────────────────────────────────────────── */

export default function Contact() {
  const { tr, lang } = useLanguage();
  const ct = tr.contact;
  const [form, setForm] = useState({ name: "", email: "", website: "", phone: "", problem: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, language: lang }),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError(
        lang === "fr"
          ? "Une erreur s'est produite. Veuillez réessayer."
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const field: React.CSSProperties = {
    width: "100%", padding: "12px 16px",
    background: "#F5F0E8",
    border: "1px solid rgba(122,79,45,0.2)",
    borderRadius: 10, fontSize: 14,
    color: "#1A1410",
    fontFamily: "var(--font-inter)", outline: "none",
    transition: "border-color 0.2s",
  };

  const label: React.CSSProperties = {
    display: "block", fontSize: 13, fontWeight: 600,
    color: "#1A1410", marginBottom: 7, letterSpacing: "0.01em",
  };

  const fi = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    (e.currentTarget.style.borderColor = "#7A4F2D");
  const fo = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    (e.currentTarget.style.borderColor = "rgba(122,79,45,0.2)");

  /* heading — split headingLine1 so "Scaling" (or localised italic word)
     renders in italic bronze and the rest is dark */
  const h1 = ct.headingLine1 as string;
  const italic = ct.headingLine1Italic as string;
  const before = h1.replace(italic, "").trim();

  return (
    <>
      <Navbar />
      <main style={{ background: "#EDEAE4", minHeight: "100vh", paddingBottom: 0 }}>

        {/* ── Header ─────────────────────────────────────── */}
        <div style={{ paddingTop: 120, textAlign: "center", padding: "120px 24px 56px" }}>

          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>
            <span style={{
              display: "inline-block", fontSize: 11, fontWeight: 700,
              letterSpacing: "0.14em", color: "#7A4F2D", textTransform: "uppercase",
              background: "rgba(122,79,45,0.1)", border: "1px solid rgba(122,79,45,0.2)",
              borderRadius: 100, padding: "5px 14px", marginBottom: 28,
            }}>
              Contact
            </span>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06 }}>
            <h1 style={{
              fontSize: "clamp(34px, 5.5vw, 64px)", fontWeight: 800,
              letterSpacing: "-0.025em", color: "#1A1410", lineHeight: 1.06, margin: 0,
            }}>
              {before}{" "}
              <span style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic", fontWeight: 400, color: "#7A4F2D" }}>
                {italic}
              </span>
            </h1>
            <p style={{
              fontSize: "clamp(22px, 3.5vw, 38px)", fontWeight: 700,
              color: "#7A4F2D", letterSpacing: "-0.015em", lineHeight: 1.2,
              marginTop: 6,
            }}>
              {ct.headingLine2}
            </p>
          </motion.div>
        </div>

        {/* ── Two-column grid ────────────────────────────── */}
        <div style={{ maxWidth: 1060, margin: "0 auto", padding: "0 24px 80px" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24, alignItems: "start",
          }}>

            {/* LEFT — info cards */}
            <motion.div initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
              style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {(ct.cards as { title: string; body: string }[]).map((card, i) => {
                const Icon = CARD_ICONS[i];
                return (
                  <div key={i} style={{
                    background: "#E5E1DA",
                    border: "1px solid rgba(122,79,45,0.15)",
                    borderRadius: 20,
                    padding: "28px 24px",
                    display: "flex", flexDirection: "column", gap: 16,
                  }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: 12,
                      background: "#D4CFC7",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      <Icon />
                    </div>
                    <div>
                      <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1A1410", marginBottom: 8, letterSpacing: "-0.01em" }}>
                        {card.title}
                      </h3>
                      <p style={{ fontSize: 14, color: "rgba(26,20,16,0.65)", lineHeight: 1.7, margin: 0 }}>
                        {card.body}
                      </p>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* RIGHT — form card */}
            <motion.div initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.14 }}
              style={{
                background: "#E5E1DA",
                border: "1px solid rgba(122,79,45,0.15)",
                borderRadius: 20,
                padding: "36px 32px",
              }}>
              {submitted ? (
                <div style={{ textAlign: "center", padding: "48px 0" }}>
                  <div style={{ fontSize: 52, marginBottom: 20 }}>✅</div>
                  <h3 style={{ fontSize: 22, fontWeight: 800, color: "#1A1410", marginBottom: 10 }}>{ct.success.title}</h3>
                  <p style={{ fontSize: 15, color: "rgba(26,20,16,0.6)" }}>{ct.success.msg}</p>
                </div>
              ) : (
                <>
                  {/* Form header */}
                  <div style={{ textAlign: "center", marginBottom: 28 }}>
                    <div style={{
                      width: 48, height: 48, borderRadius: 14,
                      background: "#D4CFC7",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      margin: "0 auto 16px",
                    }}>
                      <IconHeadphones />
                    </div>
                    <h2 style={{ fontSize: 17, fontWeight: 700, color: "#1A1410", margin: 0, letterSpacing: "-0.01em" }}>
                      {ct.formTitle}
                    </h2>
                  </div>

                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    <div>
                      <label style={label}>{ct.labels.name}</label>
                      <input type="text" name="name" required value={form.name} onChange={handleChange}
                        placeholder={ct.labels.namePlaceholder} style={field} onFocus={fi} onBlur={fo} />
                    </div>
                    <div>
                      <label style={label}>{ct.labels.email}</label>
                      <input type="email" name="email" required value={form.email} onChange={handleChange}
                        placeholder={ct.labels.emailPlaceholder} style={field} onFocus={fi} onBlur={fo} />
                    </div>
                    <div>
                      <label style={label}>{ct.labels.website}</label>
                      <input type="text" name="website" value={form.website} onChange={handleChange}
                        placeholder={ct.labels.websitePlaceholder} style={field} onFocus={fi} onBlur={fo} />
                    </div>
                    <div>
                      <label style={label}>{ct.labels.phone}</label>
                      <input type="tel" name="phone" required value={form.phone} onChange={handleChange}
                        placeholder={ct.labels.phonePlaceholder} style={field} onFocus={fi} onBlur={fo} />
                    </div>
                    <div>
                      <label style={label}>{ct.labels.problem}</label>
                      <textarea name="problem" required rows={4} value={form.problem} onChange={handleChange}
                        placeholder={ct.labels.problemPlaceholder}
                        style={{ ...field, resize: "vertical", minHeight: 108 }}
                        onFocus={fi} onBlur={fo} />
                    </div>
                    {error && (
                      <p style={{ fontSize: 13, color: "#b91c1c", textAlign: "center", margin: 0 }}>
                        {error}
                      </p>
                    )}
                    <button
                      type="submit"
                      disabled={loading}
                      style={{
                        marginTop: 4,
                        background: loading ? "#A07850" : "#7A4F2D", color: "#EDEAE4",
                        border: "none", borderRadius: 10,
                        padding: "14px 28px", fontSize: 15,
                        fontWeight: 700, letterSpacing: "0.04em",
                        cursor: loading ? "not-allowed" : "pointer", transition: "all 0.2s",
                        fontFamily: "var(--font-inter)",
                        boxShadow: "0 6px 24px rgba(122,79,45,0.2)",
                      }}
                      onMouseEnter={(e) => { if (loading) return; const b = e.currentTarget; b.style.background = "#5E3A1E"; b.style.transform = "translateY(-1px)"; }}
                      onMouseLeave={(e) => { if (loading) return; const b = e.currentTarget; b.style.background = "#7A4F2D"; b.style.transform = "translateY(0)"; }}
                    >
                      {loading ? ct.labels.sending : ct.labels.btn}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>

        {/* ── FAQ ────────────────────────────────────────── */}
        <FAQ />

      </main>
      <Footer />
    </>
  );
}
