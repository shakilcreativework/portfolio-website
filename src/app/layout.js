import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NextThemeProvider from "@/providers/NextThemeProvider";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import TechCursor from "@/components/effects/TechCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// metadata
export const metadata = {
  title: "Md Shakil Ahmed | Frontend Developer",
  description: "Welcome to my frontend development portfolio showcasing creative web experiences.",
  openGraph: {
    title: "Md Shakil Ahmed | Frontend Developer",
    description: "Welcome to my frontend development portfolio showcasing creative web experiences.",
    url: "https://shakilcreativework-portfolio.vercel.app",
    type: "website",
    images: [
      {
        url: "https://shakilcreativework-portfolio.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Md Shakil Ahmed Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Shakil Ahmed | Frontend Developer",
    description: "Welcome to my frontend development portfolio showcasing creative web experiences.",
    images: ["https://shakilcreativework-portfolio.vercel.app/og-image.jpg"],
  },
};

// Your export default function RootLayout({ children }) ... stays down here unchanged

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen flex flex-col bg-background text-foreground"
        suppressHydrationWarning={true}
      >
        <NextThemeProvider>
          <Navbar />
          <TechCursor />
          <main className="flex-1 overflow-hidden">{children}</main>
          <Footer />
        </NextThemeProvider>
      </body>
    </html>
  );
}
