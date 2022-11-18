import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import cl from "classnames";
import { format, parseISO } from "date-fns";

import Container from "src/layouts/Container";
import { Arrow } from "src/components/icons";

export default function Post({ post, posts, ...props }) {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const { pid } = router.query;
  const pageOverview = [
    {
      id: "1",
      title: "Overview",
      url: "/#sample",
      active: true,
    },
    {
      id: "2",
      title: "What is a promise?",
      url: "/#sample",
      active: false,
    },
    {
      id: "3",
      title: "Usage of Promise",
      url: "/#sample",
      active: false,
    },
    {
      id: "4",
      title: "Advantages of using promise",
      url: "/#sample",
      active: false,
    },
    {
      id: "5",
      title: "Async await and conclusion.",
      url: "/#sample",
      active: false,
    },
  ];
  return (
    <Container>
      <div id="blog-header">
        <span className="bold text-md mb-10 bg-gradient-to-r from-indigo-400 to-purple-600 bg-clip-text text-center font-semibold text-transparent ">
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
              <span>{post.readingTime.text}</span> <span>120 likes</span>
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
        <div>
          <div className="series my-5 flex flex-1 flex-col gap-2 rounded-lg bg-neutral-200 p-4 text-sm dark:bg-neutral-800">
            <div>SERIES</div>
            <div>{post.summary}</div>
          </div>
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
              <div className="rounded bg-neutral-200 p-2 text-sm italic leading-loose dark:bg-neutral-800">
                {post.summary}
              </div>
            </div>
            {props.children}
          </div>
        </div>
        <div className="w-full px-2 md:max-w-[300px]">
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
              )} md:opacity-1 relative overflow-hidden transition ease-linear md:h-auto`}
            >
              {pageOverview.map(({ id, title, url, active }) => (
                <Link href={`${url}`} key={`sample-${id}`}>
                  <a className="border-l-neutral-300 text-sm ">
                    <div
                      className={cl(
                        active
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
            <div className="hidden md:block">
              <h3 className="my-5 px-2 text-xl font-semibold">Articles</h3>
              <div key={`blog-12`} className="flex ">
                <Link href={`/blog/sample`}>
                  <a className="flex-1 border-l bg-gradient-to-l px-2 py-3 hover:from-orange-50 dark:hover:from-indigo-900">
                    <div className="flex flex-1 border-l-neutral-600 pb-2 dark:text-neutral-500">
                      <span className="text-xs">
                        {/* {format(parseISO(postItem.publishedAt), "MMMM dd, yyyy")} */}
                        12 Aug 2022.
                      </span>
                      <span className="flex-1" />
                      <span className="text-xs">{post.readingTime.text}</span>
                    </div>
                    <div className="border-l-neutral-300  text-sm dark:text-neutral-400">
                      Sample text for home
                    </div>
                  </a>
                </Link>
              </div>
              <div key={`blog-13`} className="flex ">
                <Link href={`/blog/sample`}>
                  <a className="flex-1 border-l bg-gradient-to-l px-2 py-3 hover:from-orange-50 dark:hover:from-indigo-900">
                    <div className="flex flex-1 border-l-neutral-600 pb-2 dark:text-neutral-500">
                      <span className="text-xs">
                        {/* {format(parseISO(postItem.publishedAt), "MMMM dd, yyyy")} */}
                        12 Aug 2022.
                      </span>
                      <span className="flex-1" />
                      <span className="text-xs">12 min 5s</span>
                    </div>
                    <div className="border-l-neutral-300  text-sm dark:text-neutral-400">
                      Sample text for home
                    </div>
                  </a>
                </Link>
              </div>
              <div className="flex ">
                <Link href="/blog">
                  <a className="mt-2 py-4 text-xs font-semibold">View More →</a>
                </Link>
              </div>
              <hr className="wave my-5" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
