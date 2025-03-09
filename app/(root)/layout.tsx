import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PurpleDry | Best Online Laundry Service in Hyderabad",
  description:
    "PurpleDry offers fast and reliable online laundry services in Hyderabad. Schedule pickups, enjoy professional ironing, and get doorstep delivery with quality assurance.",
  keywords: [
    "online laundry service",
    "laundry in Hyderabad",
    "doorstep laundry",
    "cloth ironing",
    "Hyderabad laundry",
    "dry cleaning Hyderabad",
    "fast laundry pickup",
  ],
  authors: [{ name: "PurpleDry", url: "https://purpledry.vercel.app/" }],
  creator: "PurpleDry",
  publisher: "PurpleDry",
  openGraph: {
    title: "PurpleDry | Hassle-Free Laundry in Hyderabad",
    description:
      "Download the PurpleDry app for fast laundry pickup, ironing, and doorstep delivery. Trusted by thousands in Hyderabad!",
    url: "https://purpledry.vercel.app/",
    siteName: "PurpleDry",
    images: [
      {
        url: "/purpledry.png",
        width: 1200,
        height: 630,
        alt: "PurpleDry - Online Laundry Service",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PurpleDry | Hassle-Free Laundry in Hyderabad",
    description:
      "Schedule laundry pickups & doorstep delivery with PurpleDry. Fast, reliable, and quality-assured laundry service.",
    images: ["/purpledry.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
