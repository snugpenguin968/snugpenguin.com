import type { Metadata } from "next";
import { Inter, Goldman } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const goldman = Goldman({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-goldman",
});

export const metadata: Metadata = {
  title: "John Tian",
  description: "Personal website of John Tian",
  icons: {
    icon: "/logo-square.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${goldman.variable}`}>
        {children}
      </body>
    </html>
  );
}
