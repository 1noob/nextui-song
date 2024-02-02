import { allBlogs } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { BlogList } from "@/components";
import Greeting from "@/components/greeting";

export default function Blog() {
  const posts = allBlogs.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="w-full">
      <Greeting>
        SONG/Blog
      </Greeting>
      <BlogList posts={posts} />
    </div>
  );
}
