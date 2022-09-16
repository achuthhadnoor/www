import Image from "next/image";
import Link from "next/link";
import Container from "../../layouts/Container";

export default function Articles() {
  const articles = [
    {
      id: "1",
      title: "Production ready electron app setup with ReactJS",
      tags: ["development", "web", "desktop"],
      date: "28 Apr",
      year: "2022",
      time: "2min 5s",
      summary:
        "If you are a designer and is looking for a perfect language to use for mobile app development then flutter is a saviour.",
    },
    {
      id: "2",
      title: "Automate your workflows to increase productivity",
      tags: ["personal"],
      date: "21 Feb",
      year: "2022",
      time: "2min 5s",
      summary: "Highlights and reflections on 2019 and a look forward to 2020.",
    },
    {
      id: "3",
      title: "Time-boxing model: A complete guide to time management",
      tags: ["personal", "productivity"],
      date: "13 Jan",
      year: "2022",
      time: "2min 5s",
      summary:
        "Time boxing is a simple yet powerful technique of time management,That helps you to have control over your time and improves your productivity.This helpful technique is for practising self explain…",
    },
  ];
  return (
    <Container>
      <h1 className="mt-5 mb-10 text-3xl font-semibold md:text-5xl">
        Learn. Unlearn. Relearn.
      </h1>
      <div className="my-5">
        <p className="text-md mt-2 mb-5 max-w-2xl leading-loose text-neutral-800 dark:text-neutral-500">
          A collection of articles to help you learn, grow, build yourself to
          reach full potential.
        </p>
        <div className="my-4 flex max-w-2xl rounded-full bg-neutral-700/20 px-4 py-2  text-neutral-400">
          <input
            type={"search"}
            placeholder="Search for inspiration, articles"
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-neutral-600"
          />
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.9999 20.9999L16.6499 16.6499"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <hr className="wave mt-10" />
      </div>
      <div className="my-5 max-w-2xl">
        {articles.map(({ id, title, date, time }) => (
          <Link
            className="w-full"
            href={"/"}
            aria-label="Introduction to React 2025"
            rel="noopener noreferrer"
            key={`${id}-num`}
          >
            <div className="my-4 w-full  transform py-3 text-sm transition-all hover:scale-[1.01]">
              <div className="flex flex-col items-center justify-between sm:flex-row ">
                <div className="flex items-center">
                  <div className="text-neutral-500 dark:text-neutral-400">
                    {date}
                  </div>
                  <h4 className="text-ld w-full font-medium text-neutral-800 hover:text-blue-600 dark:text-neutral-100">
                    {title}
                  </h4>
                </div>
                <div className="mt-2 flex w-full items-center justify-between sm:mt-0 sm:w-auto">
                  <p className="mr-2 ml-10 text-left  text-xs text-neutral-500 dark:text-neutral-400 sm:ml-0 sm:text-right md:mb-0">
                    {/* {format(parseISO(issue.sent_at), "dd MMMM, yyyy")} */}
                    {time}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <hr className="wave my-10" />
    </Container>
  );
}
