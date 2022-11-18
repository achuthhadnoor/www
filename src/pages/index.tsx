import React from "react";
import Social from "../components/Social";
import Container from "../layouts/Container";
import useSWR from "swr";
import { Issues } from "../lib/types";
import fetcher from "../lib/fetcher";
import { format, parseISO } from "date-fns";
import Link from "next/link";
import Image from "next/image";
import NewsletterForm from "src/components/Newsletter";

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
    {
      id: "4",
      title: "ES6 Cheatsheet -- let and const.",
      tags: ["personal", "productivity"],
      date: "13 Jan",
      year: "2022",
      time: "2min 5s",
      summary: "Variables scode was defined global by default before ES6.",
    },
    {
      id: "5",
      title: "ES6 Cheatsheet -- Promises.",
      tags: ["developement", "web"],
      date: "17 Sep",
      year: "2022",
      time: "1min 5s",
      summary: "Promises are the feature added in ES6(2015).",
    },
  ];

  const HeroSection = () => (
    <div className="mb-10 md:mt-20 md:mb-24">
      <div className="flex flex-col md:flex-row-reverse">
        <div className="flex items-center px-4 md:justify-center md:px-5">
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
          <h1 className="my-4 text-3xl font-semibold text-neutral-800 dark:text-neutral-300 md:text-5xl">
            Achuth Hadnoor
          </h1>
          <h2 className="text-lg md:text-xl">Developer, UI / UX Designer</h2>
          <div className="my-10 block md:hidden">
            <Social />
          </div>
          <p className="text-md mt-5 leading-loose text-neutral-700 dark:text-neutral-500 ">
            👋 Welcome to my little slice of the internet— I talk about Design
            and products development, I hope you find something useful here.
          </p>
          <p className="text-md my-5 leading-loose text-neutral-700 dark:text-neutral-500 ">
            Read more{" "}
            <Link href="/about">
              <a className="underline">about me</a>
            </Link>{" "}
            or{" "}
            <Link href="/contact">
              <a className="underline">work with me</a>
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
  );

  const Articles = () => (
    <div id="articles" className="mb-10 flex flex-col gap-2 ">
      <h2 className="py-2 text-2xl">Recent Articles</h2>
      <p className="text-sm leading-loose text-neutral-800  dark:text-neutral-400">
        {`A collection of thoughts, experiments, technology, design and more. In total, I've
          written ${articles.length} articles on this site.`}
      </p>
      {/* <div className="mt-10 flex items-center gap-2 text-neutral-600 dark:text-neutral-500">
        <hr className=" w-16 md:inline-block " />
        <span>2022</span>
      </div> */}
      <div className="my-5 flex-1">
        {articles.map(({ id, title, date, time }) => (
          <Link
            className="w-full "
            href={"/"}
            aria-label="Introduction to React 2025"
            rel="noopener noreferrer"
            key={`${id}-num`}
          >
            {/* <div className="my-4 w-full  transform py-3 text-sm transition-all hover:scale-[1.01]"> */}
            <a className="my-5 flex flex-col items-center justify-between text-sm transition-all hover:scale-[1.01] sm:flex-row">
              <div className="flex w-full flex-1 items-center gap-4">
                <div className=" text-neutral-500 dark:text-neutral-400">
                  {date}
                </div>
                <h4 className="text-ld flex-1 font-medium text-neutral-800 hover:text-blue-600 dark:text-neutral-100">
                  {title}
                </h4>
              </div>
              <div className="mt-2 flex w-full items-center justify-between sm:mt-0 sm:w-auto">
                <p className="ml-[4.5rem] mr-2 text-left text-xs  text-neutral-500 dark:text-neutral-400 sm:ml-0 sm:text-right md:ml-0 md:mb-0">
                  {/* {format(parseISO(issue.sent_at), "dd MMMM, yyyy")} */}
                  {time}
                </p>
              </div>
            </a>
          </Link>
        ))}
      </div>
      <Link href="/articles">
        <a className="text-sm text-neutral-500">View all {"->"}</a>
      </Link>
      <hr className="wave my-20" />
    </div>
  );

  const Projects = () => (
    <div id="projects" className="mb-10 flex flex-col gap-2">
      <h2 className="py-2 text-2xl">Recent Projects</h2>
      <p className="text-sm text-neutral-800 dark:text-neutral-400">
        Few projects that I currently work on.
      </p>
      <div className="flex flex-col gap-5 py-5">
        {projects.map(({ url, title, id, description }) => (
          <a
            href={`/projects#${id}`}
            rel="noreferrer"
            // target="_blank"
            key={id}
          >
            <div
            // className="p-[1px] bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded"
            >
              <div className="flex flex-col gap-2 rounded bg-neutral-200/40   p-4 hover:bg-neutral-200/70 dark:bg-neutral-800/40 dark:hover:bg-neutral-800/70">
                <h3 className="text-xl">{title}</h3>
                <p className="py-2 text-sm text-neutral-600 dark:text-neutral-400 ">
                  {description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
      <Link href="/projects">
        <a className="text-sm text-neutral-500">View all {"->"}</a>
      </Link>
      <hr className="wave my-20" />
    </div>
  );

  // const Resources = () => (
  //   <div className="mb-10 flex flex-col gap-5">
  //     <h2 className="text-2xl">Resources</h2>
  //     <p className="mt-5 text-sm leading-loose text-neutral-700 dark:text-neutral-500">
  //       - A collection of helfull links, blogs, articles, digital products,
  //       wallpapers and more..
  //     </p>
  //     <div className="col-span-1 mt-5 grid gap-5 md:grid-cols-3 ">
  //       <div className="rounded-md bg-neutral-200 p-2 text-sm dark:bg-neutral-800">
  //         <div className="fon-bold py-2 text-lg">Illustration pack</div>
  //         <span className="text-blue-500">Figma</span>
  //         <p className="my-2">
  //           - A collection of minimal illustrations for your next project
  //         </p>
  //         <div className="flex items-center space-x-2 py-2 text-neutral-700 dark:text-neutral-500">
  //           <span>22</span>
  //           <span>
  //             <svg
  //               width="24"
  //               height="24"
  //               viewBox="0 0 24 24"
  //               fill="none"
  //               xmlns="http://www.w3.org/2000/svg"
  //             >
  //               <path
  //                 d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
  //                 stroke="#5B5B5B"
  //                 strokeWidth="1.5"
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //               />
  //               <path
  //                 d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
  //                 stroke="#5B5B5B"
  //                 strokeWidth="1.5"
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //               />
  //             </svg>
  //           </span>
  //           <span>15</span>
  //           <span>
  //             <svg
  //               width="24"
  //               height="24"
  //               viewBox="0 0 24 24"
  //               fill="none"
  //               xmlns="http://www.w3.org/2000/svg"
  //             >
  //               <path
  //                 d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
  //                 stroke="#5B5B5B"
  //                 strokeWidth="1.5"
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //               />
  //               <path
  //                 d="M7 10L12 15L17 10"
  //                 stroke="#5B5B5B"
  //                 strokeWidth="1.5"
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //               />
  //               <path
  //                 d="M12 15V3"
  //                 stroke="#5B5B5B"
  //                 strokeWidth="1.5"
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //               />
  //             </svg>
  //           </span>
  //         </div>
  //       </div>
  //       <div className="rounded-md bg-neutral-200 p-2 text-sm dark:bg-neutral-800">
  //         <div className="fon-bold py-2 text-lg">Illustration pack</div>
  //         <span className="text-blue-500">Figma</span>
  //         <p className="my-2">
  //           - A collection of minimal illustrations for your next project
  //         </p>
  //         <div className="flex items-center space-x-2 py-2 text-neutral-700 dark:text-neutral-500">
  //           <span>22</span>
  //           <span>
  //             <svg
  //               width="24"
  //               height="24"
  //               viewBox="0 0 24 24"
  //               fill="none"
  //               xmlns="http://www.w3.org/2000/svg"
  //             >
  //               <path
  //                 d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
  //                 stroke="#5B5B5B"
  //                 strokeWidth="1.5"
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //               />
  //               <path
  //                 d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
  //                 stroke="#5B5B5B"
  //                 strokeWidth="1.5"
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //               />
  //             </svg>
  //           </span>
  //           <span>15</span>
  //           <span>
  //             <svg
  //               width="24"
  //               height="24"
  //               viewBox="0 0 24 24"
  //               fill="none"
  //               xmlns="http://www.w3.org/2000/svg"
  //             >
  //               <path
  //                 d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
  //                 stroke="#5B5B5B"
  //                 strokeWidth="1.5"
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //               />
  //               <path
  //                 d="M7 10L12 15L17 10"
  //                 stroke="#5B5B5B"
  //                 strokeWidth="1.5"
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //               />
  //               <path
  //                 d="M12 15V3"
  //                 stroke="#5B5B5B"
  //                 strokeWidth="1.5"
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //               />
  //             </svg>
  //           </span>
  //         </div>
  //       </div>
  //       <div className="rounded-md bg-neutral-200 p-2 text-sm dark:bg-neutral-800">
  //         <div className="fon-bold py-2 text-lg">Illustration pack</div>
  //         <span className="text-blue-500">Figma</span>
  //         <p className="my-2">
  //           - A collection of minimal illustrations for your next project
  //         </p>
  //         <div className="flex items-center space-x-2 py-2 text-neutral-700 dark:text-neutral-500">
  //           <span>22</span>
  //           <span>
  //             <svg
  //               width="24"
  //               height="24"
  //               viewBox="0 0 24 24"
  //               fill="none"
  //               xmlns="http://www.w3.org/2000/svg"
  //             >
  //               <path
  //                 d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
  //                 stroke="#5B5B5B"
  //                 strokeWidth="1.5"
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //               />
  //               <path
  //                 d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
  //                 stroke="#5B5B5B"
  //                 strokeWidth="1.5"
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //               />
  //             </svg>
  //           </span>
  //           <span>15</span>
  //           <span>
  //             <svg
  //               width="24"
  //               height="24"
  //               viewBox="0 0 24 24"
  //               fill="none"
  //               xmlns="http://www.w3.org/2000/svg"
  //             >
  //               <path
  //                 d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
  //                 stroke="#5B5B5B"
  //                 strokeWidth="1.5"
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //               />
  //               <path
  //                 d="M7 10L12 15L17 10"
  //                 stroke="#5B5B5B"
  //                 strokeWidth="1.5"
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //               />
  //               <path
  //                 d="M12 15V3"
  //                 stroke="#5B5B5B"
  //                 strokeWidth="1.5"
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //               />
  //             </svg>
  //           </span>
  //         </div>
  //       </div>
  //       <div className="rounded-md bg-neutral-200 p-2 text-sm dark:bg-neutral-800">
  //         <div className="fon-bold py-2 text-lg">Illustration pack</div>
  //         <span className="text-blue-500">Figma</span>
  //         <p className="my-2">
  //           - A collection of minimal illustrations for your next project
  //         </p>
  //         <div className="flex items-center space-x-2 py-2 text-neutral-700 dark:text-neutral-500">
  //           <span>22</span>
  //           <span>
  //             <svg
  //               width="24"
  //               height="24"
  //               viewBox="0 0 24 24"
  //               fill="none"
  //               xmlns="http://www.w3.org/2000/svg"
  //             >
  //               <path
  //                 d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
  //                 stroke="#5B5B5B"
  //                 strokeWidth="1.5"
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //               />
  //               <path
  //                 d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
  //                 stroke="#5B5B5B"
  //                 strokeWidth="1.5"
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //               />
  //             </svg>
  //           </span>
  //           <span>15</span>
  //           <span>
  //             <svg
  //               width="24"
  //               height="24"
  //               viewBox="0 0 24 24"
  //               fill="none"
  //               xmlns="http://www.w3.org/2000/svg"
  //             >
  //               <path
  //                 d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
  //                 stroke="#5B5B5B"
  //                 strokeWidth="1.5"
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //               />
  //               <path
  //                 d="M7 10L12 15L17 10"
  //                 stroke="#5B5B5B"
  //                 strokeWidth="1.5"
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //               />
  //               <path
  //                 d="M12 15V3"
  //                 stroke="#5B5B5B"
  //                 strokeWidth="1.5"
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //               />
  //             </svg>
  //           </span>
  //         </div>
  //       </div>
  //     </div>
  //     <hr className="wave my-20" />
  //   </div>
  // );
  return (
    <Container>
      <HeroSection />
      <Articles />
      <Projects />
      {/* <Resources /> */}
      <NewsletterForm showIssues={true} />
      <hr className="wave my-20" />
    </Container>
  );
}
