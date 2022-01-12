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
      <h1 className="flex-1 my-2 sm:my-4 font-semibold text-2xl sm:text-6xl text-center bg-gradient-to-r from-yellow-400  to-pink-500 dark:from-blue-500 dark:via-green-300 dark:to-green-500 bg-clip-text text-transparent">
        Resources
      </h1>
      <p className="px-2 py-4 text-sm text-center">
        Intresting and usefull Portfolios, Articles,Videos around the web.
      </p>
      <div className="sm:grid sm:grid-cols-3">
        <div className="col-span-2 sm:p-4 sm:col-span-1">
          <h2 className="text-orange-600 dark:text-green-600 font-semibold py-4">
            Categories
          </h2>
          <ul className="hidden sm:grid capitalize text-sm grid-cols-2 sm:grid-cols-1">
            {tabs.map((t: string, i: number) => (
              <li
                key={`t-${i}-${t}`}
                onClick={() => setSelectedTab(t)}
                className={`${
                  t === selectedTab
                    ? "bg-orange-50 dark:bg-gray-800 text-orange-600 dark:text-green-600  sm:border-orange-600 dark:sm:border-green-600 sm:border-r-4"
                    : "hover:bg-orange-50 dark:hover:bg-gray-800 "
                } mt-2 p-2 hover:text-orange-600 dark:hover:text-green-600  cursor-pointer  rounded-md  text-left`}
              >
                {t}
              </li>
            ))}
          </ul>
          <select
            className="sm:hidden outline w-full px-2 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded ring-0"
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
          <div className="grid sm:grid-cols-2 mt-5 gap-2">
            {resources.map((bookmark: any, i: number) => {
              if (selectedTab === "All" || selectedTab === undefined) {
                return (
                  <a
                    rel="noreferrer"
                    href={bookmark.link}
                    target="_blank"
                    key={`resources-${i}`}
                    className="gap-2 rounnded p-2 sm:m-2 rounded max-w-md overflow-auto dark:bg-gray-800 bg-gray-100 text-a hover:shadow-md transition-shadow"
                    title={bookmark.url}
                  >
                    <div className="p-1 text-2xl rounded">{bookmark.title}</div>
                    <div className="flex gap-2">
                      <span
                        className={`uppercase p-1 rounded-md dark:bg-gray-700 bg-orange-50 dark:text-green-400 text-orange-400 text-xs inline-block`}
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
                    className="gap-2 rounnded p-2 sm:m-2 rounded max-w-md overflow-auto dark:bg-gray-800 bg-gray-100 text-a hover:shadow-md transition-shadow"
                    title={bookmark.url}
                  >
                    <div className="p-1 text-2xl rounded">{bookmark.title}</div>
                    <div className="flex gap-2">
                      <span
                        className={`uppercase p-1 rounded-md dark:bg-gray-700 bg-orange-50 dark:text-green-400 text-orange-400 text-xs inline-block`}
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
