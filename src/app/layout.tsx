import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

// Static weights (not the variable font) so outlined text has no overlapping inner contours.
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});
const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mohd Ahmad — Full-Stack Developer",
  description:
    "Portfolio of Mohd Ahmad, a Full-Stack Developer specialising in React, Next.js, TypeScript and Node.js. Open to full-time roles and freelance projects.",
  keywords: ["Mohd Ahmad", "Frontend Developer", "Full Stack Developer", "React", "Next.js", "Portfolio", "Delhi"],
  authors: [{ name: "Mohd Ahmad" }],
  openGraph: {
    title: "Mohd Ahmad — Full-Stack Developer",
    description: "React · Next.js · TypeScript · Node.js. Open to full-time roles and freelance projects.",
    type: "website",
    images: ["/profile.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0b10",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${geist.variable} ${geistMono.variable} ${instrument.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
