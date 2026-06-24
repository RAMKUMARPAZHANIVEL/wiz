import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
