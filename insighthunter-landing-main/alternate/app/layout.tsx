import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import PWAInstallPrompt from '@/components/PWAInstallPrompt';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#007BFF" />
      </head>
      <body className={`${inter.variable} ${montserrat.variable}`}>
        {children}
        <PWAInstallPrompt />  {/* ← HERE */}
      </body>
    </html>
  );
}
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-heading" });

export const metadata: Metadata = {
  title: "InsightHunter: AI Data Analysis Tool | Uncover Hidden Patterns Fast",
  description: "Transform raw data into actionable insights with AI. Real-time analysis, precision targeting, and scalable reports. Start free.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
     <head>
       <link rel="manifest" href="/manifest.json" />
       <link rel="icon" href="/icon-192.png" sizes="192x192" />
       <link rel="apple-touch-icon" href="/icon-192.png" />
       <meta name="theme-color" content="#007BFF" />
     </head>
      <body className={`${inter.variable} ${montserrat.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
