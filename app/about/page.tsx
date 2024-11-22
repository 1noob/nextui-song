import { notFound } from "next/navigation";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { allPages } from "contentlayer/generated";
import dynamic from "next/dynamic";
import { getHeadings } from "@/libs/docs/utils";
import { DocsToc } from "@/components/docs";
import { useTheme } from "next-themes";

const MDXContent = dynamic(
  () => {
    return import("@/components/mdx-content");
  },
  { ssr: false }
);

interface AboutPageProps {
  params: {
    slug: string;
  };
}

async function getPageFromParams({ params }: AboutPageProps) {
  const slug = params.slug
  const doc = allPages.find((doc) => doc.slugAsParams === slug);

  if (!doc) {
    return {};
  }

  const headings = getHeadings(doc?.body.raw);

  return { doc, headings };
}

export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const { doc } = await getPageFromParams({ params });

  if (!doc) {
    return {};
  }

  return {
    title: doc.title,
    description: doc.description,
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: "article",
      url: doc.url,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: doc.title,
      description: doc.description,
      images: [siteConfig.ogImage],
      creator: siteConfig.creator,
    },
  };
}

export async function generateStaticParams(): Promise<
  AboutPageProps["params"][]
> {
  return allPages.map((doc) => ({
    slug: doc.slugAsParams,
  }));
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { doc, headings } = await getPageFromParams({ params });
  const { systemTheme } = useTheme();

  if (!doc) {
    notFound();
  }
  return (
    <>
      <div className="col-span-12 lg:col-span-10 xl:col-span-8 lg:px-16 my-6 lg:my-12">
        <div className="w-full prose prose-neutral grid gap-10">
          <MDXContent code={doc.body.code} />
          <iframe
            className={"w-full rounded-xl h-[175px]"}
            allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src={
              `https://embed.music.apple.com/cn/album/%E5%B9%B2%E6%9D%AF/1081297124?i=1081297130?theme=` +
              systemTheme
            }
          />
        </div>
      </div>
      {headings && headings.length > 0 && (
        <div className="hidden z-10 xl:flex xl:col-span-2 p-4">
          <DocsToc headings={headings} />
        </div>
      )}
    </>
  );
}
