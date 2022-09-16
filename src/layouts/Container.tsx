import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Social from "src/components/Social";
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
        {process.env.NODE_ENV === "production" && (
          <>
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
          </>
        )}
      </Head>
      <svg
        className="pointer-events-none fixed isolate z-50 opacity-70 mix-blend-soft-light"
        width="100%"
        height="100%"
      >
        <filter id="pedroduarteisalegend">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.80"
            numOctaves="4"
            stitchTiles="stitch"
          ></feTurbulence>
        </filter>
        <rect
          width="100%"
          height="100%"
          filter="url(#pedroduarteisalegend)"
        ></rect>
      </svg>
      <Header />
      <main className="container mx-auto my-10 px-4 tracking-wider text-neutral-800 dark:text-neutral-300 md:my-10 lg:max-w-5xl">
        {children}
        <div className="flex flex-col justify-between gap-4 text-sm text-neutral-500 sm:flex-row">
          <span>made with ❤️ + 🥶</span>
          <span>© Achuth Hadnoor {new Date().getFullYear()}</span>
        </div>
        <span>
          <Social />
        </span>
      </main>
      {/* <Footer /> */}
    </>
  );
}
