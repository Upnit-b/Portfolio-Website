import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const JetBrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500",
  "600", "700", "800"], variable: '--font-jetBrainsMono'})

export const metadata: Metadata = {
  title: "Upnit's Portfolio",
  description: "Modern and Minimal Software Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={JetBrainsMono.className}
      >
        {children}
      </body>
    </html>
  );
}
