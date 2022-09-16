import Container from "src/layouts/Container";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import cl from "classnames";

export default function Post() {
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
      title: "Overview",
      url: "/#sample",
      active: false,
    },
    ,
    {
      id: "3",
      title: "Overview",
      url: "/#sample",
      active: false,
    },
    ,
    {
      id: "4",
      title: "Overview",
      url: "/#sample",
      active: false,
    },
  ];
  return (
    <Container>
      <h1 className="mb-5 text-3xl">
        How to turn side projects into an actual product?
      </h1>
      <div className="my-2 flex flex-wrap gap-2 text-xs">
        <span className="rounded-full bg-neutral-200 px-2 py-1 dark:bg-neutral-700">
          # productivity
        </span>
        <span className="rounded-full bg-neutral-200 px-2 py-1 dark:bg-neutral-700">
          # time
        </span>
      </div>
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
            <span> January 28, 2022 </span>
          </span>
          <div className="text-xs text-neutral-400">
            <span>12 min read · </span>
            <span>120 likes</span>
          </div>
        </div>
      </div>
      <hr className="wave my-5" />
      <div className="flex flex-col-reverse md:flex-row">
        <div>
          <div className="series my-5 flex flex-1 flex-col gap-2 rounded-lg bg-neutral-200 p-4 text-sm dark:bg-neutral-800">
            <div>SERIES</div>
            <div>Build an macOs menubar app using NextJs and eletronJS</div>
          </div>
          <div>
            <div>
              <Image
                className="rounded-md"
                height={650}
                width={1080}
                src={"/assets/img/achuth.jpg"}
                alt="Achuth Hadnoor"
              />
            </div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
            <div>today we are going to learn more baout theo</div>
          </div>
        </div>
        <div className="w-full px-4 md:max-w-xs">
          <div className="top-16  flex-col transition-all sm:flex sm:px-2  md:sticky">
            <h3 className="px-2 py-5 text-xl font-semibold">On the page</h3>
            {pageOverview.map(({ id, title, url, active }) => (
              <Link href={url} key={`sample-${id}`}>
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
            <div className="hidden md:block">
              <h3 className="my-5 px-2 text-xl font-semibold">Articles</h3>
              <div key={`blog-12`} className="flex">
                <Link href={`/blog/sample`}>
                  <a className="border-l bg-gradient-to-l px-2 py-3 hover:from-orange-50 dark:hover:from-indigo-900">
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
              <div key={`blog-12`} className="flex">
                <Link href={`/blog/sample`}>
                  <a className="border-l bg-gradient-to-l px-2 py-3 hover:from-orange-50 dark:hover:from-indigo-900">
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
              <div className="flex">
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
