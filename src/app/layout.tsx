import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "@/styles/globals.scss";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "LoudLemon Studio | Modern Web & Brand Design",
  description:
    "Professional web design and brand development services. We create modern, responsive websites and compelling brand identities for businesses.",
  keywords: [
    "web design",
    "brand development",
    "web development",
    "responsive design",
    "digital agency",
  ],
  authors: [{ name: "LoudLemon Studio" }],
  openGraph: {
    title: "LoudLemon Studio | Modern Web & Brand Design",
    description:
      "Professional web design and brand development services. We create modern, responsive websites and compelling brand identities for businesses.",
    url: "https://loudlemonstudio.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="main-content">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
