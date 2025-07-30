import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { comicNeue, kalam, rubik } from './fonts';

import { Providers } from './providers';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Speech Bubble Tool",
  description: "Create Your Speech Bubble Composition",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <Providers>
        <html lang="en">
          <body className={`${geistSans.variable} ${geistMono.variable} ${comicNeue.variable} ${kalam.variable} ${rubik.variable}`}>
            {children}
          </body>
        </html>
      </Providers>
  );
}
