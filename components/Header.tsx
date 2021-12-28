import React from 'react'
import { useState, useEffect } from 'react';
import NextLink from 'next/link';
import cn from 'classnames';
import { useRouter } from 'next/router';



function NavItem({ href, text}) {
    const router = useRouter();
    const isActive = router.asPath === href;

    return (
        <NextLink href={href}>
            <a
                className={cn(
                    isActive
                        ? 'font-semibold text-gray-800 dark:text-gray-200'
                        : 'font-normal text-gray-600 dark:text-gray-400',
                    'hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all'
                )}
            >
                <span className="capsize">{text}</span>
            </a>
        </NextLink>
    );
}


export default function Header() {

    const [mounted, setMounted] = useState(false);
    const [resolvedTheme, setTheme] = useState('');

    // After mounting, we have access to the theme
    useEffect(() => setMounted(true), []);

    const applyTheme = () => {
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
            setTheme('dark');
        }
        if (resolvedTheme === 'light') {
            // Whenever the user explicitly chooses light mode
            document.documentElement.classList.remove('dark')
            localStorage.theme = 'light'
            setTheme('light');
        }
        else if (resolvedTheme === 'dark') {
            // Whenever the user explicitly chooses dark mode
            document.documentElement.classList.add('dark')
            localStorage.theme = 'dark'
            setTheme('dark');
        }
    }
    useEffect(() => {
        applyTheme();
    }, [mounted, resolvedTheme])
    return (
        <div className="flex flex-col justify-center px-8">
            <nav className="flex items-center justify-between w-full relative max-w-6xl border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-8 sm:pb-16  text-gray-900 bg-gray-50  dark:bg-gray-900 bg-opacity-60 dark:text-gray-100">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_3651_7446)">
                        <path d="M18.4615 17.5386L13.6651 9.23088L23.258 9.23088L18.4615 17.5386Z" fill="currentColor" />
                        <path d="M12.0001 9.23083L16.6155 17.5385L7.38477 17.5385L12.0001 9.23083Z" fill="currentColor" />
                        <path d="M5.53869 17.5386L0.742237 9.23088L10.3351 9.23088L5.53869 17.5386Z" fill="currentColor" />
                    </g>
                    <defs>
                        <clipPath id="clip0_3651_7446">
                            <rect width="24" height="24" fill="white" transform="translate(24 24) rotate(180)" />
                        </clipPath>
                    </defs>
                </svg>

                <div className="ml-[-0.60rem]">
                    {/* <MobileMenu /> */}
                    <NavItem href="/" text="Home" />
                    <NavItem href="/apps" text="Apps" />
                    <NavItem href="/dashboard" text="Dashboard" />
                    <NavItem href="/blog" text="Blog" />
                    <NavItem href="/nfts" text="NFT's" />
                </div>
                <button
                    aria-label="Toggle Dark Mode"
                    type="button"
                    className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all"
                    onClick={() => { setTheme(resolvedTheme === 'dark' ? 'light' : 'dark') }
                    }
                >
                    {mounted && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            className="w-5 h-5 text-gray-800 dark:text-gray-200"
                            onClick={() => {
                                setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
                            }}
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
        </div>
    )
}
