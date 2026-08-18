import type { Metadata } from "next";
import { Sora, IBM_Plex_Mono } from "next/font/google";
import { MotionConfig } from "framer-motion";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://steadfastprotocol.com"),
  title: "Steadfast Protocol | Custom Software, AI Tooling & Automation",
  description:
      "Steadfast Protocol builds custom software, AI tooling, and workflow automation for teams who need it to just work.",
  icons: {
    icon: [
      { url: "/04-favicons/favicon.svg", type: "image/svg+xml" },
      { url: "/04-favicons/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/04-favicons/favicon.ico", sizes: "any" },
    ],
    apple: "/05-platform/apple-touch-icon-180.png",
  },
  openGraph: {
    images: [
      {
        url: "/05-platform/open-graph-1200x630.png",
        width: 1200,
        height: 630,
      },
    ],
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