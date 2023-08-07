"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="sticky top-0 mt-6 bg-neutral-50/70 backdrop-blur-md dark:bg-neutral-950/40 rounded-lg  ">
        <div className="h-[1px] rounded-full mx-2 bg-gradient-to-r from-indigo-900/50 via-yellow-800/50 to-red-900/50" />
        <div className="flex justify-between  items-center px-4 py-2">
          <span className="Bruno Ace SC">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.05225 17C4.05227 11.6154 3.16475 7.00001 8.70458 7C14.1323 6.99999 11.8584 7.00004 12.2461 7.00004V13.1539M12.2461 17V13.1539M12.2461 13.1539L7.10155 13.1538M20 7.00004V12M20 17V12M20 12H14.8554"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <nav className="flex items-center select-none">
            <ul className="hidden md:flex   gap-4 text-sm ">
              <li className="p-2 ">Work</li>
              <li className="p-2">Blog</li>
              <li className="p-2">Newsletter</li>
              <li className="p-2">About</li>
              <li className="p-2 gap-2 relative group/more">
                <button className="flex gap-2 items-center">
                  <span>More</span>
                  <span className="group-hover/more:rotate-180 group-focus/more:rotate-180">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 6L8 10L12 6"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
                <div className="pt-4 absolute invisible group-hover/more:visible group-focus/more:visible">
                  <ul className="min-w-[8rem] p-2 bg-black/40 rounded">
                    <li className="p-2">Bookshelf</li>
                    <li className="p-2">Suppoters</li>
                  </ul>
                </div>
              </li>
            </ul>
            <div className="flex gap-4 items-center  border-l border-neutral-500/30 py-1 px-2 ">
              <Link
                className="relative group/tooltip flex items-center outline-none"
                href="/achuth_hadnoor.pdf"
                target="_blank"
              >
                <span className="absolute invisible group-hover/tooltip:visible top-8 -left-5 px-2 rounded-full bg-neutral-100 text-neutral-900 text-xs outline-none">
                  Resume
                </span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.75 11.25V14.25C15.75 14.6478 15.592 15.0294 15.3107 15.3107C15.0294 15.592 14.6478 15.75 14.25 15.75H3.75C3.35218 15.75 2.97064 15.592 2.68934 15.3107C2.40804 15.0294 2.25 14.6478 2.25 14.25V11.25"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.25 7.5L9 11.25L12.75 7.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 11.25V2.25"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <span className="md:hidden z-50" onClick={() => setOpen(!open)}>
                {open ? "close" : "menu"}
              </span>
            </div>
          </nav>
        </div>
        {open && (
          <ul className={`flex flex-col text-right md:invisible md:hidden `}>
            <li className="p-2">Work</li>
            <li className="p-2">Newsletter</li>
            <li className="p-2">Blog</li>
            <li className="p-2">About</li>
          </ul>
        )}
      </header>
    </>
  );
}
