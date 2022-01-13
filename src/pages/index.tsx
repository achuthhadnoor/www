import React from "react";
import type { InferGetStaticPropsType, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { allBlogs } from ".contentlayer/data";
import { pick } from "@contentlayer/client";
import { parseISO, format } from "date-fns";

import Container from "@/components/Container";
import Newletter from "@/components/Newletter";
import Social from "@/components/Social";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const HeroSection = () => {
  return (
    <section className="my-16">
      <div className="flex flex-col sm:flex-row-reverse w-lg dark:text-gray-200">
        <div className="relative flex flex-1 sm:justify-center mb-5 sm:mb-0">
          <div className="h-[176] w-[176] sm:scale-150 transform rotate-6">
            <Image
              alt="Achuth Hadnoor"
              height={176}
              width={176}
              src="/images/achuth.jpg"
              className="rounded-lg filter block absolute dark:grayscale"
            />
          </div>
        </div>
        <div className="flex:1 ">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
            Achuth Hadnoor
          </h1>
          <h2 className="dark:text-gray-200 mb-4">
            Developer {"&"} UI/UX Designer
          </h2>
          <div className="mt-5 flex items-center">
            <hr className="w-16" />
            <Social />
          </div>
          <p className="text-md max-w-lg leading-loose dark:text-gray-400 flex-wrap mt-5">
            👋 Hey, I am a
            <a
              target="_blank"
              rel="noreferrer"
              href="https://achuth.dev/dribbble"
              className="p-1 ml-1  rounded text-red-400 dark:text-purple-400"
            >
              designer
            </a>
            ,
            <a
              target="_blank"
              rel="noreferrer"
              href="https://achuth.dev/github"
              className="p-1 ml-1  rounded text-red-400 dark:text-purple-400"
            >
              developer
            </a>
            ,<br className="sm:show hidden" />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://achuth.dev/medium"
              className="p-1 ml-1 mr-2  rounded text-red-400 dark:text-purple-400"
            >
              writer
            </a>
            and
            <a
              target="_blank"
              rel="noreferrer"
              href="https://achuth.dev/producthunt"
              className="p-1 ml-1  rounded text-red-400 dark:text-purple-400"
            >
              maker
            </a>
            . <br />
            {`I craft digital products that are used by creators. If you're curious, `}
            <Link href={"/about"}>
              <a className="font-semibold hover:underline hover:text-red-400 transition">
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
      className="mt-5 mb-5  border-b border-gray-200 dark:border-gray-800 pb-5"
    >
      <h3 className="mt-5 flex-1 text-gray-600 dark:text-gray-200 text-3xl heading leading-loose">
        ARTICLES
      </h3>
      <div className="grid sm:grid-cols-3 sm:mx-0 mb-2 gap-4 ">
        {posts.map(
          (
            { slug, title, summary, publishedAt, tags, image }: any,
            i: number
          ) => (
            <div
              className="my-2 sm:odd:mr-2  sm:border-b-0  border-b border-b-gray-200 dark:border-b-gray-800 "
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
                    <h4 className="flex-1 mt-2 py-2 font-semibold text-sm  dark:text-gray-500 hover:dark:text-purple-400 hover:text-red-300 transition ">
                      {title}
                    </h4>
                  </a>
                </Link>
                <div className="text-xs flex py-2 text-gray-500 dark:text-gray-300">
                  <div className="flex flex-1 flex-wrap">
                    {tags &&
                      JSON.parse(tags).map((tag: string, i: number) => (
                        <span
                          key={`tag-key-${i}`}
                          className="cursor-pointer select-none p-1 mr-2 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-200 text-xs inline-block"
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
        <a className="font-semibold text-xs">More on blog →</a>
      </Link>
    </section>
  );
};

const NewsLetter = () => {
  return (
    <section id="articles" className="mb-5 pb-5">
      <h3 className="mt-5 flex-1 text-gray-600 dark:text-gray-200 text-3xl heading leading-loose">
        THE NEWSLETTER
      </h3>
      <p className="text-sm max-w-lg leading-loose mb-4 text-gray-700 dark:text-gray-400">
        {` 1,000+ peeps subscribe to my newsletter. You’ll receive 1 issue per month. Topics include design, solopreneurship, and personal development.`}
      </p>
      <div className="flex flex-col sm:flex-row gap-2 ">
        <input
          type="email"
          className="flex-1 outline-none text-xs px-4 py-2 border border-gray-300 dark:bg-gray-900 rounded-full max-w-md"
          placeholder="join@email.address"
        />
        <button className="mt-2 sm:mt-0 px-4 py-2 text-gray-50 rounded-full bg-gradient-to-r from-yellow-400  to-pink-500 dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500">
          Subscribe ⚡️
        </button>
      </div>
    </section>
  );
};

const Resources = () => {
  return (
    <section id="articles" className="mb-5 pb-5">
      <h3 className="mt-5 flex-1 text-gray-600 dark:text-gray-200 text-3xl heading leading-loose">
        RESOURCES
      </h3>
      <p className="text-sm text-gray-800 dark:text-gray-300 max-w-lg leading-loose">
        A collection of tools and products that help you to create, launch and
        grow your businesses.{" "}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 sm:space-x-2 space-y-2 sm:space-y-0 mb-4">
        <div className="bg-gray-100 dark:bg-gray-800 hover:shadow-lg transition rounded">
          <Image
            src="/images/apps/silentshot.png"
            alt="Achuth Hadnoor"
            height={100}
            width={176}
            layout="responsive"
            className="h-[100] w-[180] rounded"
          />
        </div>
        <div className="text-sm py-10 sm:py-5 border dark:border-gray-700 rounded-md p-2 text-center justify-center flex flex-col space-y-4">
          <div className="font-semibold">{`Couldn't find what you need?`}</div>
          <p className="text-xs">
            Suggest a blog, resource, tutorial or a project
          </p>
          <div className="my-4">
            <button className="mt-2 sm:mt-0 px-4 py-2 text-gray-50 rounded-full bg-gradient-to-r from-yellow-400  to-pink-500 dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500">
              Request Now 👉
            </button>
          </div>
        </div>
      </div>
      <Link href="/posts">
        <a className="font-semibold text-xs">More on blog →</a>
      </Link>
    </section>
  );
};

const SelectedWork = () => {
  return (
    <section id="articles" className="mb-5 pb-5">
      <h3 className="mt-5 flex-1 text-gray-600 dark:text-gray-200 text-3xl heading leading-loose">
        SELECTED WORK
      </h3>
      <p className="text-sm text-gray-800 dark:text-gray-300 max-w-lg leading-loose">
        {`I'm a developer by day, and I like to keep challenging myself with side projects to stay creative.`}
      </p>
      <div className="work-items mt-5 grid grid-cols-1 gap-4 ">
        <div className="work-item flex flex-col-reverse sm:flex-row   border dark:border-gray-700 rounded-md">
          <div className="flex-1 p-4 flex flex-col">
            <div className="text-xs text-gray-300 dark:text-gray-500">
              Web/MacOs Application
            </div>
            <h3 className="text-sm font-semibold py-2 max-w-lg leading-loose">
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
        <div className="work-item flex flex-col-reverse sm:flex-row   border dark:border-gray-700 rounded-md">
          <div className="flex-1 p-4">
            <div className="text-xs text-gray-300 dark:text-gray-500">
              Web Design
            </div>
            <h3 className="text-sm font-semibold py-2 max-w-lg leading-loose">
              I design interfaces for digital products.{" "}
            </h3>
            <span className="text-xs">See my work →</span>
          </div>
          {/* <div className="h-28">
            image
          </div> */}
        </div>
        <div className="work-item flex flex-col-reverse sm:flex-row   border dark:border-gray-700 rounded-md">
          <div className="flex-1 p-4">
            <div className="text-xs text-gray-300 dark:text-gray-500">
              Nocode Applications
            </div>
            <h3 className="text-sm font-semibold py-2 max-w-lg leading-loose">
              I create No code hyper apps using Webflow, Airtable, Glide etc.{" "}
            </h3>
            <span className="text-xs">See my work →</span>
          </div>
          {/* <div className="h-28">
            image
          </div> */}
        </div>
        <div className="work-item flex flex-col-reverse sm:flex-row   border dark:border-gray-700 rounded-md">
          <div className="flex-1 p-4">
            <div className="text-xs text-gray-300 dark:text-gray-500">
              Notion Templates
            </div>
            <h3 className="text-sm font-semibold py-2 max-w-lg leading-loose">
              I create templates for notion to manage your life. Few usecases
              include daily planer, resume template, Personal Journal etc.
            </h3>
            <span className="text-xs">See my work →</span>
          </div>
          {/* <div className="h-28">
            image
          </div> */}
        </div>
        <div className="work-item flex flex-col-reverse sm:flex-row   border dark:border-gray-700 rounded-md">
          <div className="flex-1 p-4">
            <div className="text-xs text-gray-300 dark:text-gray-500">
              Consulting
            </div>
            <h3 className="text-sm font-semibold py-2 max-w-lg leading-loose">
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
    <section className="py-4 mt-10" id="newsletter">
      <Newletter />
    </section>
  );
};

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <Container>
      <HeroSection />
      <Articles posts={posts} />
      <NewsLetter />
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
