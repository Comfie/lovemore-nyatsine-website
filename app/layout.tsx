import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lovemore Nyatsine — Author, Coach, Strategist",
  description:
    "The home of Lovemore Nyatsine's books and writing on leadership, endurance, and becoming.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
