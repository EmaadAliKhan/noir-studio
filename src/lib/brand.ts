// Single source of truth for brand identity. Edit here to rebrand everywhere.

export const BRAND = {
  name: "KernelStack Labs",
  wordmark: "KernelStack Labs",
  tagline: "Turning Digital Ideas into Powerful Realities.",
  description:
    "A hybrid technology and marketing agency from Hyderabad. We design, engineer, deploy, monitor, and market modern software products — end to end, AI-accelerated, human-supervised.",
  contactPerson: "Mohammad Sohail",
  city: "Hyderabad, India",
  email: "aasimalikhan54321@gmail.com",
  phone: "+91 9966698840",
  socials: {
    instagram: "kernelstacklabs",
    linkedin: "kernelstack-labs",
    x: "kernelstacklabs",
    github: "kernelstack-labs",
  },
  address: "Om colony, near om nagar park, Mehdipatnam, Hyderabad, India",
} as const;

export type Brand = typeof BRAND;
