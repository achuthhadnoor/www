"use client";
import Link from "next/link";
import React, { useState } from "react";
import Icon from "react-icons-kit";
import { download, sun, moon, airplay, menu } from "react-icons-kit/feather";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigation = [
    {
      link: "/",
      text: "Home",
      external: false,
    },
    {
      link: "/craft",
      text: "Craft",
      external: false,
    },
    {
      link: "/thoughts",
      text: "Thoughts",
      external: false,
    },
    {
      link: "/about",
      text: "About",
      external: false,
    },
  ];
  return (
    <header className="fixed bottom-2 w-full">
      <div className="z-20 bg-neutral-800/60 backdrop-blur-md  m-2  rounded-md ">
        <nav className="items-center bottom-5 flex justify-between">
          <span className="p-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.05225 17C4.05227 11.6154 3.16475 7.00002 8.70458 7C14.1323 6.99999 11.8584 7.00004 12.2461 7.00004V13.1539V17M4.05225 13.1539L8.14916 13.1539M20 7.00004L20 13M20 17L20 13M20 13L15 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <ul className="hidden">
            <span>sample</span>
            <span>sample</span>
            <span>sample</span>
            <span>sample</span>
          </ul>
          <span className="w-2 bg-black block" />
          <div className="flex gap-1 px-2">
            <span className=" cursor-pointer p-2">
              <Icon size={18} icon={download} />
            </span>
            <span className=" cursor-pointer p-2">
              <Icon size={18} icon={moon} />
            </span>
            {/* <span className=" cursor-pointer p-2">
            <Icon size={18} icon={sun} />
          </span>
          <span className=" cursor-pointer p-2">
            <Icon size={18} icon={airplay} />
          </span> */}
            <span className=" cursor-pointer p-2">
              <Icon size={18} icon={menu} />
            </span>
          </div>
        </nav>
        <div className="h-[1px] rounded-full mx-2 bg-gradient-to-r from-indigo-900/50 via-yellow-800/50 to-red-900/50" />
      </div>
      <nav className="z-10 fixed bottom-16 p-2 w-full text-sm">
        <ul className="flex flex-col bg-neutral-800/60 backdrop-blur-md p-2 rounded-md gap-4 text-right px-6">
          {navigation.map((nav) => (
            <Link key={`link-${nav.text}`} href={nav.link}>
              <li className="p-2">{nav.text}</li>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
}
