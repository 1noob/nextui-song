import { allBlogs } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { BlogList } from "@/components";

export default function Blog() {
  const posts = allBlogs.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="w-full">
      <div className="text-center">
        <h1 className="mb-2 font-bold text-4xl">
          Welcome To My Blog
        </h1>
        <h5 className="text-default-500 text-lg">
          All the latest learning about me.
        </h5>
      </div>
      <BlogList posts={posts} />
    </div>
  );
}
