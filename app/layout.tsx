import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Phoenix Dental Care — Dr. Divya | Chitlapakkam, Chennai",
  description:
    "Dr. Divya's Phoenix Dental Care in Chitlapakkam, Chennai. Expert painless dentistry — cosmetic, restorative, orthodontics, laser & more. Book via WhatsApp: +91 90032 26380.",
  keywords:
    "dental clinic chennai, dentist chitlapakkam, dr divya dentist, phoenix dental care, painless dentistry chennai",
  openGraph: {
    title: "Phoenix Dental Care — Dr. Divya",
    description:
      "Rejuvenating Smiles in Chitlapakkam, Chennai. Painless, affordable, expert dental care.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
