import { useState, useRef } from "react";
import { format, parseISO } from "date-fns";
import fetcher from "src/lib/fetcher";
import useSWR from "swr";
import {
  Form,
  FormState,
  Issues,
  Subscribers,
  NewsletterForm,
} from "../lib/types";
import is from "date-fns/esm/locale/is/index.js";

const NewsletterFormElement = ({ showIssues = false }: NewsletterForm) => {
  const [form, setForm] = useState<FormState>({ state: Form.Initial });
  const inputEl = useRef(null);
  const { data } = useSWR<Subscribers[]>("/api/subscribers", fetcher);
  // const data = { count: 0 };

  const subscriberCount = data?.length || 0;
  const subscribe = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setForm({ state: Form.Loading });
    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: inputEl.current.value,
        tags: ["portfolio"],
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const { error } = await res.json();
    if (error) {
      setForm({
        state: Form.Error,
        message: error,
      });
      return;
    }
    inputEl.current.value = "";
    setForm({
      state: Form.Success,
      message: `Hooray! please check your email to confirm.`,
    });
  };
  return (
    <div id="newsletter" className="mb-10 flex flex-col gap-2">
      <h2 className="text-2xl">The newsletter</h2>
      <p className="mt-5 text-sm leading-loose text-neutral-700 dark:text-neutral-500">
        {subscriberCount > 0 && `${subscriberCount} peeps`} subscribe to my
        newsletter. You’ll receive an issue per month. Topics include design,
        marketing, solopreneurship, and personal development.
      </p>
      <form className=" max-w-md " onSubmit={subscribe}>
        <div className="subscribe-form flex flex-col gap-2 py-5 text-sm md:flex-row">
          <input
            className="flex-1 rounded-lg bg-neutral-200 p-2 placeholder-neutral-400 outline-none dark:bg-neutral-800 dark:placeholder-neutral-600"
            type="email"
            placeholder="join@email.address"
            required={true}
          />
          <button
            type="submit"
            className="rounded bg-blue-600 px-2 py-1 text-neutral-100 dark:bg-blue-800 "
            // className="px-4 py-2 rounded-md bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
          >
            subscribe
          </button>
        </div>
        {form.state === Form.Error ? (
          <span className="flex items-center justify-start space-x-2  p-2 text-xs font-semibold text-red-700 dark:text-red-500">
            X <span>{form.message}</span>
          </span>
        ) : // <ErrorMessage>{form.message}</ErrorMessage>
        form.state === Form.Success ? (
          <span className="flex items-center justify-start p-2  text-xs font-semibold text-green-700 dark:text-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="mr-2 h-4 w-4"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              ></path>
            </svg>
            {form.message}
          </span>
        ) : (
          // <SuccessMessage>{form.message}</SuccessMessage>
          <p className="space-x-2 text-xs text-gray-400 dark:text-gray-300">
            {subscriberCount > 0 &&
              `${subscriberCount.toLocaleString()} subscribers – `}
            <a
              href="https://www.getrevue.co/profile/achuth"
              target="_blank"
              rel="noopener noreferrer"
            >
              View all issues
            </a>
          </p>
        )}
      </form>
      {showIssues && <NewsletterIssues />}
    </div>
  );
};

export const NewsletterIssues = () => {
  const { data, error, isValidating } = useSWR<Issues>("/api/issues", fetcher);
  if (isValidating) {
    return (
      <svg
        className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    );
  } else if (error) {
    return <></>;
  } else if (data) {
    return (
      <div className="text-md  max-w-2xl">
        {data?.issues?.map(
          (issue, index) =>
            index < 3 && (
              <a
                className="w-full"
                href={issue.url}
                aria-label="Introduction to React 2025"
                target="_blank"
                rel="noopener noreferrer"
                key={`issue-num ${index}`}
              >
                <div className="w-full transform border-b border-neutral-200 py-3 text-sm transition-all hover:scale-[1.01] dark:border-neutral-700">
                  <div className="flex flex-col items-baseline justify-between sm:flex-row ">
                    <div className="flex items-center">
                      <div className="mr-6 text-left text-neutral-500 dark:text-neutral-400">
                        0{index + 1}
                      </div>
                      <h4 className="text-ld w-full font-medium text-neutral-800 hover:text-blue-600 dark:text-neutral-100">
                        {issue.title}
                      </h4>
                    </div>
                    <div className="mt-2 flex w-full items-center justify-between sm:mt-0 sm:w-auto">
                      <p className="mr-2 ml-10  text-left text-neutral-500 dark:text-neutral-400 sm:ml-0 sm:text-right md:mb-0">
                        {format(parseISO(issue.sent_at), "dd MMMM, yyyy")}
                      </p>
                      {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-neutral-500 dark:text-neutral-100"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                              clip-rule="evenodd"
                            ></path>
                          </svg> */}
                    </div>
                  </div>
                </div>
              </a>
            )
        )}
      </div>
    );
  } else {
    return <></>;
  }
};

export default NewsletterFormElement;
