const Subscribe = () => (
    <div
      className="mx-auto p-2 sm:p-8 max-w-2xl  space-y-4 border-t border-b border-gray-300 border-dashed dark:border-gray-700 bg-elevated bg-gray-100"
    >
      <div className="space-y-2 ">
        <p className="flex items-center font-semibold text-primary">
          Subscribe to my newsletter
      </p>
        <p className="text-tertiary text-sm text-gray-600 leading-relaxed">
          In this weekly newsletter I'm going to share with you what's new and cool in the world of web development, with content for everyone, from beginners to pros. There's also an interview question of the week, where you can test your skills and I'll share the results the following week. I'll also send you jokes and stories. And pics of mechanical keyboards. I won't spam though, I promise.
          <a
            href="https://twitter.com/achuth_hadnoor/"
            className="ml-1 font-normal rounded-sm p-0.5 -mx-0.5 bg-blue-500 text-primary bg-opacity-20 hover:bg-opacity-30 dark:hover:bg-opacity-100"
          >
            follow me on Twitter
        </a>
        .
      </p>
      </div>
      <form
        // onSubmit={submit}
        className="grid grid-cols-1 gap-2 mt-2 md:grid-cols-3"
      >
        <label className="md:col-span-2">
          <span className="sr-only">Email address</span>
          <input
            // value={email}
            // disabled={status === 'loading'}
            // onChange={onChange}
            placeholder="Email address"
            type="email"
            name="email"
            className="px-2 py-1 w-full rounded-md"
          />
        </label>
        <button
          // onClick={submit}
          // disabled={status === 'submitting' || !email}
          type="submit"
          className="w-full bg-gray-300 text-gray-600 rounded-md"
        >
          Subscribe
            </button>
      </form>
    </div>
  
  )
  export default Subscribe;