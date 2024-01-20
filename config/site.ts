export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "SONG",
  description: "Full stack engineer",
  ogImage: "/favicon.png",
  author: "Zhou SongJie",
  email: "zhouzhou.plays@gmail.com",
  siteUrl: "https://song.jackey.love",
  creator: "@zhousongjie",
  navItems: [
    {
      label: "Docs",
      href: "/docs/hello",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  links: {
    github: "https://github.com/1noob",
    twitter: "https://twitter.com/zhousongjie",
  },
  twitter: {
    card: "summary_large_image",
    title: "SONG",
    description: "Full stack engineer",
    image: "/favicon.png",
    creator: "@zhousongjie",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://song.jackey.love",
    siteName: "SONG",
    description: "Full stack engineer",
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "SONG",
      },
    ],
  },
};
