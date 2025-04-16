import localFont from "next/font/local";
import "./globals.css";
import LayoutContainer from "@/app/LayoutContainer";
import { Header } from "@/components/Header";
import { cookieGet } from "@/utils/cookie";
import { Theme } from "@/utils/types";
import clsx from "clsx";
const space = localFont({
  src: "../../public/fonts/SpaceMono.ttf",
  variable: "--font-space-mono",
});

const geist = localFont({
  src: "../../public/fonts/GeistMono.ttf",
  variable: "--font-geist-mono",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = (await cookieGet("theme")) as Theme;

  return (
    <html lang="en">
      <body className={clsx(space.className, geist.className, theme)}>
        <LayoutContainer>
          <div className="min-h-screen w-full bg-stone-100 p-1.5 sm:p-4 pt-10 sm:pt-12 dark:bg-slate-900">
            <div className="mx-auto w-full max-w-[600px]">
              <Header currentTheme={theme} />
              {children}
            </div>
          </div>
        </LayoutContainer>
      </body>
    </html>
  );
}
