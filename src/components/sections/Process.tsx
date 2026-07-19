"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── Mini helpers ─────────────────────────────────────────── */

function MiniBar({ pct, color }: { pct: number; color: string }) {
  return (
    <div style={{ flex: 1, height: 4, borderRadius: 2, background: "rgba(255,255,255,0.08)" }}>
      <div style={{ width: `${pct}%`, height: "100%", borderRadius: 2, background: color }} />
    </div>
  );
}

/* ── Dashboard mockup: Step 1 ─────────────────────────────── */

function MockupStep1() {
  return (
    <div style={{ background: "#111113", borderRadius: 16, padding: 24, border: "1px solid rgba(255,255,255,0.07)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
        <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>Analytics Overview</span>
        <span style={{ color: "rgba(255,255,255,0.25)", fontSize: 11 }}>Last 30 days</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 18 }}>
        {[
          { label: "Customers", val: "-32%", color: "#EF4444" },
          { label: "Cost Management", val: "-54%", color: "#EF4444" },
        ].map((m) => (
          <div key={m.label} style={{ background: "rgba(255,255,255,0.04)", borderRadius: 10, padding: "14px 14px 10px", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.07em" }}>{m.label}</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: m.color }}>{m.val}</div>
          </div>
        ))}
      </div>
      <div style={{ background: "rgba(122,79,45,0.15)", border: "1px solid rgba(122,79,45,0.25)", borderRadius: 10, padding: "12px 14px", marginBottom: 18, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>Sales</span>
        <span style={{ fontSize: 20, fontWeight: 700, color: "#C87941" }}>$103,430</span>
      </div>
      <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: 10, padding: 14, border: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", marginBottom: 14, textTransform: "uppercase", letterSpacing: "0.08em" }}>Weakest Systems</div>
        {[
          { label: "Marketing & Ads", pct: 32, score: "32%" },
          { label: "AI Automation",   pct: 14, score: "14%" },
          { label: "Money & Finance", pct: 44, score: "44%" },
        ].map((s) => (
          <div key={s.label} style={{ marginBottom: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
              <span style={{ fontSize: 11, color: "rgba(255,255,255,0.55)" }}>{s.label}</span>
              <span style={{ fontSize: 11, color: "#EF4444", fontWeight: 600 }}>{s.score} Score</span>
            </div>
            <MiniBar pct={s.pct} color="#EF4444" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Dashboard mockup: Step 2 ─────────────────────────────── */

function MockupStep2() {
  return (
    <div style={{ background: "#111113", borderRadius: 16, padding: 24, border: "1px solid rgba(255,255,255,0.07)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
        <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>Ad Performance</span>
        <span style={{ color: "#10B981", fontSize: 11, fontWeight: 600 }}>&#9679; Live</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 14 }}>
        {[
          { label: "Clicks",      val: "12,350",  sub: "CTR 3.8%",  color: "#3B82F6" },
          { label: "Impressions", val: "325,000", sub: "CPM $4.20", color: "#8B5CF6" },
          { label: "Cost",        val: "$5,180",  sub: "CPC $0.42", color: "#EF4444" },
          { label: "Conversions", val: "1,275",   sub: "CPA $4.06", color: "#10B981" },
        ].map((m) => (
          <div key={m.label} style={{ background: "rgba(255,255,255,0.04)", borderRadius: 10, padding: "12px 14px", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.07em" }}>{m.label}</div>
            <div style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 2 }}>{m.val}</div>
            <div style={{ fontSize: 10, color: m.color }}>{m.sub}</div>
          </div>
        ))}
      </div>
      {[
        { label: "Leads Generated", val: "890", bar: 78, color: "#3B82F6" },
        { label: "Qualified Leads", val: "450", bar: 40, color: "#10B981" },
      ].map((row) => (
        <div key={row.label} style={{ background: "rgba(255,255,255,0.03)", borderRadius: 10, padding: "12px 14px", marginBottom: 8, border: "1px solid rgba(255,255,255,0.05)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>{row.label}</span>
            <span style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>{row.val}</span>
          </div>
          <MiniBar pct={row.bar} color={row.color} />
        </div>
      ))}
    </div>
  );
}

/* ── Dashboard mockup: Step 3 ─────────────────────────────── */

function MockupStep3() {
  const pts = [10, 28, 18, 40, 32, 55, 45, 70, 60, 88, 80, 95];
  const W = 240, H = 70;
  const xs = pts.map((_, i) => (i / (pts.length - 1)) * W);
  const ys = pts.map((v) => H - (v / 100) * H);
  const line = xs.map((x, i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${ys[i].toFixed(1)}`).join(" ");
  const area = `${line} L${W},${H} L0,${H} Z`;

  return (
    <div style={{ background: "#111113", borderRadius: 16, padding: 24, border: "1px solid rgba(255,255,255,0.07)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
        <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>Growth &amp; Efficiency</span>
        <span style={{ color: "#10B981", fontSize: 11, fontWeight: 600 }}>+AI Driven</span>
      </div>
      <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: 10, padding: "12px 14px", marginBottom: 16, border: "1px solid rgba(255,255,255,0.05)" }}>
        <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ display: "block" }}>
          <defs>
            <linearGradient id="areaGrad3" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={area} fill="url(#areaGrad3)" />
          <path d={line} fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
          <span style={{ fontSize: 10, color: "rgba(255,255,255,0.3)" }}>Users: 3.6K</span>
          <span style={{ fontSize: 10, color: "rgba(255,255,255,0.3)" }}>Campaigns: 2m</span>
        </div>
      </div>
      {[
        { label: "Marketing & Ads", pct: 84, score: "84%", color: "#10B981" },
        { label: "AI Automation",   pct: 94, score: "94%", color: "#3B82F6" },
        { label: "Money & Finance", pct: 88, score: "88%", color: "#8B5CF6" },
      ].map((s) => (
        <div key={s.label} style={{ marginBottom: 12 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.55)" }}>{s.label}</span>
            <span style={{ fontSize: 11, color: s.color, fontWeight: 700 }}>{s.score} Score</span>
          </div>
          <MiniBar pct={s.pct} color={s.color} />
        </div>
      ))}
    </div>
  );
}

/* ── Section ──────────────────────────────────────────────── */

const steps = [
  { label: "Step 1", title: "Plan Your Success",   desc: "We figure out who your best customers are and what they want to hear in order to buy.",               Mockup: MockupStep1 },
  { label: "Step 2", title: "Daily Handling",       desc: "We create ads, schedule them, and manage all your campaigns so you don't have to.",                   Mockup: MockupStep2 },
  { label: "Step 3", title: "Track What Works",     desc: "We analyze the results and then we do more of the good stuff and less of the bad stuff.",              Mockup: MockupStep3 },
];

export default function Process() {
  const [active, setActive] = useState(0);
  const step = steps[active];

  return (
    <section id="process" style={{ padding: "100px 24px", background: "#F5F0E8" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: 20 }}>
          <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", color: "#7A4F2D", textTransform: "uppercase", background: "rgba(122,79,45,0.1)", border: "1px solid rgba(122,79,45,0.2)", borderRadius: 100, padding: "5px 14px" }}>
            Process
          </span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }}
          style={{ textAlign: "center", fontSize: "clamp(28px, 4.5vw, 50px)", fontWeight: 800, letterSpacing: "-0.02em", color: "#1A1A1A", marginBottom: 16, lineHeight: 1.1 }}>
          Our Simple{" "}
          <span style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic", fontWeight: 400, color: "#7A4F2D" }}>&amp; Smart</span>{" "}Process
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          style={{ textAlign: "center", color: "#1A1A1A", opacity: 0.6, fontSize: 16, maxWidth: 460, margin: "0 auto 52px", lineHeight: 1.65 }}>
          Everything you need to collaborate, create, and scale, all in one place.
        </motion.p>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 44, flexWrap: "wrap" }}>
          {steps.map((s, i) => (
            <button key={i} onClick={() => setActive(i)}
              className="process-tab"
              style={{
                padding: "10px 24px", borderRadius: 100,
                border: active === i ? "1px solid #7A4F2D" : "1px solid rgba(26,26,26,0.08)",
                background: active === i ? "#7A4F2D" : "transparent",
                color: active === i ? "#E5E1DA" : "#1A1A1A",
                fontSize: 13, fontWeight: 600, cursor: "pointer", transition: "all 0.2s",
                fontFamily: "var(--font-inter)", opacity: active === i ? 1 : 0.6,
              }}>
              {s.label}
            </button>
          ))}
        </div>

        {/* Two-col: mockup left, text right */}
        <AnimatePresence mode="wait">
          <motion.div key={active}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 40, alignItems: "center" }}>
            <step.Mockup />
            <div style={{ padding: "8px 0" }}>
              <div style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                width: 48, height: 48, borderRadius: "50%",
                background: "rgba(122,79,45,0.1)", border: "1px solid rgba(122,79,45,0.2)",
                fontSize: 18, fontWeight: 800, color: "#7A4F2D", marginBottom: 20,
                fontFamily: "var(--font-instrument-serif)", fontStyle: "italic",
              }}>
                {active + 1}
              </div>
              <h3 style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 800, color: "#1A1A1A", marginBottom: 16, letterSpacing: "-0.01em", lineHeight: 1.15 }}>
                {step.title}
              </h3>
              <p style={{ fontSize: 17, color: "#1A1A1A", opacity: 0.6, lineHeight: 1.72 }}>
                {step.desc}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
