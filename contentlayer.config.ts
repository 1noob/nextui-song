import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { visit } from "unist-util-visit";

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
  url: { type: "string", resolve: (doc) => `/${doc._raw.flattenedPath}` },
};

export const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `docs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: false },
    date: { type: "date", required: false },
  },
  computedFields,
}));

export const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: `*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: false },
    date: { type: "date", required: false },
  },
  computedFields,
}));

export const BlogPost = defineDocumentType(() => ({
  name: "BlogPost",
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {type: "string", required: true},
    description: {type: "string", required: true},
    date: {type: "date", required: true},
    image: {type: "string", required: false},
  },
  computedFields: {
    ...computedFields,
    // Date format June 22nd 2023
    formattedDate: {
      type: "string",
      resolve: (doc) => {
        const date = new Date(doc.date);
        const options = {year: "numeric", month: "long", day: "numeric"};
        return date.toLocaleDateString("en-US", options);
      }
    },
    // add domain to the image path
    imageAsParams: {
      type: "string",
      resolve: (doc) => {
        const image = doc.image;
        if (image) {
          return `https://song.jackey.love/${image}`;
        }
      }
    }
  }
}));

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Doc, Page, BlogPost],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      () => (tree) => {
        visit(tree, "element", (node) => {
          if (node.tagName === "code" && node.data && node.data.meta) {
            node.properties.meta = node.data.meta;
          }
        });
      },
    ],
  },
});
