import Image from "next/image";
import Link from "next/link";
import React from "react";
import { parseISO, format } from "date-fns";

export default function Blogpost({
  slug,
  title,
  publishedAt,
  summary,
  tags,
  image,
}: any) {
  return (
    <div className="my-2 border-b  border-b-gray-200  dark:border-b-gray-800 sm:border-b-0 sm:odd:mr-2">
      <div className="text-sm ">
        <Link href={`/blog/${slug}`}>
          <a>
            <Image
              src={image}
              alt="Achuth Hadnoor"
              height={100}
              width={176}
              layout="responsive"
              className="h-[100] w-[180]  rounded-md ring-1 ring-gray-200"
            />
          </a>
        </Link>
        <div className="mt-4 flex py-2 text-xs text-gray-500 dark:text-gray-300">
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
        <Link href={`/blog/${slug}`}>
          <a className="flex  ">
            <h4 className=" py-2 text-sm font-semibold  transition hover:text-gray-300 dark:text-gray-500 hover:dark:text-gray-300 ">
              {title}
            </h4>
          </a>
        </Link>
        <p className="text-md text-gray-300">{summary}</p>
      </div>
    </div>
  );
}
// <div className="mt-5 max-w-2xl w-full  border-gray-50 dark:border-gray-800 border-2 text-sm border-b-2 p-2 rounded hover:shadow-md transition">
//   <Link href={`/blog/${slug}`}>
//     <a>
//       <Image
//         src={image}
//         alt="Achuth Hadnoor"
//         height={100}
//         width={176}
//         layout="responsive"
//         className="h-[100] w-[180]"
//       />
//     </a>
//   </Link>
//   <Link href={`/blog/${slug}`}>
//     <a className="border-b-2 dark:border-slate-500 sm:border-b-0 sm:pr-2">
//       <h4 className="font-semibold text-xl dark:text-gray-100 hover:dark:text-yellow-500 hover:text-yellow-600 transition">
//         {title}
//       </h4>
//     </a>
//   </Link>
//   <div className="mb-2 text-xs flex flex-col">
//     <div className="flex space-x-2 flex-1 flex-wrap items-center text-sm pb-2">
//       {JSON.parse(tags).map((tag: string, i: number) => (
//         <span
//           key={`tag-key-${i}`}
//           className="cursor-pointer select-none p-1 mr-2 rounded-md bg-gray-200 dark:bg-yellow-800 text-gray-600 dark:text-gray-200 text-xs inline-block"
//         >
//           #{tag}
//         </span>
//       ))}
//     </div>
//     <span className="text-gray-500 py-1 dark:text-gray-300">
//       {publishedAt}
//     </span>
//   </div>
//   <p className="text-gray-300 text-md">{summary}</p>
// </div>
