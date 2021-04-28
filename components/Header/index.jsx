import Link from 'next/link'
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Header() {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();
  
    // After mounting, we have access to the theme
    useEffect(() => setMounted(true), []);
  
    return (
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

    )
}