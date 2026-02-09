export type PortfolioProject = {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
};

export const projects: PortfolioProject[] = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description:
      "A modern ecommerce platform with a seamless checkout experience and integrated inventory management.",
    image:
      "https://placehold.co/600x400/F5C02C/212529?text=E-Commerce+Platform",
    tags: ["React", "Next.js", "Stripe"],
  },
  {
    title: "Brand Identity Redesign",
    category: "Branding",
    description:
      "A complete brand overhaul including logo design, color palette, and comprehensive brand guidelines.",
    image: "https://placehold.co/600x400/2A82D7/FFFFFF?text=Brand+Identity",
    tags: ["Branding", "Design", "Guidelines"],
  },
  {
    title: "Restaurant Website",
    category: "Web Design",
    description:
      "An elegant restaurant website featuring online reservations and dynamic menu management.",
    image: "https://placehold.co/600x400/4CAF50/FFFFFF?text=Restaurant+Site",
    tags: ["UI/UX", "Design", "Development"],
  },
  {
    title: "SaaS Dashboard",
    category: "Web Development",
    description:
      "A powerful analytics dashboard with real-time data visualization and reporting tools.",
    image: "https://placehold.co/600x400/3BAEED/FFFFFF?text=SaaS+Dashboard",
    tags: ["React", "TypeScript", "Analytics"],
  },
  {
    title: "Fashion Brand Website",
    category: "Web Design",
    description:
      "A sleek, modern website for a fashion brand featuring a lookbook and online shopping experience.",
    image: "https://placehold.co/600x400/E04055/FFFFFF?text=Fashion+Brand",
    tags: ["Design", "E-commerce", "Fashion"],
  },
  {
    title: "Mobile App Design",
    category: "UI/UX Design",
    description:
      "A user-friendly mobile app design for a fitness tracking platform with social features.",
    image: "https://placehold.co/600x400/FFA726/FFFFFF?text=Mobile+App",
    tags: ["UI/UX", "Mobile", "Figma"],
  },
];
