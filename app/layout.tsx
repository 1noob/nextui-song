import "@/styles/globals.css";
import { Metadata } from "next";
import manifest from "@/config/routes.json";
import { siteConfig } from "@/config/site";
import { fontMono } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components";
import clsx from "clsx";
import { Footer } from "@/components";
import type { Viewport } from "next";
import { Image } from "@nextui-org/react";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://song.jackey.love"),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "https://assets.vercel.com/image/upload/front/favicon/vercel/favicon.ico",
    apple:
      "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png",
  },
  twitter: siteConfig.twitter,
  openGraph: siteConfig.openGraph,
  appleWebApp: {
    capable: true,
    title: "SONG",
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <title>SONG</title>
      </head>
      <body
        className={clsx(
          "min-h-screen dot-background font-mono antialiased",
          fontMono.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "system" }}>
          <div className="relative flex flex-col">
            <Navbar
              mobileRoutes={manifest.mobileRoutes}
              routes={manifest.routes}
            />
            <main className="relative container mx-auto max-w-7xl z-10 px-6 min-h-[calc(100dvh_-_64px_-_108px)] mb-6 flex-grow">
              {children}
            </main>
            <div
              aria-hidden="true"
              className="fixed hidden dark:md:block dark:opacity-70 -bottom-[40%] -left-[20%] z-0"
            >
              <Image
                removeWrapper
                alt="docs left background"
                src="/gradients/docs-left.png"
              />
            </div>
            <div
              aria-hidden="true"
              className="fixed hidden dark:md:block dark:opacity-70 -top-[80%] -right-[60%] 2xl:-top-[60%] 2xl:-right-[45%] z-0 rotate-12"
            >
              <Image
                removeWrapper
                alt="docs right background"
                src="/gradients/docs-right.png"
              />
            </div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
