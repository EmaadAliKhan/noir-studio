// Single source of truth for brand identity. Edit here to rebrand everywhere.

export const BRAND = {
  name: "Kernel Stack",
  wordmark: "Kernel Stack",
  tagline: "Turning Digital Ideas into Powerful Realities.",
  description:
    "A hybrid technology and marketing agency from Hyderabad. We design, engineer, deploy, monitor, and market modern software products — end to end, AI-accelerated, human-supervised.",
  contactPerson: "Mohammad Sohail",
  city: "Hyderabad, India",
  email: "aasimalikhan54321@gmail.com",
  phone: "+91 9966698840",
  socials: {
    instagram: "kernel.stack",
    linkedin: "kernel-stack",
    x: "kernelstack",
    github: "kernel-stack",
  },
  address: "Om colony, near om nagar park, Mehdipatnam, Hyderabad, India",
} as const;

export type Brand = typeof BRAND;
