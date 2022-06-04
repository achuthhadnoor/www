import Image from "next/image";
import { parseISO, format } from "date-fns";

import Container from "@/components/Container";
import Subscribe from "@/components/Newsletter";
// import ViewCounter from '@/components/ViewCounter';
import { Fragment, PropsWithChildren } from "react";
import type { Blog } from ".contentlayer/types";
import Link from "next/link";

const editUrl = (slug: string) =>
  `https://github.com/achuthhadnoor/www/edit/main/data/blog/${slug}.mdx`;
const discussUrl = (slug: string) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://achuth.dev/blog/${slug}`
  )}`;

export default function BlogLayout({
  children,
  post,
  posts,
}: PropsWithChildren<{ post: Blog; posts: Blog[] }>) {
  return (
    <Container
      title={`${post.title} – Achuth Hadnoor`}
      description={post.summary}
      image={`https://achuth.dev${post.image}`}
      date={new Date(post.publishedAt).toISOString()}
      type="article"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <article className="w-fill col-span-2 mb-16 flex max-w-full flex-1 flex-col flex-wrap items-start justify-center">
          <div className="flex flex-1 flex-wrap items-center space-x-2 pb-2 text-sm">
            {post.tags &&
              JSON.parse(post.tags).map((tag: string, i: number) => (
                <span
                  key={`tag-key-${i}`}
                  className=" mr-2 inline-block rounded-md  bg-gradient-to-r from-yellow-400 to-pink-500 p-1 text-xs  text-white dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500"
                >
                  #{tag}
                </span>
              ))}
          </div>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
            {post.title}
          </h1>
          <div className="mt-2 flex w-full flex-col items-start justify-between md:flex-row md:items-center">
            <div className="flex items-center">
              <Image
                alt="Achuth Hadnoor"
                height={24}
                width={24}
                src="/images/achuth.jpg"
                className="rounded-full "
              />
              <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                {"Achuth Hadnoor •"}
                {format(parseISO(post.publishedAt), "MMMM dd, yyyy")}
                {/* {post.publishedAt} */}
              </p>
            </div>
            <p className="min-w-32 mt-2 text-sm text-gray-600 dark:text-gray-400 md:mt-0">
              {post.readingTime.text}
              {` • `}
              12,000 views
              {/* <ViewCounter slug={post.slug} /> */}
            </p>
          </div>
          <div className="prose mt-4 w-full max-w-none text-sm leading-relaxed dark:prose-dark">
            {children}
          </div>
          <div className="mt-8">
            <Subscribe />
          </div>
          <div className="text-sm text-gray-700 dark:text-gray-300">
            <a
              href={discussUrl(post.slug)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {"Discuss on Twitter"}
            </a>
            {` • `}
            <a
              href={editUrl(post.slug)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {"Edit on GitHub"}
            </a>
          </div>
        </article>
        <div className="sticky top-48 hidden flex-col transition-all sm:flex  sm:px-2">
          <h3 className="px-2 text-xl font-semibold">Articles</h3>
          <div className="mt-5 border-l-2 border-l-gray-900 px-2 pb-2 dark:border-l-gray-50">
            <div className="flex flex-1 text-xs">
              <span className="text-xs">
                {format(parseISO(post.publishedAt), "MMMM dd, yyyy")}
              </span>
              <span className="flex-1" />
              {/* <span>10,000 Views</span> */}
            </div>
            <div className="text-md font-semibold">{post.title}</div>
          </div>
          {posts.map((postItem) => (
            <Fragment key={`blog-${postItem._id}`}>
              <Link href={`/blog/${postItem.slug}`}>
                <a className="border-l bg-gradient-to-l px-2 py-3 hover:from-orange-50 dark:hover:from-indigo-900">
                  <div className="flex flex-1 border-l-gray-600 pb-2 dark:text-gray-500">
                    <span className="text-xs">
                      {format(parseISO(postItem.publishedAt), "MMMM dd, yyyy")}
                    </span>
                    <span className="flex-1" />
                    <span className="text-xs">{postItem.readingTime.text}</span>
                  </div>
                  <div className="border-l-gray-300  text-sm dark:text-gray-400">
                    {postItem.title}
                  </div>
                </a>
              </Link>
            </Fragment>
          ))}
          <Link href="/blog">
            <a className="mt-2 py-4 text-xs font-semibold">View More →</a>
          </Link>
        </div>
      </div>
    </Container>
  );
}
