import Container from "@/components/Container";
import { useEffect, useState } from "react";
import { Resources as resourcesData } from "@/data/resources";

const Resources = ({ tab, tabs, resources }: any) => {
  const [selectedTab, setSelectedTab] = useState(tab);
  useEffect(() => {
    setSelectedTab(tab);
  }, [tab]);
  return (
    <Container
      title="Resources - Tools and articles"
      description="A curated list of resources for web developers"
      image="/images/resources.png"
    >
      <h1 className="my-2 flex-1 bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-center text-2xl font-semibold  text-transparent dark:from-blue-500 dark:via-green-300 dark:to-green-500 sm:my-4 sm:text-6xl">
        Resources
      </h1>
      <p className="px-2 py-4 text-center text-sm">
        Intresting and usefull Portfolios, Articles,Videos around the web.
      </p>
      <div className="sm:grid sm:grid-cols-3">
        <div className="col-span-2 sm:col-span-1 sm:p-4">
          <h2 className="py-4 font-semibold text-orange-600 dark:text-green-600">
            Categories
          </h2>
          <ul className="hidden grid-cols-2 text-sm capitalize sm:grid sm:grid-cols-1">
            {tabs.map((t: string, i: number) => (
              <li
                key={`t-${i}-${t}`}
                onClick={() => setSelectedTab(t)}
                className={`${
                  t === selectedTab
                    ? "bg-orange-50 text-orange-600 dark:bg-gray-800 dark:text-green-600  sm:border-r-4 sm:border-orange-600 dark:sm:border-green-600"
                    : "hover:bg-orange-50 dark:hover:bg-gray-800 "
                } mt-2 cursor-pointer rounded-md p-2  text-left  hover:text-orange-600  dark:hover:text-green-600`}
              >
                {t}
              </li>
            ))}
          </ul>
          <select
            className="w-full rounded border border-gray-100 bg-gray-50 px-2 py-2 outline ring-0 dark:border-gray-700 dark:bg-gray-800 sm:hidden"
            onChange={(e) => {
              console.log(e);
              setSelectedTab(e.target.value);
            }}
          >
            {tabs.map((t: string, i: number) => (
              <option key={`t-${i}-${t}`} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            {resources.map((bookmark: any, i: number) => {
              if (selectedTab === "All" || selectedTab === undefined) {
                return (
                  <a
                    rel="noreferrer"
                    href={bookmark.link}
                    target="_blank"
                    key={`resources-${i}`}
                    className="rounnded text-a max-w-md gap-2 overflow-auto rounded bg-gray-100 p-2 transition-shadow hover:shadow-md dark:bg-gray-800 sm:m-2"
                    title={bookmark.url}
                  >
                    <div className="rounded p-1 text-2xl">{bookmark.title}</div>
                    <div className="flex gap-2">
                      <span
                        className={`inline-block rounded-md bg-orange-50 p-1 text-xs uppercase text-orange-400 dark:bg-gray-700 dark:text-green-400`}
                      >
                        {bookmark.tag}
                      </span>
                    </div>
                    <div className="py-1 text-sm text-gray-400">
                      {bookmark.description}
                    </div>
                  </a>
                );
              }
              return (
                bookmark.tag === selectedTab && (
                  <a
                    rel="noreferrer"
                    href={bookmark.link}
                    target="_blank"
                    key={`resources-${i}`}
                    className="rounnded text-a max-w-md gap-2 overflow-auto rounded bg-gray-100 p-2 transition-shadow hover:shadow-md dark:bg-gray-800 sm:m-2"
                    title={bookmark.url}
                  >
                    <div className="rounded p-1 text-2xl">{bookmark.title}</div>
                    <div className="flex gap-2">
                      <span
                        className={`inline-block rounded-md bg-orange-50 p-1 text-xs uppercase text-orange-400 dark:bg-gray-700 dark:text-green-400`}
                      >
                        {bookmark.tag}
                      </span>
                    </div>
                    <div className="py-1 text-sm text-gray-400">
                      {bookmark.description}
                    </div>
                  </a>
                )
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};

Resources.getInitialProps = ({ query }: any) => {
  let tab = "All";
  if (query.tab) {
    tab = query.tab;
  }
  let tabs = [
    "All",
    "Books",
    "Blog",
    "Color",
    "Color Generator",
    "Community",
    "Design Patterns",
    "Design Systems",
    "Design Studios",
    "Emails",
    "Gaming",
    "Guides",
    "Media",
    "Newsletters",
    "Plugins",
    "Resources",
    "Software & Tools",
    "Web Standards",
  ];
  return {
    tab: tab,
    tabs: tabs,
    resources: resourcesData,
  };
};
export default Resources;
