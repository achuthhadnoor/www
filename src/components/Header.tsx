import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import NextLink from "next/link";
import cn from "classnames";
import { useRouter } from "next/router";
import Link from "next/link";
import MobileMenu from "@/components/Mobilemenu";
import Icon from "react-icons-kit";
import { chevronDown } from "react-icons-kit/feather";

function NavItem({ href, text, external = false }: any) {
  const router = useRouter();
  const isActive = router.asPath === href;
  return external ? (
    <a
      rel="noreferrer"
      href={href}
      target="_blank"
      className={cn(
        isActive
          ? " bg-red-200 hover:text-red-400 dark:bg-red-800 dark:hover:bg-red-700"
          : "  hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200",
        "hidden rounded-lg p-1 transition-all sm:px-3 sm:py-2 md:inline-block"
      )}
    >
      <span className="capsize">{text}</span>
    </a>
  ) : (
    <NextLink href={href}>
      <a
        className={cn(
          isActive
            ? "bg-gray-200 dark:bg-gray-800"
            : "hover:bg-gray-200 hover:dark:bg-gray-800",
          " hidden rounded-lg p-1 transition-all sm:px-3 sm:py-2 md:inline-block"
        )}
      >
        <span className="capsize">{text}</span>
      </a>
    </NextLink>
  );
}

const MoreMenu = ({ text, items }: any) => (
  <div
    className={`header-menu relative
        hidden cursor-pointer flex-nowrap rounded-lg p-1 transition-all hover:bg-gray-200 hover:dark:bg-gray-800
      sm:px-3 sm:py-2 md:inline-block
      `}
  >
    <span className=" dark:hover:text-gray-200 ">
      {text}
      <Icon icon={chevronDown} />
    </span>
    <div className="header-more-menu absolute left-0 mt-2 flex flex-col rounded bg-white py-4 px-1 shadow dark:bg-gray-800">
      {items.map((item: any) => (
        <div key={`item-${item.text}`}>
          <NavItem {...item} />
        </div>
      ))}
    </div>
  </div>
);

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [resolvedTheme, setTheme] = useState("");

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const initialTheme = () => {
      // On page load or when changing themes, best to add inline in `head` to avoid FOUC
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
        setTheme("dark");
      }
      if (resolvedTheme === "light") {
        // Whenever the user explicitly chooses light mode
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
        setTheme("light");
      } else if (resolvedTheme === "dark") {
        // Whenever the user explicitly chooses dark mode
        document.documentElement.classList.add("dark");
        localStorage.theme = "dark";
        setTheme("dark");
      }
    };
    initialTheme();
  }, [mounted, resolvedTheme]);
  return (
    <div className="sticky top-0 z-10 flex flex-col justify-center bg-white/50 text-xs shadow-sm backdrop-blur-md dark:border-b-2 dark:border-gray-800 dark:bg-black/60 print:hidden">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between border-gray-200 bg-opacity-60 py-2 px-4 text-gray-900  dark:border-gray-700 dark:text-gray-100">
        <Link href="/">
          <a
            className="cursor:pointer hidden scale-125 transform sm:block"
            aria-label="home"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.1666 23L18.1045 12.5002L30.2287 12.5002L24.1666 23Z"
                fill="currentColor"
              />
              <path
                d="M16.0002 12.5001L21.8335 23L10.167 23L16.0002 12.5001Z"
                fill="currentColor"
              />
              <path
                d="M7.83361 23L1.77153 12.5002L13.8957 12.5002L7.83361 23Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </Link>
        <div className="ml-[-0.60rem] flex space-x-2">
          <MobileMenu />
          <NavItem href="/about" text="About" />
          <NavItem href="/blog" text="Blog" />
          <NavItem href="/collection" text="Resources" />
          {/* <NavItem href="/faq" text="FAQ" /> */}
          {/* <MoreMenu
            items={[
              {
                text: "Design",
                href: "/design",
              },
              {
                text: "Development",
                href: "/development",
              },
              {
                text: "No-code",
                href: "/nocode",
              },
            ]}
            text="Work"
          /> */}
          <MoreMenu
            items={[
              {
                text: "Bookmarks",
                href: "/bookmarks",
              },
              {
                text: "Collection",
                href: "/collection",
              },
              {
                text: "Newsletter",
                href: "/newsletter",
              },
              {
                text: "Contact",
                href: "/contact",
              },
            ]}
            text="More"
          />
          {/* <NavItem href="https://blog.achuth.dev" text="Blog" external={true} /> */}
          {/* <NavItem href="/setup" text="Setup" /> */}
        </div>
        <span className="flex flex-1 justify-center align-middle  sm:hidden">
          <Link href="/">
            <a
              className="cursor:pointer flex transition sm:hidden"
              aria-label="home"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.1666 23L18.1045 12.5002L30.2287 12.5002L24.1666 23Z"
                  fill="currentColor"
                />
                <path
                  d="M16.0002 12.5001L21.8335 23L10.167 23L16.0002 12.5001Z"
                  fill="currentColor"
                />
                <path
                  d="M7.83361 23L1.77153 12.5002L13.8957 12.5002L7.83361 23Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </Link>
        </span>
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 ring-gray-300  transition-all hover:ring-2  dark:bg-gray-600"
          onClick={() => {
            setTheme(resolvedTheme === "dark" ? "light" : "dark");
          }}
        >
          {mounted && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="h-5 w-5 text-gray-800 dark:text-gray-200"
              onClick={() => {
                setTheme(resolvedTheme === "light" ? "dark" : "light");
              }}
            >
              {resolvedTheme === "dark" ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              )}
            </svg>
          )}
        </button>
      </nav>
    </div>
  );
}
