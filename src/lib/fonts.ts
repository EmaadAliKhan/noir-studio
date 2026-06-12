import { Geist, Geist_Mono, Instrument_Serif, Space_Grotesk } from "next/font/google";

// Body / UI — clean modern grotesque.
export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

// Monospace — code, eyebrow labels, numeric stats.
export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Display — heavier, tighter face for hero / page titles.
export const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// Serif — single editorial accent for italicised words in headlines.
export const serifFont = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  style: ["normal", "italic"],
});
