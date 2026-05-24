import type { Metadata } from "next";
import "./globals.css";
import { trip } from "@/data/trip";

// ── SEO Metadata — update before sharing publicly ─────────────────────────
export const metadata: Metadata = {
  title: trip.metaTitle,
  description: trip.metaDescription,
  openGraph: {
    title: trip.metaTitle,
    description: trip.metaDescription,
    type: "website",
    // TODO: Add OG image for social sharing: public/images/og-image.jpg (1200x630)
    // images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: trip.metaTitle,
    description: trip.metaDescription,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Fonts — Bagel Fat One (display) + DM Sans (body) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bagel+Fat+One&family=DM+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* TODO: Add a proper favicon. Place at public/favicon.ico or public/favicon.svg */}
      </head>
      <body className="bg-cream-50 text-forest-900 antialiased">{children}</body>
    </html>
  );
}
