import Link, { LinkProps } from "next/link";
import * as Icons from "../components/icons";

// import NowPlaying from 'components/NowPlaying';

const ExternalLink = ({ href, children }: any) => (
  <a
    className="text-neutral-500 transition hover:text-neutral-600 dark:text-neutral-400"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="mx-auto mb-8 flex max-w-5xl flex-col items-start justify-center px-4 align-middle print:hidden sm:p-0">
      <hr className="border-1 w-full border-neutral-200 dark:border-neutral-800" />
      {/* <NowPlaying /> */}
      <Link href="/">
        <a className="dark:text-neutral-200" aria-label="home">
          <svg
            className="my-5"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_3651_7446)">
              <path
                d="M18.4615 17.5386L13.6651 9.23088L23.258 9.23088L18.4615 17.5386Z"
                fill="currentColor"
              />
              <path
                d="M12.0001 9.23083L16.6155 17.5385L7.38477 17.5385L12.0001 9.23083Z"
                fill="currentColor"
              />
              <path
                d="M5.53869 17.5386L0.742237 9.23088L10.3351 9.23088L5.53869 17.5386Z"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0_3651_7446">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(24 24) rotate(180)"
                />
              </clipPath>
            </defs>
          </svg>
        </a>
      </Link>
      <div className="grid w-full max-w-2xl grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        {/* <div className="flex flex-col space-y-4">
          <Link href="/">
            <a className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-600 transition ">
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-600 transition ">
              About
            </a>
          </Link>
          <Link href="/newsletter">
            <a className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-600 transition ">
              Newsletter
            </a>
          </Link>
        </div> */}
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://twitter.com/achuth_hadnoor">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://github.com/achuthhadnoor">
            GitHub
          </ExternalLink>
          {/* <ExternalLink href="https://www.youtube.com/channel/UCZMli3czZnd1uoc1ShTouQw">
                        YouTube
                    </ExternalLink> */}
        </div>
        <div className="flex flex-col space-y-4">
          {/* <Link href="/uses">
            <a className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-600 transition">
              Uses
            </a>
          </Link> */}
          <ExternalLink href="https://blog.achuth.dev">Blog</ExternalLink>
          <Link href="/guestbook">
            <a className="text-neutral-500 transition hover:text-neutral-600 dark:text-neutral-400">
              Apps
            </a>
          </Link>
          <Link href="/snippets">
            <a className="text-neutral-500 transition hover:text-neutral-600 dark:text-neutral-400">
              Bookmarks
            </a>
          </Link>
          <Link href="/tweets">
            <a className="text-neutral-500 transition hover:text-neutral-600 dark:text-neutral-400">
              Resources
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
