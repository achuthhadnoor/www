import { useState } from "react";

import Container from "@/components/Container";
import BlogPost from "@/components/Blogpost";
import { InferGetStaticPropsType } from "next";
import { allBlogs } from ".contentlayer/data";
import { pick } from "contentlayer/client";

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
      <h1 className="flex-1 my-4 font-semibold text-6xl text-center bg-gradient-to-r from-yellow-400  to-pink-500 dark:from-blue-500 dark:via-green-300 dark:to-green-500 bg-clip-text text-transparent">
        Learn. Unlearn. Relearn
      </h1>
      <p className="my-6 text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-center">
        {`I write mostly about web development and tech careers. In total, I've written ${posts.length} articles on this site. Use the search below to filter by title.`}
      </p>
      <div className="relative w-full max-w-lg mb-2 mx-auto">
        <input
          aria-label="Search articles"
          type="search"
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search articles"
          className="outline-none block w-full px-4 py-2 pr-10 accent-orange-300 text-gray-900 bg-white border border-gray-200 rounded-full dark:border-gray-900 focus:ring-orange-500 focus:border-orange-500 dark:focus:ring-purple-800 dark:focus:border-purple-800 dark:bg-gray-800 dark:text-gray-100"
        />
        <svg
          className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
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
      <div className="relative w-full max-w-lg mb-4 mx-auto text-xs text-center text-gray-400">
        Search by hashtags or keywords
      </div>
      {!filteredBlogPosts.length && (
        <p className="mb-4 text-gray-600 dark:text-gray-400 text-center w-full">
          No posts found.
        </p>
      )}
      <div className="grid gap-4 grid-col-1 sm:grid-cols-2 items-start justify-center mx-auto mb-16 w-full">
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
