import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chang Guo",
  description:
    "Chang Guo is a PhD Candidate at Arizona State University working on indexing, caching, and storage systems for LLM inference and scientific computing.",
  authors: [{ name: "Chang Guo" }],
  keywords: [
    "Chang Guo",
    "LLM inference",
    "KV cache",
    "storage systems",
    "scientific computing",
    "indexing",
    "Arizona State University",
  ],
  openGraph: {
    title: "Chang Guo",
    description:
      "Indexing, caching, and storage systems for LLM inference and scientific computing.",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
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
