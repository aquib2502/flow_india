import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Flow India Projects | Precision MEP & HVAC Engineering Solutions",
  description:
    "Flow India Projects delivers comprehensive MEP, HVAC, electrical, plumbing, and fire protection engineering solutions across commercial, industrial, and government sectors in India.",
  keywords: [
    "MEP engineering India",
    "HVAC systems solutions",
    "Electrical infrastructure",
    "Plumbing services India",
    "Fire protection systems",
    "Integrated engineering services",
    "Sustainable infrastructure",
    "Commercial MEP projects",
    "Industrial HVAC solutions",
  ],
  openGraph: {
    title: "Flow India Projects | Integrated MEP & HVAC Engineering Solutions",
    description:
      "Delivering precision-engineered HVAC, electrical, plumbing, and fire protection solutions across commercial, industrial, and government sectors in India.",
    url: "https://flowindiaprojects.com",
    siteName: "Flow India Projects",
    type: "website",
    images: [
      {
        url: "https://flowindiaprojects.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Flow India Projects Engineering Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flow India Projects | MEP & HVAC Engineering",
    description:
      "Precision engineering for HVAC, electrical, plumbing, and fire protection systems across India.",
    images: ["https://flowindiaprojects.com/twitter-card.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        {/* Global Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
