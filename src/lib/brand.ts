// Single source of truth for brand identity. Edit here to rebrand everywhere.

export const BRAND = {
  // Short product/agency name shown in the logo, header, footer, page titles.
  name: "AASIM",
  // Wordmark style — appears next to the logo mark in the header.
  wordmark: "aasim",
  // Short tagline shown under the hero and in the SEO description.
  tagline: "Turning Digital Ideas into Powerful Realities.",
  // Long description for SEO + footer.
  description:
    "A hybrid technology and marketing agency from Hyderabad. We design, engineer, deploy, monitor, and market modern software products — end to end, AI-accelerated, human-supervised.",
  // City and country used in the footer + contact page.
  city: "Hyderabad, India",
  // Primary contact channels — change to real numbers before launch.
  email: "hello@aasim.studio",
  phone: "+91 99999 99999",
  // Social handles — leave the @ off; we'll prepend it in the UI.
  socials: {
    instagram: "aasim.studio",
    linkedin: "aasim-studio",
    x: "aasimstudio",
    github: "aasim-studio",
  },
  // Hyderabad office address (placeholder — replace).
  address: "HITEC City, Hyderabad, Telangana 500081",
} as const;

export type Brand = typeof BRAND;
