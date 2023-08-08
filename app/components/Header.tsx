"use client";
import NextLink from "next/link";
import React, { useState } from "react";
import Icon from "react-icons-kit";
import { download, sun, moon, airplay, menu, x, home } from "react-icons-kit/feather";
import cl from 'classnames'
import { useRouter } from "next/router";

const AchuthLogo = ({ height = '24px', width = '24px', className }: Iprops) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M4.05225 17C4.05227 11.6154 3.16475 7.00002 8.70458 7C14.1323 6.99999 11.8584 7.00004 12.2461 7.00004V13.1539V17M4.05225 13.1539L8.14916 13.1539M20 7.00004L20 13M20 17L20 13M20 13L15 13"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

type Iprops = {
  height?: string
  width?: string,
  className?: string
}

const navigation = {
  "/": {
    text: "Home",
    icon: '🏠',
    external: false,
  },
  "/craft": {
    text: "Craft",
    icon: '🔬',
    external: false,
  },
  "/thoughts": {
    text: "Thoughts",
    icon: '🗒️',
    external: false,
  },
  "/about": {
    text: "About",
    icon: '👨‍💻',
    external: false,
  },
  "/bookmarks": {
    text: "Bookmarks",
    icon: '🔖',
    external: false,
  }
};
const Link = ({ href, ...props }: any) => {
  const router = useRouter();
  const isActive =
    href === "/" ? router.asPath === href : router.asPath.includes(href);
  return (
    <NextLink href={href}>
      <a
        className={cl(
          isActive
            ? // ? "bg-neutral-300  dark:bg-neutral-800"
            // : " hover:bg-neutral-300 dark:hover:bg-neutral-800",
            "text-indigo-400"
            : " hover:text-indigo-500 dark:hover:text-indigo-500",
          "relative rounded-md p-2"
        )}
        {...props}
      >
        {name}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-3 h-px select-none bg-gradient-to-r from-indigo-500/0 via-indigo-500/40 to-indigo-500/0 focus:outline-none dark:from-indigo-400/0 dark:via-indigo-400/40 dark:to-indigo-400/0"></span>
        )}
      </a>
    </NextLink>
  );
};
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  return (
    <header className="fixed bottom-2 w-full md:top-5 max-w-xl">
      <div className="flex flex-col md:flex-col-reverse z-20 bg-neutral-800/60 backdrop-blur-md  m-2 border border-b-0 border-neutral-300/10 rounded-md ">
        <nav className="items-center bottom-5 flex justify-between">
          <span className="p-2">
            <AchuthLogo />
          </span>
          <ul className="hidden">
            <span>sample</span>
            <span>sample</span>
            <span>sample</span>
            <span>sample</span>
          </ul>
          <span className="w-2 bg-black block" />
          <div className="flex gap-2 px-2">
            <span className=" cursor-pointer p-2">
              <Icon size={18} icon={download} />
            </span>
            {/* <span className=" cursor-pointer p-2">
              <Icon size={18} icon={moon} />
            </span>
          <span className=" cursor-pointer p-2">
            <Icon size={18} icon={airplay} />
          </span> */}
            <span className=" cursor-pointer p-2">
              <Icon size={18} icon={sun} />
            </span>
            {isOpen ? <span className=" cursor-pointer p-2" onClick={toggleMenu}>
              <Icon size={18} icon={x} />
            </span> : <span className="cursor-pointer p-2 md:hidden " onClick={toggleMenu}>
              <Icon icon={menu} size={18} />
            </span>}
          </div>
        </nav>
        <div className="h-[1px] rounded-full  bg-gradient-to-r from-indigo-900/50 via-yellow-800/50 to-red-900/50" />
      </div>
      <nav className={cl(isOpen ? "bottom-14" : "-bottom-[100%]", "transition-all ease-in-out  z-10 fixed p-2 w-full text-sm max-w-md right-0 ")}>
        <ul className="flex flex-col bg-neutral-800/60 backdrop-blur-md py-5 rounded-md gap-4 px-2 border border-b-0 border-neutral-300/10">
          {Object.entries(navigation).map(([path, link]) => (
            <NextLink key={`link-${link.text}`} href={path} >
              <li className="p-2 rounded-md px-2">{link.icon} {link.text}</li>
            </NextLink>
          ))}
        </ul>
      </nav>
    </header>
  );
}
