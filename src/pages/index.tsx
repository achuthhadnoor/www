import React from "react";
import type { InferGetStaticPropsType, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { allBlogs } from ".contentlayer/data";
import { pick } from "@contentlayer/client";
import { parseISO, format } from "date-fns";

import Container from "@/components/Container";
import Newletter from "@/components/Newsletter";
import Subscribe from "@/components/Newsletter/subscribe";
import Social from "@/components/Social";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const HeroSection = () => {
  return (
    <section className="my-16">
      <div className="w-lg flex flex-col dark:text-gray-200 sm:flex-row-reverse">
        <div className="relative mb-5 flex flex-1 sm:mb-0 sm:justify-center">
          <div className="h-[176] w-[176] rotate-6 transform sm:scale-150">
            <Image
              alt="Achuth Hadnoor"
              height={176}
              width={176}
              src="/images/achuth.jpg"
              className="absolute block rounded-lg filter dark:grayscale"
            />
          </div>
        </div>
        <div className="flex:1 ">
          <h1 className="mb-1 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
            Achuth Hadnoor
          </h1>
          <h2 className="mb-4 dark:text-gray-200">
            Developer {"&"} UI/UX Designer
          </h2>
          <div className="mt-5 flex items-center">
            <hr className="w-16" />
            <Social />
          </div>
          <p className="text-md mt-5 max-w-lg flex-wrap leading-loose dark:text-gray-400">
            👋 Hey, I am a
            <a
              target="_blank"
              rel="noreferrer"
              href="https://achuth.dev/dribbble"
              className="ml-1 rounded  p-1 text-red-400 dark:text-purple-400"
            >
              designer
            </a>
            ,
            <a
              target="_blank"
              rel="noreferrer"
              href="https://achuth.dev/github"
              className="ml-1 rounded  p-1 text-red-400 dark:text-purple-400"
            >
              developer
            </a>
            ,<br className="sm:show hidden" />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://achuth.dev/medium"
              className="ml-1 mr-2 rounded  p-1 text-red-400 dark:text-purple-400"
            >
              writer
            </a>
            and
            <a
              target="_blank"
              rel="noreferrer"
              href="https://achuth.dev/producthunt"
              className="ml-1 rounded  p-1 text-red-400 dark:text-purple-400"
            >
              maker
            </a>
            . <br />
            {`I craft digital products that are used by creators. If you're curious, `}
            <Link href={"/about"}>
              <a className="font-semibold transition hover:text-red-400 hover:underline">
                read more.
              </a>
            </Link>
          </p>
          <button className="sign">Achuth</button>
        </div>
      </div>
    </section>
  );
};

const Articles = ({ posts }: any) => {
  return (
    <section
      id="articles"
      className="mt-5 mb-5  border-b border-gray-200 pb-5 dark:border-gray-800"
    >
      <h3 className="heading mt-5 flex-1 text-3xl leading-loose text-gray-600 dark:text-gray-200">
        ARTICLES
      </h3>
      <div className="mb-2 grid gap-4 sm:mx-0 sm:grid-cols-3 ">
        {posts.map(
          (
            { slug, title, summary, publishedAt, tags, image }: any,
            i: number
          ) => (
            <div
              className="my-2 border-b  border-b-gray-200  dark:border-b-gray-800 sm:border-b-0 sm:odd:mr-2 "
              key={`link-${i}`}
            >
              <div className="text-sm ">
                <Link href={`/blog/${slug}`}>
                  <a>
                    <Image
                      src={image}
                      alt="Achuth Hadnoor"
                      height={100}
                      width={176}
                      layout="responsive"
                      className="h-[100] w-[180]"
                    />
                  </a>
                </Link>
                <Link href={`/blog/${slug}`}>
                  <a className="flex ">
                    <h4 className="mt-2 flex-1 py-2 text-sm font-semibold  transition hover:text-red-300 dark:text-gray-500 hover:dark:text-purple-400 ">
                      {title}
                    </h4>
                  </a>
                </Link>
                <div className="flex py-2 text-xs text-gray-500 dark:text-gray-300">
                  <div className="flex flex-1 flex-wrap">
                    {tags &&
                      JSON.parse(tags).map((tag: string, i: number) => (
                        <span
                          key={`tag-key-${i}`}
                          className="mr-2 inline-block cursor-pointer select-none rounded-md bg-gray-200 p-1 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-200"
                        >
                          #{tag}
                        </span>
                      ))}
                  </div>
                  {format(parseISO(publishedAt), "MMMM dd, yyyy")}
                </div>
                {/* <p className="text-gray-300 text-md">{summary}</p> */}
              </div>
            </div>
          )
        )}
      </div>
      <Link href="/posts">
        <a className="text-xs font-semibold">More on blog →</a>
      </Link>
    </section>
  );
};

const Resources = () => {
  return (
    <section id="articles" className="mb-5 pb-5">
      <h3 className="heading mt-5 flex-1 text-3xl leading-loose text-gray-600 dark:text-gray-200">
        RESOURCES
      </h3>
      <p className="max-w-lg text-sm leading-loose text-gray-800 dark:text-gray-300">
        A collection of tools and products that help you to create, launch and
        grow your businesses.{" "}
      </p>
      <div className="mt-5 mb-4 grid grid-cols-1 space-y-2 sm:grid-cols-2 sm:space-x-2 sm:space-y-0">
        <div className="rounded bg-gray-100 transition hover:shadow-lg dark:bg-gray-800">
          <Image
            src="/images/apps/silentshot.png"
            alt="Achuth Hadnoor"
            height={100}
            width={176}
            layout="responsive"
            className="h-[100] w-[180] rounded"
          />
        </div>
        <div className="flex flex-col justify-center space-y-4 rounded-md border p-2 py-10 text-center text-sm dark:border-gray-700 sm:py-5">
          <div className="font-semibold">{`Couldn't find what you need?`}</div>
          <p className="text-xs">
            Suggest a blog, resource, tutorial or a project
          </p>
          <div className="my-4">
            <button className="mt-2 rounded-full bg-gradient-to-r from-yellow-400 to-pink-500 px-4 py-2 text-gray-50  dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500 sm:mt-0">
              Request Now 👉
            </button>
          </div>
        </div>
      </div>
      <Link href="/posts">
        <a className="text-xs font-semibold">More on blog →</a>
      </Link>
    </section>
  );
};

const SelectedWork = () => {
  return (
    <section id="articles" className="mb-5 pb-5">
      <h3 className="heading mt-5 flex-1 text-3xl leading-loose text-gray-600 dark:text-gray-200">
        SELECTED WORK
      </h3>
      <p className="max-w-lg text-sm leading-loose text-gray-800 dark:text-gray-300">
        {`I'm a developer by day, and I like to keep challenging myself with side projects to stay creative.`}
      </p>
      <div className="work-items mt-5 grid grid-cols-1 gap-4 ">
        <div className="work-item flex flex-col-reverse rounded-md   border dark:border-gray-700 sm:flex-row">
          <div className="flex flex-1 flex-col p-4">
            <div className="text-xs text-gray-300 dark:text-gray-500">
              Web/MacOs Application
            </div>
            <h3 className="max-w-lg py-2 text-sm font-semibold leading-loose">
              I create Apps for Web and MacOs with beautiful interfaces for
              better User Experience.{" "}
            </h3>
            <span className="flex-1" />
            <span className="text-xs">See my work →</span>
          </div>
          {/* <div className="h-28">
            image
          </div> */}
        </div>
        <div className="work-item flex flex-col-reverse rounded-md   border dark:border-gray-700 sm:flex-row">
          <div className="flex-1 p-4">
            <div className="text-xs text-gray-300 dark:text-gray-500">
              Web Design
            </div>
            <h3 className="max-w-lg py-2 text-sm font-semibold leading-loose">
              I design interfaces for digital products.{" "}
            </h3>
            <span className="text-xs">See my work →</span>
          </div>
          {/* <div className="h-28">
            image
          </div> */}
        </div>
        <div className="work-item flex flex-col-reverse rounded-md   border dark:border-gray-700 sm:flex-row">
          <div className="flex-1 p-4">
            <div className="text-xs text-gray-300 dark:text-gray-500">
              Nocode Applications
            </div>
            <h3 className="max-w-lg py-2 text-sm font-semibold leading-loose">
              I create No code hyper apps using Webflow, Airtable, Glide etc.{" "}
            </h3>
            <span className="text-xs">See my work →</span>
          </div>
          {/* <div className="h-28">
            image
          </div> */}
        </div>
        <div className="work-item flex flex-col-reverse rounded-md   border dark:border-gray-700 sm:flex-row">
          <div className="flex-1 p-4">
            <div className="text-xs text-gray-300 dark:text-gray-500">
              Notion Templates
            </div>
            <h3 className="max-w-lg py-2 text-sm font-semibold leading-loose">
              I create templates for notion to manage your life. Few usecases
              include daily planer, resume template, Personal Journal etc.
            </h3>
            <span className="text-xs">See my work →</span>
          </div>
          {/* <div className="h-28">
            image
          </div> */}
        </div>
        <div className="work-item flex flex-col-reverse rounded-md   border dark:border-gray-700 sm:flex-row">
          <div className="flex-1 p-4">
            <div className="text-xs text-gray-300 dark:text-gray-500">
              Consulting
            </div>
            <h3 className="max-w-lg py-2 text-sm font-semibold leading-loose">
              I help you to understand idea, requirements and advice on building
              your first Minimum Viable Product.
            </h3>
            <span className="text-xs">Contact me →</span>
          </div>
          {/* <div className="h-28">
            image
          </div> */}
        </div>
      </div>
    </section>
  );
};

const NewsLetterFull = () => {
  return (
    <section className="mt-10 py-4" id="newsletter">
      <Newletter />
    </section>
  );
};

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <Container>
      <HeroSection />
      <Articles posts={posts} />
      <Subscribe />
      <Resources />
      <SelectedWork />
      <NewsLetterFull />
    </Container>
  );
};

export const getStaticProps = async () => {
  const posts = allBlogs.map((post) =>
    pick(post, ["slug", "title", "summary", "publishedAt", "image", "tags"])
  );

  const sortedPosts = posts.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );

  return { props: { posts: sortedPosts.slice(0, 3) } };
};

export default Home;
