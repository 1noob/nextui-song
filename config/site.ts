export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "SONG",
  description: "Fullstack engineer",
  ogImage: "/opengraph.png",
  author: "Zhou SongJie",
  email: "song@jackey.love",
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
    github: "https://github.com/1noob/song.jackey.love",
    twitter: "https://twitter.com/zhousongjie",
  },
  twitter: {
    card: "summary_large_image",
    title: "SONG",
    description: "Fullstack engineer",
    image: "/opengraph.png",
    creator: "@zhousongjie",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://song.jackey.love",
    siteName: "SONG",
    description: "Fullstack engineer",
    images: [
      {
        url: "/opengraph.png",
        width: 1200,
        height: 630,
        alt: "SONG",
      },
    ],
  },
};
