import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NextThemeProvider from "@/providers/NextThemeProvider";
import Navbar from "@/components/shared/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Md Shakil Ahmed | Frontend Developer",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <NextThemeProvider>
          <Navbar />
          {children}
        </NextThemeProvider>
        {/* <Navbar />
        {children} */}
      </body>
    </html>
  );
}
