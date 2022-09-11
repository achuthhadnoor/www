import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="theme-color"
          content="rgb(245 245 245 / 1)"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="rgb(23 23 23 / 1)"
          media="(prefers-color-scheme: dark)"
        />
      </Head>
      <body className="leading-loose bg-neutral-100 dark:bg-neutral-900 ">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
