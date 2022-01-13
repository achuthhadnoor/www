import React from "react";

const NewsLetter = () => {
  return (
    <section id="articles" className="mb-5 pb-5">
      <h3 className="mt-5 flex-1 text-gray-600 dark:text-gray-200 text-3xl heading leading-loose">
        THE NEWSLETTER
      </h3>
      <p className="text-sm max-w-lg leading-loose mb-4 text-gray-700 dark:text-gray-400">
        {` 1,000+ peeps subscribe to my newsletter. You’ll receive 1 issue per month. Topics include design, solopreneurship, and personal development.`}
      </p>
      <div className="flex flex-col sm:flex-row gap-2 ">
        <input
          type="email"
          className="flex-1 outline-none text-xs px-4 py-2 border border-gray-300 dark:bg-gray-900 rounded-full max-w-md"
          placeholder="join@email.address"
        />
        <button className="mt-2 sm:mt-0 px-4 py-2 text-gray-50 rounded-full bg-gradient-to-r from-yellow-400  to-pink-500 dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500">
          Subscribe ⚡️
        </button>
      </div>
    </section>
  );
};

export default NewsLetter;
