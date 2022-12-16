import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import cl from "classnames";
import { format, parseISO } from "date-fns";

import Container from "src/layouts/Container";
import { Arrow } from "src/components/icons";

export const Series = ({ description }) => {
  return (
    <Link href={`/articles?q=${description}`}>
      <a className="series my-5 flex flex-1 flex-col gap-2 rounded-lg bg-neutral-200 p-4 text-sm dark:bg-neutral-800">
        <div className="bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-xs text-transparent ">
          SERIES
        </div>
        <div>{description}</div>
      </a>
    </Link>
  );
};

export default function Post({ post, posts, ...props }) {
  const articleRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [indexed, setIndexed] = useState([]);

  useEffect(() => {
    if (articleRef?.current) {
      const indexes = [];
      articleRef?.current.querySelectorAll("h2").forEach((h, i) =>
        indexes.push({
          id: `index-${i}`,
          title: h.id.replaceAll("-", " "),
          url: `#${h.id}`,
          active: h.id,
        })
      );
      setIndexed(indexes);
    }
  }, []);

  return (
    <Container>
      <div id="blog-header">
        <span className="text-md bold mb-10 bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-center text-transparent ">
          Blog
        </span>
        <h1 className="mb-5 text-2xl md:text-3xl">{post.title}</h1>
        <div className="flex gap-4 py-4 align-middle">
          <span className="">
            <Image
              alt="Author - Achuth Hadnoor"
              height={36}
              width={36}
              src="/images/achuth.jpg"
              className="rounded-full"
            />
          </span>
          <div className="flex flex-col gap-2 text-sm">
            <span className="flex flex-col gap-2 md:flex-row">
              <span>Achuth Hadnoor </span>{" "}
              <span className="hidden md:inline">·</span>{" "}
              <span>{format(parseISO(post.publishedAt), "dd MMMM, yyyy")}</span>
            </span>
            <div className="text-xs text-neutral-400">
              <span>{post.readingTime.text}</span> <span>120 Views</span>
            </div>
          </div>
        </div>
        <div className="my-2 flex flex-wrap gap-2 text-xs">
          {JSON.parse(post.tags)?.map((tag, index) => (
            <React.Fragment key={`tag-${index}`}>
              <span className="rounded-full bg-neutral-200 px-2 py-1 dark:bg-neutral-700">
                {tag}
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>

      <hr className="wave my-5" />

      <div className="mb-5 flex flex-col-reverse text-sm md:flex-row">
        <div className="max-w-2xl overflow-auto">
          <Series description={post.series} />
          <div>
            <div>
              <Image
                className="rounded-md"
                height={550}
                width={1080}
                src={post.image}
                alt="Achuth Hadnoor"
              />
            </div>
            <div id="summary" className="mb-2">
              <h3 className="my-3">Summary</h3>
              <div className="rounded border-t-2 border-t-neutral-500 bg-neutral-200 p-2 text-sm italic leading-loose dark:bg-neutral-800">
                {post.summary}
              </div>
            </div>
            <article
              className="text-md prose dark:prose-dark mt-4 w-full max-w-none leading-loose"
              ref={articleRef}
            >
              {props.children}
            </article>
          </div>
        </div>
        <div className="relative w-full px-2 md:max-w-[300px]">
          <div className="top-16  flex-col pl-2 transition-all  sm:flex md:sticky">
            <h3
              className="py-5 text-xl font-semibold"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <Arrow
                className={`${cl(
                  open ? "rotate-90" : "rotate-0"
                )} mx-2 inline transition ease-linear md:hidden`}
              />
              <span>On the page</span>
            </h3>
            <div
              className={`${cl(
                open ? "h-auto" : "h-0"
              )} md:opacity-1 relative overflow-hidden text-xs transition ease-linear md:h-auto`}
            >
              {indexed.map(({ id, title, url, active }) => (
                <Link href={`${url}`} key={`sample-${id}`}>
                  <a className="border-l-neutral-300 text-sm tracking-wider ">
                    <div
                      className={cl(
                        window.location.hash === url
                          ? "border-l-2 border-l-neutral-800 py-2 px-3  text-neutral-800 dark:border-l-neutral-300 dark:text-neutral-300"
                          : "border-l border-l-neutral-400 py-2 px-3 text-neutral-400 hover:text-neutral-700 dark:border-l-neutral-600 dark:text-neutral-500 hover:dark:text-neutral-400"
                      )}
                    >
                      {title}
                    </div>
                  </a>
                </Link>
              ))}
            </div>
            <div className="mt-3">
              <div className="mt-2 flex space-x-4">
                <Link href={"/"}>
                  <a>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23 3.00029C22.0424 3.67577 20.9821 4.1924 19.86 4.53029C19.2577 3.8378 18.4573 3.34698 17.567 3.12422C16.6767 2.90145 15.7395 2.95749 14.8821 3.28474C14.0247 3.612 13.2884 4.19469 12.773 4.95401C12.2575 5.71332 11.9877 6.61263 12 7.53029V8.53029C10.2426 8.57586 8.50127 8.1861 6.93101 7.39574C5.36074 6.60537 4.01032 5.43893 3 4.00029C3 4.00029 -1 13.0003 8 17.0003C5.94053 18.3983 3.48716 19.0992 1 19.0003C10 24.0003 21 19.0003 21 7.50029C20.9991 7.22174 20.9723 6.94388 20.92 6.67029C21.9406 5.66378 22.6608 4.393 23 3.00029V3.00029Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </Link>
                <Link href={"/"}>
                  <a>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6 9H2V21H6V9Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </Link>
                <Link href={"/"}>
                  <a>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
            <hr className="wave my-5" />
            {posts.length > 0 && (
              <div className="hidden md:block">
                <h3 className="my-5 px-2 text-xl font-semibold">Articles</h3>
                {posts.map((postItem) => (
                  <div key={`blog-12`} className="flex ">
                    <Link href={postItem.slug}>
                      <a className="flex-1 border-l bg-gradient-to-l px-2 py-3 hover:from-orange-50 dark:hover:from-indigo-900">
                        <div className="flex flex-1 border-l-neutral-600 pb-2 dark:text-neutral-500">
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
                        <div className="border-l-neutral-300  text-sm dark:text-neutral-400">
                          {postItem.summary}
                        </div>
                      </a>
                    </Link>
                  </div>
                ))}
                <div className="flex ">
                  <Link href="/blog">
                    <a className="mt-2 py-4 text-xs font-semibold">
                      View More →
                    </a>
                  </Link>
                </div>
                <hr className="wave my-5" />
              </div>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
