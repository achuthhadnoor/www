import { useCallback, useEffect, useState, Fragment } from "react";
import { format, parseISO } from "date-fns";
import Link from "next/link";
import fetcher from "src/lib/fetcher";
import { Issues } from "src/lib/types";
import useSWR from "swr";
import Container from "../../layouts/Container";
import Image from "next/image";

export default function Articles() {
  const { data, isValidating } = useSWR<any>("/api/articles", fetcher);
  const [articles, setArticles] = useState([]);

  const filterArticles = (e) => {};
  useEffect(() => {
    if (data) {
      setArticles(data);
    }
  }, [data]);

  return (
    <Container>
      <h1 className="mb-10 bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-center text-3xl font-semibold text-transparent md:text-5xl ">
        Learn \ Unlearn \ Relearn.
      </h1>
      <div className="my-5 text-center">
        <p className="text-md mx-auto mt-2 mb-5 max-w-2xl leading-loose text-neutral-800 dark:text-neutral-500">
          A collection of articles to help you learn, grow, build yourself to
          reach full potential.
        </p>
        {/* <div className=" my-4 mx-auto flex max-w-2xl rounded-full bg-neutral-700/20 px-4  py-2 text-neutral-400"> */}
        <div className=" my-4 mx-auto hidden max-w-2xl rounded-full bg-neutral-700/20 px-4  py-2 text-neutral-400">
          <input
            type={"search"}
            placeholder="Search for inspiration, articles"
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-neutral-600"
            onKeyDown={filterArticles}
          />
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.9999 20.9999L16.6499 16.6499"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <hr className="wave mt-10" />
      </div>
      <div className="mt-10 flex items-center gap-2 text-neutral-600 dark:text-neutral-500">
        {/* <hr className=" w-16 md:inline-block " />
        <span>2022</span> */}
      </div>
      <div className="my-5">
        {isValidating ? (
          <>
            <svg
              className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </>
        ) : (
          articles?.map(
            ({ _id, title, brief, dateAdded, slug, coverImage }) => (
              <div
                key={`${_id}-num`}
                className="mb-4 flex flex-col-reverse md:flex-row"
              >
                <div>
                  <Link
                    className="w-full "
                    href={`https://blog.achuth.dev/${slug}`}
                    aria-label="Introduction to React 2025"
                    rel="noopener noreferrer"
                  >
                    {/* <div className="my-4 w-full  transform py-3 text-sm transition-all hover:scale-[1.01]"> */}
                    <a className="my-5 flex origin-center transform flex-col items-center justify-between text-sm transition-all hover:scale-[1.01] sm:flex-row ">
                      <div className="flex w-full flex-1 flex-col-reverse  gap-4">
                        <div className=" text-xs text-neutral-500 dark:text-neutral-400">
                          {format(parseISO(dateAdded), "dd MMM, yyyy")}
                        </div>
                        <h4 className="flex-1 text-lg font-medium text-neutral-800 hover:text-blue-600 dark:text-neutral-100">
                          {title}
                        </h4>
                      </div>
                      <div className="mt-2 flex w-full items-center justify-between sm:mt-0 sm:w-auto">
                        <p className="ml-[4.5rem] mr-2 text-left text-xs  text-neutral-500 dark:text-neutral-400 sm:ml-0 sm:text-right md:ml-0 md:mb-0">
                          {/* {format(parseISO(issue.sent_at), "dd MMMM, yyyy")} */}
                          {/* {time} */}
                        </p>
                      </div>
                    </a>
                  </Link>
                  <p className="border-b border-b-neutral-800 pb-2 text-sm leading-loose text-neutral-500">
                    {brief}
                  </p>
                </div>
                {/* {coverImage.length > 0 && (
                  <Image
                    className="rounded-md"
                    height={550}
                    width={1080}
                    src={coverImage}
                    alt={title}
                  />
                )} */}
              </div>
            )
          )
        )}
      </div>
      <hr className="wave my-10" />
    </Container>
  );
}
