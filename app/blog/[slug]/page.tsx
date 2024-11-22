import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allBlogs } from "contentlayer/generated";
import { Link, User } from "@nextui-org/react";
import { format, parseISO } from "date-fns";
import NextLink from "next/link";
import { Balancer } from "react-wrap-balancer";
import { siteConfig } from "@/config/site";
import { Route } from "@/libs/docs/page";
import { ChevronRightLinearIcon } from "@/components/icons";
import dynamic from "next/dynamic";

const MDXContent = dynamic(
  () => {
    return import("@/components/mdx-content");
  },
  { ssr: false }
);

interface BlogProps {
  params: {
    slug: string;
  };
}

async function getBlogFromParams({ params }: BlogProps) {
  const slug = params.slug || "";
  const post = allBlogs.find((post) => post.slugAsParams === slug);

  if (!post) {
    return {};
  }

  const currentRoute: Route = {
    key: post?._id,
    title: post?.title,
    path: `/${post?._raw?.sourceFilePath}`,
  };

  return { post, currentRoute };
}

export async function generateMetadata({
  params,
}: BlogProps): Promise<Metadata> {
  const { post } = await getBlogFromParams({ params });

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: post.url,
      images: [
        {
          url: post.imageAsParams || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: post.title || siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [siteConfig.ogImage],
      creator: siteConfig.creator,
    },
  };
}

export async function generateStaticParams(): Promise<BlogProps["params"][]> {
  return allBlogs.map((doc) => ({
    slug: doc.slugAsParams,
  }));
}

export default async function DocPage({ params }: BlogProps) {
  const { post } = await getBlogFromParams({ params });

  if (!post) {
    notFound();
  }

  return (
    <div className="w-full flex flex-col justify-start items-center prose prose-neutral">
      <div className="w-full max-w-4xl">
        <MDXContent code={post.body.code} />
        <div className="mt-12 grid grid-cols-1 gap-3">
          <div className="flex w-full flex-col items-start">
            <User
              isExternal
              as={Link}
              avatarProps={{
                className: "w-9 h-9 text-large",
                src: post.author?.avatar,
              }}
              className="hover:opacity-100"
              classNames={{
                base: "-ml-2 px-2 py-1.5 hover:bg-default-100 dark:hover:bg-default-50 cursor-pointer transition-colors",
                name: "text-foreground",
              }}
              description={post.author?.username}
              href={post.author?.link}
              name={post.author?.name}
            />
          </div>
          <time
            className="block text-small text-default-500 items-end py-1"
            dateTime={post.date}
          >
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
          <div className={"flex"}>
            <Link
              isBlock
              as={NextLink}
              className="-ml-3 text-default-500 hover:text-default-900"
              color="foreground"
              href={"/blog"}
              size="sm"
            >
              <ChevronRightLinearIcon
                className="rotate-180 inline-block mr-1"
                size={15}
              />
              Back to blog
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
