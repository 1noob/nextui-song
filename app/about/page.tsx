import { notFound } from "next/navigation";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { allBlogs, allPages } from "contentlayer/generated";
import dynamic from "next/dynamic";

const MDXContent = dynamic(
  () => {
    return import("@/components/mdx-content");
  },
  { ssr: false }
);

interface AboutPageProps {
  params: {
    slug: string[];
  };
}

async function getPageFromParams({ params }: AboutPageProps) {
  const slug = params.slug?.join("/") || "";
  const doc = allPages.find((doc) => doc.slugAsParams === slug);

  if (!doc) {
    return {};
  }

  return { doc };
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

export async function generateStaticParams(): Promise<AboutPageProps["params"][]> {
  return allPages.map((doc) => ({
    slug: doc.slugAsParams,
  }));
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { doc } = await getPageFromParams({ params });

  if (!doc) {
    notFound();
  }
  return (
    <>
      <div className="col-span-12 lg:col-span-10 xl:col-span-8 lg:px-16">
        <div className="w-full prose prose-neutral">
          <MDXContent code={doc.body.code} />
        </div>
      </div>
    </>
  );
}
