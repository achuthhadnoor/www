import Image from "next/image";
import { parseISO, format } from "date-fns";

import Container from "@/components/Container";
import Subscribe from "@/components/Newletter";
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
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
        <article className="col-span-2 flex flex-col items-start justify-center flex-1 mb-16 flex-wrap w-fill max-w-full">
          <div className="flex space-x-2 flex-1 flex-wrap items-center text-sm pb-2">
            {post.tags &&
              JSON.parse(post.tags).map((tag: string, i: number) => (
                <span
                  key={`tag-key-${i}`}
                  className=" p-1 mr-2 rounded-md  text-white text-xs inline-block bg-gradient-to-r from-yellow-400  to-pink-500 dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500"
                >
                  #{tag}
                </span>
              ))}
          </div>
          <Image
            src={post.image || ""}
            height={176}
            width={176}
            layout="responsive"
            className="w-full"
            alt={post.title}
          />
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
            {post.title}
          </h1>
          <div className="flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center">
            <div className="flex items-center">
              <Image
                alt="Achuth Hadnoor"
                height={24}
                width={24}
                src="/images/achuth.jpg"
                className="rounded-full "
              />
              <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                {"Achuth Hadnoor / "}
                {format(parseISO(post.publishedAt), "MMMM dd, yyyy")}
                {/* {post.publishedAt} */}
              </p>
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
              {post.readingTime.text}
              {` • `}
              {/* <ViewCounter slug={post.slug} /> */}
            </p>
          </div>
          <div className="w-full mt-4 prose dark:prose-dark max-w-none">
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
        <div className="hidden sm:flex flex-col sm:px-2 sticky top-48">
          <h3 className="font-semibold text-xl px-2">Articles</h3>
          <div className="border-l-2 border-l-gray-900 dark:border-l-gray-50 px-2 mt-5 pb-2">
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
                <a>
                  <div className="border-l border-l-gray-300 px-2 py-3">
                    <div className="flex flex-1 pb-2">
                      <span className="text-xs">
                        {format(
                          parseISO(postItem.publishedAt),
                          "MMMM dd, yyyy"
                        )}
                      </span>
                      <span className="flex-1" />
                      <span className="text-xs">
                        {postItem.readingTime.text}
                      </span>
                    </div>
                    <div className="text-sm">{postItem.title}</div>
                  </div>
                </a>
              </Link>
            </Fragment>
          ))}
        </div>
      </div>
    </Container>
  );
}
