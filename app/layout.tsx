import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { Providers } from './provider'
import { fonts } from './fonts'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rakesh's Portfolio",
  description: "Using Next.js, Taiwind.css etc ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}><ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider></body>
    </html>
  );
}


