import React from "react";
import { useState } from "react";

export default function Newletter() {
  const [inputValue, setInputValue] = useState("");

  const SubmitValue = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  const onChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="bg-elevated mx-auto my-5 max-w-xl space-y-4 border-t border-b border-dashed border-gray-300 bg-gray-100 px-2 py-4 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 sm:p-8">
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
      </div>
      <form className="flex flex-col gap-2 sm:flex-row" onSubmit={SubmitValue}>
        <label className="flex flex-1 md:col-span-2">
          {/* <span className="sr-only">Email address</span> */}
          {/* <input
            type="email"
            className="px-2 py-1 w-full rounded dark:bg-gray-900 outline-none focus:outline-blue-900"
            placeholder="Email address"
            name="email"
            value={inputValue}
            onChange={onChange}
            required
          /> */}

          <input
            type="email"
            value={inputValue}
            onChange={onChange}
            className="max-w-md flex-1 rounded-full border border-gray-300 px-4 py-2 text-xs outline-none dark:bg-gray-900"
            placeholder="join@email.address"
          />
        </label>
        {/* <button
          disabled
          type="submit"
          className="w-full bg-blue-800 text-gray-200 rounded py-2 md:py-1 cursor-pointer"
        >
          Subscribe
        </button> */}
        <button
          disabled
          type="submit"
          className="mt-2 rounded-full bg-gradient-to-r from-yellow-400 to-pink-500 px-4 py-2 text-gray-50  dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500 sm:mt-0"
        >
          Subscribe ⚡️
        </button>
      </form>
      <div className="text-xs">6,293 subscribers – 34 issues</div>
    </div>
  );
}
