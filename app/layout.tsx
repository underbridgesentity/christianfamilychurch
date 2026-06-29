import type { Metadata } from "next";
import { Archivo, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Christian Family Church | Living Life Together",
    template: "%s | Christian Family Church",
  },
  description:
    "Christian Family Church (CFC) is a multi-campus church across Johannesburg. Know God. Find Freedom. Discover Purpose. Make a Difference.",
  metadataBase: new URL("https://www.christianfamilychurch.co.za"),
  openGraph: {
    title: "Christian Family Church | Living Life Together",
    description: "A church for everyone, across Johannesburg.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${archivo.variable} ${hanken.variable}`}>
      <body>{children}</body>
    </html>
  );
}
