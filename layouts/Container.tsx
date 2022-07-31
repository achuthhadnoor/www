import Footer from "components/Footer";
import Header from "components/Header";
import Newsletter from "components/Newsletter";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import React from "react";

export default function Container(props) {
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
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://achuth.dev${router.asPath}`}
        />
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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicons/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/x-icon"
          href="/images/favicons/favicon.ico"
        />
        <link rel="manifest" href="/images/favicons/site.webmanifest" />
        <meta
          name="msapplication-config"
          content="/favicons/browserconfig.xml"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff"></meta>
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config',  'UA-177599995-1');
        `,
          }}
        />
        <script async src="https://cdn.splitbee.io/sb.js"></script>
      </Head>
      <Header />
      <main className="mx-auto  mt-10 flex w-full max-w-6xl flex-col justify-center px-4 sm:mt-20 print:sm:px-4 print:sm:pt-24 xl:px-0">
        {children}
      </main>
      <Newsletter />
      <Footer />
    </>
  );
}
