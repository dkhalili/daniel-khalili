import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SmoothScroll from "../components/SmoothScroll";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://danielkhalili.com"),
  title: {
    default: "Daniel Khalili — Engineering Manager | Ad Tech | Agentic AI",
    template: "%s | Daniel Khalili",
  },
  description:
    "Product-minded engineering manager with a strong technical foundation. Building high-performance teams and shipping impactful products at the intersection of engineering, product, and leadership.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Daniel Khalili",
    title: "Daniel Khalili — Engineering Manager",
    description:
      "Building high-performance teams at the intersection of engineering, product, and leadership.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Khalili — Engineering Manager",
    description:
      "Building high-performance teams at the intersection of engineering, product, and leadership.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-bg text-text font-sans noise-overlay">
        <SmoothScroll />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Script
          src="https://liongrowthmedia.com/badge.js"
          strategy="afterInteractive"
          data-client="daniel-khalili"
        />
      </body>
    </html>
  );
}
