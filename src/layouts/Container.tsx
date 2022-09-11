import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
// import Footer from "../components/footer";
import Header from "../components/Header";

export default function Container(props: { [x: string]: any; children: any }) {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: "Achuth Hadnoor – Designer,Developer, writer, creator.",
    description: `Front-end developer, designer and maker.`,
    image: "https://achuth.dev/static/images/achu-banner.png",
    type: "website",
    ...customMeta,
  };
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://achuth.dev${router.asPath}`}
        />
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={`https://achuth.dev${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Achuth Hadnoor" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@achuth_hadnoor" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <title>{meta.title}</title>
      </Head>
      <Header />
      <main className="container lg:max-w-5xl mx-auto tracking-wider dark:text-neutral-300 text-neutral-800 px-4 my-24 md:my-10">
        {children}
        <div className="flex flex-col sm:flex-row justify-between text-sm text-neutral-500 gap-4">
          <span>made with ❤️ + 🥶</span>
          <span>© Achuth Hadnoor {new Date().getFullYear()}</span>
        </div>
      </main>
      {/* <Footer /> */}
    </>
  );
}
