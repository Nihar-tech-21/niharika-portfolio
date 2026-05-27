import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Niharika Dhaka | Software Engineer Portfolio",
  description:
    "Aspiring Software Engineer | Full Stack Developer | Data Structures & Algorithms in Java. Engineering systems that scale and matter.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "Java",
    "React",
    "Portfolio",
  ],
  authors: [{ name: "Niharika Dhaka" }],
  openGraph: {
    title: "Niharika Dhaka | Software Engineer Portfolio",
    description:
      "Aspiring Software Engineer | Full Stack Developer | Data Structures & Algorithms in Java.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
