import Container from "@/components/Container";
import React, { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <Container title="Contact me | Achuth Hadnoor ">
      <div className="shadow-lg py-10 px-4 rounded-2xl mb-10">
        <h1 className="flex-1 my-2 sm:my-4 font-semibold text-xl sm:text-4xl sm:text-center bg-gradient-to-r from-yellow-400  to-pink-500 dark:from-blue-500 dark:via-green-300 dark:to-green-500 bg-clip-text text-transparent">
          {`Let's Start an awesome project!`}
        </h1>
        <p className="my-4 sm:my-6 text-gray-500 dark:text-gray-400 max-w-xl mx-auto  text-sm leading-relaxed">
          Full transparency: The minimum project engagement is USD{" "}
          <b>$60/hour</b>—So I perform my best work while making a comfortable
          living out of doing what I love.
          <br />
          If you prefer, reach out at hey@achuth.dev. I’m on Indian Standard
          Time (IST).
        </p>
        {!submitted && (
          <form className="max-w-xl mx-auto  flex flex-col">
            <label className="text-xs px-1 " htmlFor="name">
              My Name is:
            </label>
            <input
              type={"text"}
              name="name"
              placeholder="Your name"
              className="text-xs py-4 mb-4 px-1 border-b-2 dark:border-b-gray-400 w-full max-w-md outline-none bg-transparent"
            />
            <label className="text-xs " htmlFor="company">
              I work at:
            </label>
            <input
              type={"text"}
              name="company"
              placeholder="Company"
              className="text-xs py-4 mb-5 px-1 border-b-2 dark:border-b-gray-400 w-full max-w-md outline-none bg-transparent"
            />
            <label className="text-xs " htmlFor="email">
              My Email is:
            </label>
            <input
              type={"text"}
              name="email"
              placeholder="Your e-mail"
              className="text-xs py-4 mb-5 px-1 border-b-2 dark:border-b-gray-400 w-full max-w-md outline-none bg-transparent"
            />
            <label className="text-sm text-gray-800 dark:text-gray-400">
              I am looking for a partner to help me with
            </label>
            <div className="py-4  flex flex-wrap gap-2">
              <div className="flex align-middle  border dark:border-gray-700 p-2 rounded-full">
                <input
                  type="checkbox"
                  className="mt-1 mx-2"
                  name="development"
                />
                <label
                  htmlFor="development"
                  className="text-xs text-gray-800 dark:text-gray-400"
                >
                  Develoment
                </label>
              </div>
              <div className="flex align-middle border dark:border-gray-700 p-2 rounded-full">
                <input type="checkbox" className="mt-1 mx-2" name="design" />
                <label
                  htmlFor="design"
                  className="text-xs text-gray-800 dark:text-gray-400"
                >
                  UI/UX Design
                </label>
              </div>
              <div className="flex align-middle border dark:border-gray-700 p-2 rounded-full">
                <input type="checkbox" className="mt-1 mx-2" name="design" />
                <label
                  htmlFor="design"
                  className="text-xs text-gray-800 dark:text-gray-400"
                >
                  Consultation
                </label>
              </div>
              <div className="flex align-middle border dark:border-gray-700 p-2 rounded-full">
                <input type="checkbox" className="mt-1 mx-2" name="design" />
                <label
                  htmlFor="design"
                  className="text-xs text-gray-800 dark:text-gray-400"
                >
                  Other
                </label>
              </div>
            </div>
            <label className="text-sm text-gray-800 dark:text-gray-400">
              My Budget range is
            </label>
            <div className="py-4 flex flex-wrap gap-2">
              <span className="flex align-middle  border dark:border-gray-700 p-2 rounded-full">
                <input
                  type="checkbox"
                  className="mt-1 mx-2"
                  name="development"
                />
                <label
                  htmlFor="development"
                  className="text-xs text-gray-800 dark:text-gray-400 p-1"
                >
                  USD $2,000 - $5,000
                </label>
              </span>
              <span className="flex align-middle border dark:border-gray-700 p-2 rounded-full">
                <input type="checkbox" className="mt-1 mx-2" name="design" />
                <label
                  htmlFor="design"
                  className="text-xs text-gray-800 dark:text-gray-400 p-1"
                >
                  USD $5,000 - $10,000
                </label>
              </span>
              <span className="flex align-middle border dark:border-gray-700 p-2 rounded-full">
                <input type="checkbox" className="mt-1 mx-2" name="design" />
                <label
                  htmlFor="design"
                  className="text-xs text-gray-800 dark:text-gray-400 p-1"
                >
                  USD $10,000 and up
                </label>
              </span>
              <span className="flex align-middle border dark:border-gray-700 p-2 rounded-full">
                <input type="checkbox" className="mt-1 mx-2" name="design" />
                <label
                  htmlFor="design"
                  className="text-xs text-gray-800 dark:text-gray-400 p-1"
                >
                  Other
                </label>
              </span>
            </div>
            <label className="text-xs mt-4" htmlFor="details">
              More details about the project( brief, summary,deadline etc..)
            </label>
            <input
              type={"text"}
              name="details"
              placeholder="More details"
              className="text-xs py-4 mb-5 px-1 border-b-2 dark:border-b-gray-400 w-full max-w-md outline-none bg-transparent"
            />
            <div>
              <button
                type="submit"
                className="bg-gradient-to-r from-yellow-400  to-pink-500 dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500 rounded-full py-2 px-4 text-gray-50"
              >
                Submit
              </button>
            </div>
          </form>
        )}
        {submitted && <div>Thank you! Your submission has been received!</div>}
      </div>
    </Container>
  );
}
