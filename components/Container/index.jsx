import Head from 'next/head';
import { useRouter } from 'next/router';

import Header from '../Header';
import Social from '../Social';

export default function Container(props) {

  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'Achuth Hadnoor – Developer, writer, maker.',
    description: 'Developer, JavaScript enthusiast, and product maker.',
    image: 'https://achuth.dev/images/blog/og-personal.png',
    type: 'website',
    ...customMeta
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://achuth.dev${router.asPath}`} />
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
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <Header />
      <div className="container max-w-5xl mx-auto">
        {children}
        <footer className="border-t-2 border-gray-100 mx-5 py-5 ">
          <div className="flex">
            <span>-///-</span>
            <span className="flex-1"></span>
            <div className="flex flex-col">
              <h1 className="text-right text-lg py-1 px-5">Achuth Hadnoor</h1>
              <Social />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
