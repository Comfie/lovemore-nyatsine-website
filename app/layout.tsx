import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lovemore Nyatsine | Author, Strategist, Coach",
  description:
    "A premium author platform for Lovemore Nyatsine: books, ideas, leadership reflections, and speaking opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

