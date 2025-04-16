import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import LayoutContainer from "@/app/LayoutContainer";
import { Header } from "@/components/Header";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const space = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={space.className}>
        <LayoutContainer>
          <div className="min-h-screen w-full bg-stone-100 p-1.5 sm:p-4 pt-10 sm:pt-12 dark:bg-slate-900">
            <div className="mx-auto w-full max-w-[600px]">
              <Header />
              {children}
            </div>
          </div>
        </LayoutContainer>
      </body>
    </html>
  );
}
