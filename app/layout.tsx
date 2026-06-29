import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sugar Suite – Cocktail Bar | Granada Hills, CA",
  description:
    "Low-key cocktail bar in Granada Hills, California. Craft cocktails, cold beer, karaoke nights, and sports on TV. Located at 11858 Balboa Blvd.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="min-h-screen bg-[#080808] text-[#F5F0E8] font-[family-name:var(--font-body)] antialiased">
        {children}
      </body>
    </html>
  );
}
