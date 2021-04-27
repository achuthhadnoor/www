import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link'
import Footer from './footer';

export default function Container(props) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'Achuth Hadnoor – Developer, writer, maker.',
    description: 'Developer, JavaScript enthusiast, and product maker.',
    image: 'https://achuth.dev/images/og-personal.png',
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
        <meta property="og:site_name" content="Lee Robinson" />
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
      <header className="p-4 sticky top-0 bg-white bg-transparent backdrop-filter backdrop-blur-md  overflow-auto">
        <nav className="flex items-center container max-w-5xl mx-auto">
          <Link href="/#" ><p>-///-</p></Link>
          <span className="flex-1"></span>
          <div className="flex ">
            <Link href="/" ><a className="ml-2 px-2 py-1 outline-none focus:ring-green-600 focus:ring-1 hover:ring-1  focus:text-green-700  hover:bg-green-50 hover:text-green-700 rounded-md text-sm focus:bg-green-50 transform uppercase">home</a></Link>
            <Link href="/blog/personal-branding-over-portfolios"><a className="ml-2 px-2 py-1 outline-none focus:ring-green-600 focus:ring-1 hover:ring-1  focus:text-green-700  hover:bg-green-50 hover:text-green-700 rounded-md text-sm focus:bg-green-50 transform uppercase">articles</a></Link>
            <Link href="/newsletter"><a className="ml-2 px-2 py-1 outline-none focus:ring-green-600 focus:ring-1 hover:ring-1  focus:text-green-700  hover:bg-green-50 hover:text-green-700 rounded-md text-sm focus:bg-green-50 transform uppercase">newsletter</a></Link>
            <a href="https://blog.achuth.dev?ref='portfolio'" target="_blank" className="ml-2 px-2 py-1 outline-none focus:ring-green-600 focus:ring-1 hover:ring-1  focus:text-green-700  hover:bg-green-50 hover:text-green-700 rounded-md text-sm focus:bg-green-50 transform uppercase">blog</a>
          </div>
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="bg-gray-200 dark:bg-gray-800 rounded p-3 h-10 w-10"
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                className="h-4 w-4 text-gray-800 dark:text-gray-200"
              >
                {resolvedTheme === 'dark' ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
          </button>
        </nav>
      </header>
      <div className="container max-w-5xl mx-auto">
        {children}
        <Footer />
      </div>
    </>
  );
}