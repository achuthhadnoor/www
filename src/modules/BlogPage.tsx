import React from "react";

import BlogPost from "@/components/BlogPost";

import type { Blog } from ".contentlayer/types";

interface Props {
  posts: Pick<Blog, "title" | "summary" | "slug" | "publishedAt" | "image">[];
}

const BlogPage = ({ posts }: Props) => {
  return (
    <>
      <section>
        <h1 className="text-3xl font-bold">Blog</h1>

        <div className="flex flex-col items-center my-4 sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogPost key={post.slug} {...post} />
          ))}
        </div>
      </section>
    </>
  );
};

export default BlogPage;
