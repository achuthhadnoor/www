import { useState, useRef } from "react";
import fetcher from "src/lib/fetcher";
import useSWR from "swr";
import { Form, FormState, Issues, Subscribers } from "../lib/types";

const NewsletterForm = () => {
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
      message: `Hooray! please check your email to confirm.`,
    });
  };
  return (
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
          {`${
            subscriberCount > 0 ? subscriberCount.toLocaleString() : "-"
          } subscribers – `}
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
  );
};

const Newsletter = () => {};

export default NewsletterForm;
