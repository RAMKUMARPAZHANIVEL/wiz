import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WIZ",
  description: "WIZ — Building something great",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
