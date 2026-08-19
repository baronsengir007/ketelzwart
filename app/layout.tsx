import type { Metadata } from "next";
import { Cormorant_Garamond, Karla, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Ketelzwart — coffee roastery in Amsterdam-Noord",
  description:
    "Small batches, roasted light, tastings at the kettle every Saturday. Ketelzwart roasts coffee in Amsterdam-Noord.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${karla.variable} ${plexMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
