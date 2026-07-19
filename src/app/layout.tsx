import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import ClarityScript from "@/components/ClarityScript";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Farouk Mchiche",
  description:
    "We help fitness studio owners acquire high-value members through ROI-driven social media ad campaigns.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable}`}
    >
      <body>
        <ClarityScript />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
