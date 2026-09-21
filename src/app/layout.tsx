import type { Metadata } from "next";
import { Sora, IBM_Plex_Mono } from "next/font/google";
import { MotionConfig } from "framer-motion";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/metadata";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500"],
});

// Fallback only — every route sets its own title, description and canonical
// via pageMetadata() in src/lib/metadata.ts.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_NAME,
  description:
      "Steadfast Protocol builds custom software, AI tooling, and workflow automation for teams who need it to just work.",
  icons: {
    icon: [
      { url: "/04-favicons/favicon.svg", type: "image/svg+xml" },
      { url: "/04-favicons/favicon-32.png", sizes: "32x32", type: "image/png" },
      // Root .ico carries all three native masters (16/32/48).
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/05-platform/apple-touch-icon-180.png",
  },
  openGraph: {
    siteName: SITE_NAME,
    images: [OG_IMAGE],
  },
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" className={`${sora.variable} ${plexMono.variable}`}>
      <body className="bg-ink text-text font-sans antialiased">
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </body>
      </html>
  );
}