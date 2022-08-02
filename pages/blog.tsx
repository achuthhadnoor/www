import { useState } from "react";
import Container from "layouts/Container";
import BlogPost from "components/BlogPost";
import { InferGetStaticPropsType } from "next";
import { allBlogs } from ".contentlayer/generated";
import { pick } from "contentlayer/client";

/*
  TODO: tags search 
  TODO: Create search query integration for better SEO.
*/
export default function Blog({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [searchValue, setSearchValue] = useState("");
  const filteredBlogPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Container
      title="Blog – Achuth Hadnoor"
      description="Thoughts on the software industry, programming, tech, videography, music, and my personal life."
    >
      <h1 className="my-2 flex-1 bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-center text-2xl font-semibold  text-transparent dark:from-blue-500 dark:via-green-300 dark:to-green-500 sm:my-4 sm:text-6xl">
        Learn. Unlearn. Relearn
      </h1>
      <p className="my-4 mx-auto max-w-xl text-center text-gray-600 dark:text-gray-400 sm:my-6">
        {`I write mostly about web development and tech careers. In total, I've written ${posts.length} articles on this site.`}
      </p>
      <div className="relative mx-auto mb-2 w-full max-w-lg">
        <input
          aria-label="Search articles"
          type="search"
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search articles"
          className="block w-full rounded-full border border-gray-200 bg-white px-4 py-2 pr-10 text-gray-900 accent-orange-300 outline-none focus:border-orange-500 focus:ring-orange-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-green-800 dark:focus:ring-green-800"
        />
        <svg
          className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <div className="relative mx-auto mb-4 w-full max-w-lg text-center text-xs text-gray-400">
        Search by hashtags or keywords
      </div>
      {!filteredBlogPosts.length && (
        <p className="mb-4 w-full text-center text-gray-600 dark:text-gray-400">
          No posts found.
        </p>
      )}
      <div className="grid-col-1 mx-auto mb-16 grid w-full items-start justify-center gap-4 sm:grid-cols-2">
        {/* {!searchValue && (
          <>
            <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
              Most Popular
            </h3>
            <BlogPost
              title="Everything I Know About Style Guides, Design Systems, and Component Libraries"
              summary="A deep-dive on everything I've learned in the past year building style guides, design systems, component libraries, and their best practices."
              slug="style-guides-component-libraries-design-systems"
            />
            <BlogPost
              title="How Stripe Designs Beautiful Websites"
              summary="Examining the tips and tricks used to make Stripe's website design a notch above the rest."
              slug="how-stripe-designs-beautiful-websites"
            />
            <BlogPost
              title="Creating a Monorepo with Lerna & Yarn Workspaces"
              summary="In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process."
              slug="monorepo-lerna-yarn-workspaces"
            />
          </>
        )} */}
        {filteredBlogPosts.map((post) => (
          <BlogPost key={post.title} {...post} />
        ))}
      </div>
    </Container>
  );
}

export function getStaticProps() {
  const posts = allBlogs
    .map((post) =>
      pick(post, ["slug", "title", "summary", "publishedAt", "tags", "image"])
    )
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );

  return { props: { posts } };
}
