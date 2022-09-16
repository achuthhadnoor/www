import React from "react";
import Social from "../components/Social";
import Container from "../layouts/Container";
import useSWR from "swr";
import { Issues } from "../lib/types";
import fetcher from "../lib/fetcher";
import { format, parseISO } from "date-fns";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const { data } = useSWR<Issues>("/api/issues", fetcher);
  const projects = [
    {
      id: "lapse",
      title: "Lapse",
      description: "A simple app to record screen in time-lapse.",
      url: "getlapseapp.com",
      image: "/assets/img/lapse.png",
    },
    {
      id: "focus",
      title: "Focus",
      description: "Take timeoff from screen to focus",
      url: "focus.achuth.dev",
      image: "/assets/img/focus.png",
    },
    {
      id: "snip",
      title: "snip",
      description: "Single line code snippet manager on menubar",
      url: "snip.netlify.app",
      image: "/assets/img/snip.png",
    },
    {
      id: "snipnote",
      title: "snipnote",
      description: "Simple note taking on menubar",
      url: "snipnote.achuth.dev",
      image: "/assets/img/snipnote.png",
    },
  ];
  const articles = [
    {
      id: "1",
      title: "Production ready electron app setup with ReactJS",
      tags: ["development", "web", "desktop"],
      date: "28 Apr",
      year: "2022",
      time: "2min 5s",
      summary:
        "If you are a designer and is looking for a perfect language to use for mobile app development then flutter is a saviour.",
    },
    {
      id: "2",
      title: "Automate your workflows to increase productivity",
      tags: ["personal"],
      date: "21 Feb",
      year: "2022",
      time: "2min 5s",
      summary: "Highlights and reflections on 2019 and a look forward to 2020.",
    },
    {
      id: "3",
      title: "Time-boxing model: A complete guide to time management",
      tags: ["personal", "productivity"],
      date: "13 Jan",
      year: "2022",
      time: "2min 5s",
      summary:
        "Time boxing is a simple yet powerful technique of time management,That helps you to have control over your time and improves your productivity.This helpful technique is for practising self explain…",
    },
  ];
  return (
    <Container>
      <div className="mb-10 md:mt-20 md:mb-24">
        <div className="flex flex-col md:flex-row-reverse">
          <div className="flex items-center md:justify-center px-4 md:px-5">
            <div className="top-36 h-[240] w-[240] rotate-6 transform ">
              <Image
                alt="Achuth Hadnoor"
                height={240}
                width={240}
                src="/images/achuth.jpg"
                className="absolute block rounded-lg filter dark:grayscale "
              />
            </div>
          </div>
          <div className="flex-1">
            <h1 className="font-semibold my-4 dark:text-neutral-300 text-neutral-800 md:text-5xl text-3xl">
              Achuth Hadnoor
            </h1>
            <h2 className="text-lg md:text-xl">Developer, UI / UX Designer</h2>
            <div className="my-10 md:hidden block">
              <Social />
            </div>
            <p className="mt-5 text-md leading-loose text-neutral-700 dark:text-neutral-500 ">
              👋 Welcome to my little slice of the internet — I hope you find
              something useful here.
            </p>
            <p className="my-5 text-md leading-loose text-neutral-700 dark:text-neutral-500 ">
              Read more{" "}
              <Link href="/about">
                <a className="underline">about me</a>
              </Link>
              .
            </p>
            <p className=" text-md leading-loose text-neutral-700 dark:text-neutral-500 ">
              Thanks for dropping by
            </p>
            <p className=" text-md leading-loose text-neutral-700 dark:text-neutral-500 ">
              Achuth
            </p>
            <div className="my-10 hidden md:block">
              <Social />
            </div>
          </div>
        </div>
        <hr className="wave my-20" />
      </div>
      <div id="articles" className="mb-10 flex flex-col gap-2 ">
        <h2 className="text-2xl py-2">Recent Articles</h2>
        <p className="text-sm text-neutral-800 dark:text-neutral-400  leading-loose">
          {`I write mostly about web development and tech careers. In total, I've
          written ${articles.length} articles on this site.`}
        </p>
        <div>
          <div className="flex items-center gap-2 mt-10 dark:text-neutral-500 text-neutral-600">
            <hr className=" w-16 md:inline-block " />
            <span>2022</span>
          </div>
          <div className="my-5 max-w-2xl">
            {articles.map(({ id, title, date, time }) => (
              <Link
                className="w-full"
                href={"/"}
                aria-label="Introduction to React 2025"
                rel="noopener noreferrer"
                key={`${id}-num`}
              >
                <div className="w-full transform  py-3 my-4 text-sm transition-all hover:scale-[1.01]">
                  <div className="flex flex-col items-center justify-between sm:flex-row ">
                    <div className="flex items-center">
                      <div className="text-neutral-500 dark:text-neutral-400">
                        {date}
                      </div>
                      <h4 className="text-ld w-full font-medium text-neutral-800 dark:text-neutral-100 hover:text-blue-600">
                        {title}
                      </h4>
                    </div>
                    <div className="mt-2 flex w-full items-center justify-between sm:mt-0 sm:w-auto">
                      <p className="mr-2 ml-10 text-xs  text-left text-neutral-500 dark:text-neutral-400 sm:ml-0 sm:text-right md:mb-0">
                        {/* {format(parseISO(issue.sent_at), "dd MMMM, yyyy")} */}
                        {time}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <hr className="wave my-20" />
      </div>
      <div id="projects" className="mb-10 flex flex-col gap-2">
        <h2 className="text-2xl py-2">Recent Projects</h2>
        <p className="text-sm text-neutral-800 dark:text-neutral-400">
          Few projects that I currently work on.
        </p>
        <div className="flex flex-col py-5 gap-5">
          {projects.map(({ url, title, id, description }) => (
            <a
              href={`https://${url}/`}
              rel="noreferrer"
              target="_blank"
              key={id}
            >
              <div
              // className="p-[1px] bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded"
              >
                <div className="p-4 dark:bg-neutral-800/40 dark:hover:bg-neutral-800/70 bg-neutral-200/40 hover:bg-neutral-200/70   rounded flex flex-col gap-2">
                  <h3 className="text-xl">{title}</h3>
                  <p className="text-sm py-2 dark:text-neutral-400 text-neutral-600 ">
                    {description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
        <hr className="wave my-20" />
      </div>
      <div id="newsletter">
        <h2 className="text-2xl">The newsletter</h2>
        <p className="mt-5 text-sm leading-loose text-neutral-700 dark:text-neutral-500">
          1,000+ peeps subscribe to my newsletter. You’ll receive an issue per
          month. Topics include design, marketing, solopreneurship, and personal
          development.
        </p>
        <div className="subscribe-form flex flex-col md:flex-row gap-2 max-w-md py-5">
          <input
            className="outline-none rounded-lg px-2 bg-neutral-200 dark:bg-neutral-800 flex-1 dark:placeholder-neutral-600 placeholder-neutral-400"
            type="email"
            placeholder="join@email.address"
            required={true}
          />
          <button
            type="submit"
            className="bg-blue-600 dark:bg-blue-800 text-neutral-100 px-2 py-1 rounded "
            // className="px-4 py-2 rounded-md bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
          >
            subscribe
          </button>
        </div>
        <div className="text-md  max-w-2xl">
          {data?.issues?.map(
            (issue, index) =>
              index < 3 && (
                <a
                  className="w-full"
                  href={issue.url}
                  aria-label="Introduction to React 2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  key={`issue-num ${index}`}
                >
                  <div className="w-full transform border-b border-neutral-200 py-3 text-sm transition-all hover:scale-[1.01] dark:border-neutral-700">
                    <div className="flex flex-col items-baseline justify-between sm:flex-row ">
                      <div className="flex items-center">
                        <div className="mr-6 text-left text-neutral-500 dark:text-neutral-400">
                          0{index + 1}
                        </div>
                        <h4 className="text-ld w-full font-medium text-neutral-800 dark:text-neutral-100 hover:text-blue-600">
                          {issue.title}
                        </h4>
                      </div>
                      <div className="mt-2 flex w-full items-center justify-between sm:mt-0 sm:w-auto">
                        <p className="mr-2 ml-10  text-left text-neutral-500 dark:text-neutral-400 sm:ml-0 sm:text-right md:mb-0">
                          {format(parseISO(issue.sent_at), "dd MMMM, yyyy")}
                        </p>
                        {/* <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-neutral-500 dark:text-neutral-100"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clip-rule="evenodd"
                          ></path>
                        </svg> */}
                      </div>
                    </div>
                  </div>
                </a>
              )
          )}
        </div>
        {/* <hr className="wave my-20" /> */}
      </div>
      <hr className="wave my-20" />
    </Container>
  );
}
