import React from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";

const Link = ({ href, name, ...props }) => {
  const router = useRouter();
  const isActive = router.asPath === href;
  return (
    <NextLink href={href}>
      <a
        className={cn(
          isActive
            ? "px-2 py-2 dark:bg-neutral-800 bg-neutral-300 rounded-md"
            : "px-2 py-2 dark:hover:bg-neutral-800 hover:bg-neutral-300 rounded-md"
        )}
        {...props}
      >
        {name}
      </a>
    </NextLink>
  );
};

export default function Header() {
  return (
    <header className="fixed bottom-0 w-full md:sticky md:top-0 z-10  text-xs md:text-sm dark:text-neutral-400 text-neutral-500 bg-neutral-200/10 dark:bg-neutral-900/10 shadow-sm backdrop-blur-lg tracking-widest">
      <div className="md:hidden p-[1px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
      <div className="container mx-auto flex justify-between p-1 md:py-2">
        <NextLink href={"/"}>
          <a className="p-1 sm:px-2 sm:py-1">
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
              ></path>
              <path
                d="M16.0002 12.5001L21.8335 23L10.167 23L16.0002 12.5001Z"
                fill="currentColor"
              ></path>
              <path
                d="M7.83361 23L1.77153 12.5002L13.8957 12.5002L7.83361 23Z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
        </NextLink>
        <nav className="flex gap-2 sm:gap-4 capitalize items-center">
          <Link href={"/"} name="home" />
          <Link href={"/about"} name="About" />
          <Link href={"/projects"} name="projects" />
          <Link href={"/tools"} name="Tools" />
        </nav>
      </div>
      {/* <div className=" hidden md:block p-[1px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" /> */}
    </header>
  );
}
