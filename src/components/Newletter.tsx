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
    <div className="mx-auto my-5 px-2 py-4 sm:p-8 max-w-xl space-y-4 border-t border-b border-gray-300 border-dashed dark:border-gray-700 bg-elevated bg-gray-100 dark:bg-gray-800 dark:text-gray-200">
      <div className="space-y-2 ">
        <p className="flex items-center text-md font-semibold text-primary">
          Subscribe to my newsletter
        </p>
        <p className="text-tertiary text-xs  dark:text-gray-300 leading-loose">
          {/* {`In this weekly newsletter I'm going to share with you what's new and cool in the world of web development, with content for everyone, from beginners to pros. There's also an interview question of the week, where you can test your skills and I'll share the results the following week. I'll also send you jokes and stories. I won't spam though, I promise.`} */}
          Get weekly inspiration and tips on product building, marketing and
          growing audience.
          <a
            rel="noopener"
            href="https://twitter.com/achuth_hadnoor/"
            className="ml-1 px-2 font-normal rounded-sm p-0.5 -mx-0.5 bg-blue-500 text-primary  dark:text-gray-200"
          >
            follow me on Twitter
          </a>
        </p>
      </div>
      <form className="flex flex-col sm:flex-row gap-2" onSubmit={SubmitValue}>
        <label className="flex md:col-span-2 flex-1">
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
            className="flex-1 outline-none text-xs px-4 py-2 border border-gray-300 dark:bg-gray-900 rounded-full max-w-md"
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
          className="mt-2 sm:mt-0 px-4 py-2 text-gray-50 rounded-full bg-gradient-to-r from-yellow-400  to-pink-500 dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500"
        >
          Subscribe ⚡️
        </button>
      </form>
      <div className="text-xs">6,293 subscribers – 34 issues</div>
    </div>
  );
}
