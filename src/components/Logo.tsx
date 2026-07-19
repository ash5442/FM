"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const lineVariant = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

const letterVariant = {
  hidden: { opacity: 0, y: 10 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] },
  }),
};

interface LogoProps {
  size?: "sm" | "md" | "lg";
  animate?: boolean;
  href?: string;
}

export default function Logo({ size = "md", animate = false, href = "/" }: LogoProps) {
  const fontSize = size === "lg" ? 34 : size === "sm" ? 17 : 22;
  const monogramSize = size === "lg" ? 42 : size === "sm" ? 26 : 32;
  const gap = size === "lg" ? 14 : size === "sm" ? 8 : 10;

  const name = "Farouk Mchiche";

  const inner = (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap,
        textDecoration: "none",
        cursor: href ? "pointer" : "default",
      }}
    >
      {/* Monogram badge */}
      <motion.div
        initial={animate ? { opacity: 0, scale: 0.6, rotate: -8 } : false}
        animate={animate ? { opacity: 1, scale: 1, rotate: 0 } : undefined}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          width: monogramSize,
          height: monogramSize,
          borderRadius: Math.round(monogramSize * 0.28),
          background: "rgba(122,79,45,0.12)",
          border: "1.5px solid rgba(122,79,45,0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-instrument-serif)",
            fontStyle: "italic",
            fontSize: Math.round(monogramSize * 0.48),
            color: "#7A4F2D",
            lineHeight: 1,
            letterSpacing: "-0.02em",
          }}
        >
          FM
        </span>
      </motion.div>

      {/* Name text */}
      <div style={{ display: "flex", flexDirection: "column", gap: 0, lineHeight: 1 }}>
        {/* Animate each letter individually when animate=true */}
        {animate ? (
          <motion.div
            initial="hidden"
            animate="show"
            style={{ display: "flex", overflow: "hidden" }}
          >
            {name.split("").map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariant}
                style={{
                  fontFamily: "var(--font-instrument-serif)",
                  fontStyle: "italic",
                  fontSize,
                  color: "#1A1A1A",
                  letterSpacing: "0.01em",
                  display: "inline-block",
                  whiteSpace: char === " " ? "pre" : undefined,
                }}
              >
                {char === " " ? " " : char}
              </motion.span>
            ))}
          </motion.div>
        ) : (
          <span
            style={{
              fontFamily: "var(--font-instrument-serif)",
              fontStyle: "italic",
              fontSize,
              color: "#1A1A1A",
              letterSpacing: "0.01em",
              whiteSpace: "nowrap",
            }}
          >
            {name}
          </span>
        )}

        {/* Animated underline */}
        <motion.div
          variants={animate ? lineVariant : undefined}
          initial={animate ? "hidden" : undefined}
          animate={animate ? "show" : undefined}
          style={{
            height: 1.5,
            background: "linear-gradient(90deg, #7A4F2D 0%, transparent 100%)",
            borderRadius: 1,
            transformOrigin: "left center",
            marginTop: 3,
          }}
        />
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} style={{ textDecoration: "none" }}>
        {inner}
      </Link>
    );
  }
  return inner;
}
