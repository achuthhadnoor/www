import Container from "@/components/Container";
import React, { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <Container title="Contact me | Achuth Hadnoor ">
      <div className="mb-10 rounded-2xl py-10 px-4 shadow-lg">
        <h1 className="my-2 flex-1 bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-xl font-semibold text-transparent  dark:from-blue-500 dark:via-green-300 dark:to-green-500 sm:my-4 sm:text-center sm:text-4xl">
          {`Let's Start an awesome project!`}
        </h1>
        <p className="my-4 mx-auto max-w-xl text-sm leading-relaxed text-gray-500  dark:text-gray-400 sm:my-6">
          Full transparency: The minimum project engagement is USD{" "}
          <b>$60/hour</b>—So I perform my best work while making a comfortable
          living out of doing what I love.
          <br />
          If you prefer, reach out at hey@achuth.dev. I’m on Indian Standard
          Time (IST).
        </p>
        {!submitted && (
          <form className="mx-auto flex  max-w-xl flex-col">
            <label className="px-1 text-xs " htmlFor="name">
              My Name is:
            </label>
            <input
              type={"text"}
              name="name"
              placeholder="Your name"
              className="mb-4 w-full max-w-md border-b-2 bg-transparent py-4 px-1 text-xs outline-none dark:border-b-gray-400"
            />
            <label className="text-xs " htmlFor="company">
              I work at:
            </label>
            <input
              type={"text"}
              name="company"
              placeholder="Company"
              className="mb-5 w-full max-w-md border-b-2 bg-transparent py-4 px-1 text-xs outline-none dark:border-b-gray-400"
            />
            <label className="text-xs " htmlFor="email">
              My Email is:
            </label>
            <input
              type={"text"}
              name="email"
              placeholder="Your e-mail"
              className="mb-5 w-full max-w-md border-b-2 bg-transparent py-4 px-1 text-xs outline-none dark:border-b-gray-400"
            />
            <label className="text-sm text-gray-800 dark:text-gray-400">
              I am looking for a partner to help me with
            </label>
            <div className="flex  flex-wrap gap-2 py-4">
              <div className="flex rounded-full  border p-2 align-middle dark:border-gray-700">
                <input
                  type="checkbox"
                  className="mx-2 mt-1"
                  name="development"
                />
                <label
                  htmlFor="development"
                  className="text-xs text-gray-800 dark:text-gray-400"
                >
                  Develoment
                </label>
              </div>
              <div className="flex rounded-full border p-2 align-middle dark:border-gray-700">
                <input type="checkbox" className="mx-2 mt-1" name="design" />
                <label
                  htmlFor="design"
                  className="text-xs text-gray-800 dark:text-gray-400"
                >
                  UI/UX Design
                </label>
              </div>
              <div className="flex rounded-full border p-2 align-middle dark:border-gray-700">
                <input type="checkbox" className="mx-2 mt-1" name="design" />
                <label
                  htmlFor="design"
                  className="text-xs text-gray-800 dark:text-gray-400"
                >
                  Consultation
                </label>
              </div>
              <div className="flex rounded-full border p-2 align-middle dark:border-gray-700">
                <input type="checkbox" className="mx-2 mt-1" name="design" />
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
            <div className="flex flex-wrap gap-2 py-4">
              <span className="flex rounded-full  border p-2 align-middle dark:border-gray-700">
                <input
                  type="checkbox"
                  className="mx-2 mt-1"
                  name="development"
                />
                <label
                  htmlFor="development"
                  className="p-1 text-xs text-gray-800 dark:text-gray-400"
                >
                  USD $2,000 - $5,000
                </label>
              </span>
              <span className="flex rounded-full border p-2 align-middle dark:border-gray-700">
                <input type="checkbox" className="mx-2 mt-1" name="design" />
                <label
                  htmlFor="design"
                  className="p-1 text-xs text-gray-800 dark:text-gray-400"
                >
                  USD $5,000 - $10,000
                </label>
              </span>
              <span className="flex rounded-full border p-2 align-middle dark:border-gray-700">
                <input type="checkbox" className="mx-2 mt-1" name="design" />
                <label
                  htmlFor="design"
                  className="p-1 text-xs text-gray-800 dark:text-gray-400"
                >
                  USD $10,000 and up
                </label>
              </span>
              <span className="flex rounded-full border p-2 align-middle dark:border-gray-700">
                <input type="checkbox" className="mx-2 mt-1" name="design" />
                <label
                  htmlFor="design"
                  className="p-1 text-xs text-gray-800 dark:text-gray-400"
                >
                  Other
                </label>
              </span>
            </div>
            <label className="mt-4 text-xs" htmlFor="details">
              More details about the project( brief, summary,deadline etc..)
            </label>
            <input
              type={"text"}
              name="details"
              placeholder="More details"
              className="mb-5 w-full max-w-md border-b-2 bg-transparent py-4 px-1 text-xs outline-none dark:border-b-gray-400"
            />
            <div>
              <button
                type="submit"
                className="rounded-full bg-gradient-to-r  from-yellow-400 to-pink-500 py-2 px-4 text-gray-50 dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500"
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
