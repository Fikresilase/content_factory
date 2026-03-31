import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/material-symbols-outlined";
import "./globals.css";

export const metadata: Metadata = {
  title: "Viralclip - Own Your AI Clipper",
  description: "Unlimited local processing. No monthly fees. 100% Privacy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-background-dark text-white">
        {children}
      </body>
    </html>
  );
}
