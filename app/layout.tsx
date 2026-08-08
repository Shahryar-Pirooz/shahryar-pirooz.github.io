import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://shahryar-pirooz.github.io"),
  title: "Shahryar Pirooz | Software Engineer",
  description:
    "Software engineer focused on modern frontend development, Go backend engineering, Linux, open source, and self-hosted systems.",
  keywords: [
    "Shahryar Pirooz", "Software Engineer", "Frontend Developer", "Go",
    "TypeScript", "React", "Next.js", "Vue", "Linux", "Open Source"
  ],
  openGraph: {
    title: "Shahryar Pirooz | Software Engineer",
    description:
      "Modern frontend development, Go backend engineering, open source, Linux, and self-hosted systems.",
    url: "https://shahryar-pirooz.github.io",
    siteName: "Shahryar Pirooz",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}