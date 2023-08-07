import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import GithubSlugger from "github-slugger";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export function capitalize(str: string) {
  if (!str || typeof str !== "string") return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const BlogPost = defineDocumentType(() => ({
  name: "BlogPost",
  filePathPattern: `**/blog/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    publishedAt: {
      type: "string",
      required: true,
    },
    summary: {
      type: "string",
      required: true,
    },
    image: {
      type: "string",
      required: true,
    },
    author: {
      type: "string",
      required: true,
    },
    categories: {
      type: "list",
      of: {
        type: "enum",
        options: ["company", "education", "customer-stories"],
        default: "company",
      },
      required: true,
    },
    related: {
      type: "list",
      of: {
        type: "string",
      },
    },
  },
  // @ts-ignore
  computedFields: computedFields("blog"),
}));

const computedFields = (type: "blog" | "changelog" | "help" | "legal") => ({
  slug: {
    type: "string",
    resolve: (doc: any) => doc._raw.flattenedPath.replace(`${type}/`, ""),
  },
  tableOfContents: {
    type: "array",
    resolve: (doc: any) => {
      // get all markdown heading 2 nodes (##)
      const headings = doc.body.raw.match(/^##\s.+/gm);
      const slugger = new GithubSlugger();
      return (
        headings?.map((heading: any) => {
          const title = heading.replace(/^##\s/, "");
          return {
            title,
            slug: slugger.slug(title),
          };
        }) || []
      );
    },
  },
  images: {
    type: "array",
    resolve: (doc: any) => {
      return (
        doc.body.raw.match(/(?<=<Image[^>]*\bsrc=")[^"]+(?="[^>]*\/>)/g) || []
      );
    },
  },
  tweetIds: {
    type: "array",
    resolve: (doc: any) => {
      const tweetMatches = doc.body.raw.match(/<Tweet\sid="[0-9]+"\s\/>/g);
      return tweetMatches?.map((tweet: any) => tweet.match(/[0-9]+/g)[0]) || [];
    },
  },
  githubRepos: {
    type: "array",
    resolve: (doc: any) => {
      // match all <GithubRepo url=""/> and extract the url
      return doc.body.raw.match(
        /(?<=<GithubRepo[^>]*\burl=")[^"]+(?="[^>]*\/>)/g
      );
    },
  },
  structuredData: {
    type: "object",
    resolve: (doc: any) => ({
      "@context": "https://schema.org",
      "@type": `${capitalize(type)}Posting`,
      headline: doc.title,
      datePublished: doc.publishedAt,
      dateModified: doc.publishedAt,
      description: doc.summary,
      image: doc.image,
      url: `https://achuth.dev/${doc._raw.flattenedPath}`,
      author: {
        "@type": "Person",
        name: doc.author,
      },
    }),
  },
});

export default makeSource({
  contentDirPath: "content",
  documentTypes: [
    BlogPost,
    //, ChangelogPost, LegalPost, HelpPost
  ],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "one-dark-pro",
          onVisitLine(node: { children: string | any[] }) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node: {
            properties: { className: string[] };
          }) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node: {
            properties: { className: string[] };
          }) {
            node.properties.className = ["word--highlighted"];
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["anchor"],
            "data-mdx-heading": "",
          },
        },
      ],
    ],
  },
});
