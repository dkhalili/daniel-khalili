import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Orbitron } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SmoothScroll from "../components/SmoothScroll";
import Preloader from "../components/Preloader";
import CustomCursor from "../components/CustomCursor";
import ScrollProgress from "../components/ScrollProgress";

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

const orbitron = Orbitron({
  variable: "--font-orbitron",
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
    "Hands-on Engineering Manager with 10+ years in software, leading 10+ engineers across three pods. Shared advertising platforms, legacy modernization, and governed AI workflows.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Daniel Khalili",
    title: "Daniel Khalili — Engineering Manager",
    description:
      "Hands-on engineering leadership, shared advertising platforms, and developing engineers into technical leaders.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Khalili — Engineering Manager",
    description:
      "Hands-on engineering leadership, shared advertising platforms, and developing engineers into technical leaders.",
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
      className={`${inter.variable} ${jetbrains.variable} ${orbitron.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-bg text-text font-sans noise-overlay">
        <Preloader />
        <CustomCursor />
        <ScrollProgress />
        <SmoothScroll />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
