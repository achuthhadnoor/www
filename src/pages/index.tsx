import React, { useEffect, useState } from "react";
import Social from "../components/Social";
import Container from "../layouts/Container";
import useSWR from "swr";
import { Issues } from "../lib/types";
import fetcher from "../lib/fetcher";
import { format, parseISO } from "date-fns";
import Link from "next/link";
import Image from "next/image";
import NewsletterForm from "src/components/Newsletter";
import { allBlogs } from "contentlayer/generated";
import { pick } from "contentlayer/client";
import * as Icons from "src/components/icons";

export default function Home() {
  // const { data } = useSWR<Issues>("/api/issues", fetcher);
  const { data, isValidating } = useSWR<any>("/api/articles", fetcher);
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    if (data) {
      setArticles(data);
    }
  }, [data]);
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
          written ${articles?.length} articles on this site.`}
      </p>
      {/* <div className="mt-10 flex items-center gap-2 text-neutral-600 dark:text-neutral-500">
        <hr className=" w-16 md:inline-block " />
        <span>2022</span>
      </div> */}
      <div className="my-5 flex-1">
        {isValidating ? (
          <Icons.Loader />
        ) : (
          articles?.map(
            ({ _id, title, dateAdded, slug }, i) =>
              i < 3 && (
                <Link
                  className="w-full "
                  href={`https://blog.achuth.dev/${slug}`}
                  aria-label="Introduction to React 2025"
                  rel="noopener noreferrer"
                  key={`${_id}-num`}
                >
                  {/* <div className="my-4 w-full  transform py-3 text-sm transition-all hover:scale-[1.01]"> */}
                  <a className="my-5 flex flex-col items-center justify-between text-sm transition-all hover:scale-[1.01] sm:flex-row">
                    <div className="flex w-full flex-1 items-center gap-4">
                      {/* <div className=" text-neutral-500 dark:text-neutral-400">
                    {format(parseISO(dateAdded), "dd MMM")}
                  </div> */}
                      <h4 className="text-ld flex-1 font-medium text-neutral-800 hover:text-blue-600 dark:text-neutral-100">
                        {title}
                      </h4>
                    </div>
                    <div className="mt-2 flex w-full items-center justify-between sm:mt-0 sm:w-auto">
                      <p className="ml-[4.5rem] mr-2 text-left text-xs  text-neutral-500 dark:text-neutral-400 sm:ml-0 sm:text-right md:ml-0 md:mb-0">
                        {format(parseISO(dateAdded), "dd MMMM, yyyy")}
                        {/* {readingTime.text} */}
                      </p>
                    </div>
                  </a>
                </Link>
              )
          )
        )}
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

  const Resources = () => (
    <div className="mb-10 flex flex-col gap-5">
      <h2 className="text-2xl">Resources</h2>
      <p className="mt-5 text-sm leading-loose text-neutral-700 dark:text-neutral-500">
        - A collection of helfull links, blogs, articles, digital products,
        wallpapers and more..
      </p>
      <div className="col-span-1 mt-5 grid gap-5 md:grid-cols-3 ">
        <div className="rounded-md bg-neutral-200 p-2 text-sm dark:bg-neutral-800">
          <div className="fon-bold py-2 text-lg">Illustration pack</div>
          <span className="text-blue-500">Figma</span>
          <p className="my-2">
            - A collection of minimal illustrations for your next project
          </p>
          <div className="flex items-center space-x-2 py-2 text-neutral-700 dark:text-neutral-500">
            <span>22</span>
            <span>
              <Icons.Views />
            </span>
            <span>15</span>
            <span>
              <Icons.Download />
            </span>
          </div>
        </div>
        <div className="rounded-md bg-neutral-200 p-2 text-sm dark:bg-neutral-800">
          <div className="fon-bold py-2 text-lg">Illustration pack</div>
          <span className="text-blue-500">Figma</span>
          <p className="my-2">
            - A collection of minimal illustrations for your next project
          </p>
          <div className="flex items-center space-x-2 py-2 text-neutral-700 dark:text-neutral-500">
            <span>22</span>
            <span>
              <Icons.Views />
            </span>
            <span>15</span>
            <span>
              <Icons.Download />
            </span>
          </div>
        </div>
        <div className="rounded-md bg-neutral-200 p-2 text-sm dark:bg-neutral-800">
          <div className="fon-bold py-2 text-lg">Illustration pack</div>
          <span className="text-blue-500">Figma</span>
          <p className="my-2">
            - A collection of minimal illustrations for your next project
          </p>
          <div className="flex items-center space-x-2 py-2 text-neutral-700 dark:text-neutral-500">
            <span>22</span>
            <span>
              <Icons.Views />
            </span>
            <span>15</span>
            <span>
              <Icons.Download />
            </span>
          </div>
        </div>
        <div className="rounded-md bg-neutral-200 p-2 text-sm dark:bg-neutral-800">
          <div className="fon-bold py-2 text-lg">Illustration pack</div>
          <span className="text-blue-500">Figma</span>
          <p className="my-2">
            - A collection of minimal illustrations for your next project
          </p>
          <div className="flex items-center space-x-2 py-2 text-neutral-700 dark:text-neutral-500">
            <span>22</span>
            <span>
              <Icons.Views />
            </span>
            <span>15</span>
            <span>
              <Icons.Download />
            </span>
          </div>
        </div>
      </div>
      <hr className="wave my-20" />
    </div>
  );

  return (
    <Container>
      <HeroSection />
      <Articles />
      <Projects />
      <Resources />
      <NewsletterForm showIssues={true} />
      <hr className="wave my-20" />
    </Container>
  );
}

export async function getStaticProps({ params }: any) {
  //   const tweets = await getTweets(post.tweetIds);
  const posts = allBlogs
    .filter((postItem) =>
      pick(postItem, [
        "slug",
        "title",
        "summary",
        "publishedAt",
        "tags",
        "image",
        "readingTime",
        "_id",
      ])
    )
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );

  return { props: { posts: posts.slice(0, 3) } };
}
