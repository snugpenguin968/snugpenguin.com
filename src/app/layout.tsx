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
  description: "John Tian's personal website",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "32x32" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${goldman.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "John Tian",
              url: "https://johntian.dev",
              image: "https://johntian.dev/favicon/android-chrome-512x512.png",
              sameAs: [
                "https://github.com/snugpenguin",
                "https://linkedin.com/in/john-tian",
                "https://twitter.com/JohnTian_"
              ],
              jobTitle: "Computer Science Student",
              worksFor: {
                "@type": "Organization",
                name: "Rice University"
              }
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
