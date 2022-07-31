import React, { useRef } from "react";
import { useState } from "react";
import { Form, FormState, Subscribers } from "lib/types";
import useSWR from "swr";
import fetcher from "lib/fetcher";

export const NewsletterForm = () => {
  const [form, setForm] = useState<FormState>({ state: Form.Initial });
  const inputEl = useRef(null);
  const { data } = useSWR<Subscribers>("/api/subscribers", fetcher);
  const subscriberCount = new Number(data?.count);

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
      message: `Hooray! You're now on the list.`,
    });
  };

  return (
    <div>
      <form className="flex flex-col gap-2 sm:flex-row" onSubmit={subscribe}>
        <label className="flex flex-1 md:col-span-2">
          <input
            ref={inputEl}
            type="email"
            className="max-w-md flex-1 rounded-full border border-gray-300 px-4 py-2 text-xs font-normal tracking-wider outline-none focus:bg-gray-200 dark:bg-gray-900"
            placeholder="join@email.address"
          />
        </label>
        <button
          type="submit"
          className="mt-2 rounded-full bg-gradient-to-r from-yellow-400 to-pink-500 px-4 py-2 text-gray-50  dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500 sm:mt-0"
        >
          Subscribe ⚡️
        </button>
      </form>
      {form.state === Form.Error ? (
        <>{form.message}</>
      ) : // <ErrorMessage>{form.message}</ErrorMessage>
      form.state === Form.Success ? (
        <>{form.message}</>
      ) : (
        // <SuccessMessage>{form.message}</SuccessMessage>
        <p className="space-x-2 p-2 text-sm text-gray-400 dark:text-gray-300">
          {`${
            subscriberCount > 0 ? subscriberCount.toLocaleString() : "-"
          } subscribers – `}
          <a
            href="https://buttondown.email/achuth"
            target="_blank"
            rel="noopener noreferrer"
          >
            View all issues
          </a>
        </p>
      )}
    </div>
  );
};

export default function Newletter() {
  return (
    <div className=" bg-elevated mx-auto my-5 flex w-full max-w-6xl justify-center space-y-4 border-t border-b border-dashed border-gray-300 bg-gray-100 px-2 py-4 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 sm:p-8">
      <div className="max-w-xl">
        <div className="space-y-2 ">
          <p className="text-md text-primary flex items-center font-semibold">
            Subscribe to my newsletter
          </p>
          <p className="text-tertiary text-xs  leading-loose dark:text-gray-300">
            {/* {`In this weekly newsletter I'm going to share with you what's new and cool in the world of web development, with content for everyone, from beginners to pros. There's also an interview question of the week, where you can test your skills and I'll share the results the following week. I'll also send you jokes and stories. I won't spam though, I promise.`} */}
            Get weekly inspiration and tips on product building, marketing and
            growing audience.
            <a
              rel="noopener"
              href="https://twitter.com/achuth_hadnoor/"
              className="-mx-0.5 ml-1 rounded-sm bg-blue-500 p-0.5 px-2 font-normal text-white  dark:text-gray-200"
            >
              follow me on Twitter
            </a>
          </p>
          <NewsletterForm />
        </div>
      </div>
    </div>
  );
}
