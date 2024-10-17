import type { Metadata } from "next";
import "./globals.css";
import { Archivo_Black, Inter } from "next/font/google";

const ABFont = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-ab",
});

const InterFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Garrett Post",
  description: "Garrett's Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ABFont.variable} ${InterFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
