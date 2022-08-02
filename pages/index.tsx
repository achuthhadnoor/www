import React from "react";
import Container from "layouts/Container";
import Link from "next/link";
import Image from "next/image";
import { parseISO, format } from "date-fns";
import Social from "components/Social";
import Newletter, { NewsletterForm } from "components/Newsletter";
import { pick } from "contentlayer/client";
import { allBlogs } from "contentlayer/generated";
import fetcher from "lib/fetcher";
import { Issues } from "lib/types";
import useSWR from "swr";

const HeroBlock = () => {
  return (
    <section className="my-8 md:my-16">
      <div className="w-lg flex flex-col dark:text-gray-200 sm:flex-row-reverse">
        <div className="relative mb-5 flex flex-1  items-center justify-center sm:mb-0">
          <div className="top-36 h-[176] w-[176] rotate-6 transform sm:scale-150">
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
          <h1 className="mb-1 text-center text-3xl font-bold  text-black dark:text-white md:text-left md:text-5xl">
            Achuth Hadnoor
          </h1>
          <h2 className="mt-2 mb-4 text-center text-xl  dark:text-gray-200 md:text-left">
            Developer {"&"} UI/UX Designer
          </h2>
          <div className="mt-5 flex flex-1 items-center">
            <hr className="hidden w-16 md:inline-block" />
            <Social />
          </div>
          <p className="text-md mt-5 max-w-lg flex-wrap text-center leading-loose dark:text-gray-400 md:text-left">
            👋 Hey, I am a <b>Designer</b>, <b>Developer</b> and <b>maker</b>{" "}
            from India 🇮🇳. In short, I love creating and building stuff. ✨
            Welcome to my little slice of the internet—I hope you find something
            useful! If you’re curious, read more
            <Link href={"/about"}>
              <a
                aria-label="read more"
                className="font-semibold transition hover:text-red-400 hover:underline"
              >
                {" "}
                about me.
              </a>
            </Link>
            <br />
            <span className="sign">Achuth</span>
          </p>
        </div>
      </div>
    </section>
  );
};

const ArticleBlock = ({ posts }) => {
  return (
    <section className="mt-10 py-4" id="articles">
      <h3 className="main-titles">THE ARTICLES</h3>
      <p className="mb-4 max-w-xl">
        Articles on Design, development, solopreneurship, productivity and more
        to make you generate passive income
      </p>
      <div className="mb-2 grid gap-4 sm:mx-0 sm:grid-cols-3 ">
        {posts.map(
          (
            { slug, title, summary, publishedAt, tags, image }: any,
            i: number
          ) => (
            <div
              key={`link-${i}`}
              className="my-2 border-b  border-b-gray-200  hover:scale-[1.01] dark:border-b-gray-800 sm:border-b-0 sm:odd:mr-2"
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
                      className="h-[100] w-[180] rounded-md"
                    />
                  </a>
                </Link>
                <Link href={`/blog/${slug}`}>
                  <a className="flex ">
                    <h4 className="mt-2 flex-1 py-2 text-sm font-semibold  transition hover:text-gray-400 dark:text-gray-200 hover:dark:text-purple-400 ">
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
                <p className="text-md text-gray-300">{summary}</p>
              </div>
            </div>
          )
        )}
      </div>
      <Link href="/blog">
        <a className="text-xs font-semibold">More on blog →</a>
      </Link>
    </section>
  );
};

const Resourses = () => (
  <section className="mt-10 py-4" id="articles">
    <h3 className="main-titles">THE RESOURSES</h3>
    <p className="mb-4 max-w-xl">
      To help you grow, maximize your productivity and more. Subscribe to get
      updates!
    </p>
    <div className="mb-2 grid gap-4 sm:mx-0 sm:grid-cols-2 ">
      <div className="my-2 border-b  border-b-gray-200  dark:border-b-gray-800 sm:border-b-0 sm:odd:mr-2 ">
        <div className="rounded-lg text-sm">
          <Link href={`/blog`}>
            <a>
              <Image
                src={"/images/achuth.jpg"}
                alt="Achuth Hadnoor"
                height={100}
                width={176}
                layout="responsive"
                className="h-[100] w-[180] rounded-xl"
              />
            </a>
          </Link>
          <span></span>
        </div>
        <div className="p-2 text-center font-semibold">NextJs + MDX blog</div>
      </div>
      <div className="my-2 border-b  border-b-gray-200  dark:border-b-gray-800 sm:border-b-0 sm:odd:mr-2 ">
        <div className="rounded-lg text-sm">
          <Link href={`/blog`}>
            <a>
              <Image
                src={"/images/achuth.jpg"}
                alt="Achuth Hadnoor"
                height={100}
                width={176}
                layout="responsive"
                className="h-[100] w-[180] rounded-xl"
              />
            </a>
          </Link>
          <span></span>
        </div>
        <div className="p-2 text-center font-semibold">NextJs + MDX blog</div>
      </div>
    </div>
    <Link href="/posts">
      <a className="text-xs font-semibold">Read more articles →</a>
    </Link>
  </section>
);
const IndexPage = (props) => {
  const { data } = useSWR<Issues>("/api/issues", fetcher);
  return (
    <Container>
      <HeroBlock />
      <section className="my-8 md:my-16">
        <h3 className="main-titles dark:text-gray-200">THE NEWSLETTER</h3>
        <p className="max-w-xl">
          1,000+ peeps subscribe to my newsletter. You’ll receive an issue per
          month. Topics include design, marketing, solopreneurship, and personal
          development.
        </p>
        <div className="my-4 max-w-lg">
          <NewsletterForm />
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
                  <div className="w-full transform border-b border-gray-200 py-3 text-sm transition-all hover:scale-[1.01] dark:border-gray-700">
                    <div className="flex flex-col items-baseline justify-between sm:flex-row">
                      <div className="flex items-center">
                        <div className="mr-6 text-left text-gray-500 dark:text-gray-400">
                          0{index + 1}
                        </div>
                        <h4 className="text-ld w-full font-medium text-gray-800 dark:text-gray-100">
                          {issue.title}
                        </h4>
                      </div>
                      <div className="mt-2 flex w-full items-center justify-between sm:mt-0 sm:w-auto">
                        <p className="mr-2 ml-10 w-32 text-left text-gray-500 dark:text-gray-400 sm:ml-0 sm:text-right md:mb-0">
                          {format(parseISO(issue.sent_at), "dd MMMM, yyyy")}
                        </p>
                        {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-500 dark:text-gray-100"
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
      </section>
      <ArticleBlock posts={props.posts} />
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

export default IndexPage;
