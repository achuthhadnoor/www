import React from "react";

const NewsLetter = () => {
  return (
    <section id="articles" className="mb-5 pb-5">
      <h3 className="heading mt-5 flex-1 text-3xl leading-loose text-gray-600 dark:text-gray-200">
        THE NEWSLETTER
      </h3>
      <p className="mb-4 max-w-lg text-sm leading-loose text-gray-700 dark:text-gray-400">
        {` 1,000+ peeps subscribe to my newsletter. You’ll receive 1 issue per month. Topics include design, solopreneurship, and personal development.`}
      </p>
      <div className="flex flex-col gap-2 sm:flex-row ">
        <input
          type="email"
          className="max-w-md flex-1 rounded-full border border-gray-300 px-4 py-2 text-xs outline-none dark:bg-gray-900"
          placeholder="join@email.address"
        />
        <button className="mt-2 rounded-full bg-gradient-to-r from-yellow-400 to-pink-500 px-4 py-2 text-gray-50  dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500 sm:mt-0">
          Subscribe ⚡️
        </button>
      </div>
    </section>
  );
};

export default NewsLetter;
