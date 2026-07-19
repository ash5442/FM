"use client";

import { SiHubspot, SiMailchimp, SiMixpanel, SiFramer } from "react-icons/si";
import { FaGoogle, FaMeta, FaLinkedin } from "react-icons/fa6";
import { useLanguage } from "@/context/LanguageContext";

const tools = [
  { name: "Google Ads",   Icon: FaGoogle,    color: "#EA4335" },
  { name: "Meta Ads",     Icon: FaMeta,      color: "#0082FB" },
  { name: "LinkedIn Ads", Icon: FaLinkedin,  color: "#0A66C2" },
  { name: "HubSpot",      Icon: SiHubspot,   color: "#FF7A59" },
  { name: "Mailchimp",    Icon: SiMailchimp, color: "#FFE01B" },
  { name: "Mixpanel",     Icon: SiMixpanel,  color: "#7856FF" },
  { name: "Framer",       Icon: SiFramer,    color: "#0055FF" },
];

// Triplicate so the seamless loop never shows a gap
const items = [...tools, ...tools, ...tools];

export default function LogoStrip() {
  const { tr } = useLanguage();

  return (
    <div style={{ background: "#E5E1DA", borderTop: "1px solid rgba(26,26,26,0.08)", borderBottom: "1px solid rgba(26,26,26,0.08)", padding: "14px 0 18px" }}>

      {/* Label row — centred above the ticker */}
      <p style={{
        textAlign: "center",
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: "0.14em",
        color: "#9B9B9B",
        textTransform: "uppercase",
        fontFamily: "var(--font-inter)",
        margin: "0 0 12px",
      }}>
        {tr.logoStrip.label}
      </p>

      {/* Ticker row */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        {/* Left fade */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 60, background: "linear-gradient(90deg, #E5E1DA 0%, transparent 100%)", zIndex: 2, pointerEvents: "none" }} />
        {/* Right fade */}
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 60, background: "linear-gradient(270deg, #E5E1DA 0%, transparent 100%)", zIndex: 2, pointerEvents: "none" }} />

        <div style={{ display: "flex", width: "max-content", animation: "ticker 32s linear infinite" }}>
          {items.map(({ name, Icon, color }, i) => (
            <div
              key={i}
              style={{
                display: "inline-flex", alignItems: "center", gap: 9,
                margin: "0 8px", padding: "7px 16px", borderRadius: 100,
                background: "rgba(26,26,26,0.05)", border: "1px solid rgba(26,26,26,0.09)",
                whiteSpace: "nowrap", flexShrink: 0,
              }}
            >
              <Icon style={{ color, fontSize: 15, flexShrink: 0 }} />
              <span style={{ color: "#1A1A1A", fontSize: 12, fontWeight: 600, letterSpacing: "0.01em", fontFamily: "var(--font-inter)", opacity: 0.7 }}>
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}
