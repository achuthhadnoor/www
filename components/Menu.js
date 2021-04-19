
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Icon from 'react-icons-kit'
import { moon,menu } from 'react-icons-kit/feather'
import { useRouter } from 'next/router'

const Menu = () => {
    const Router = useRouter();
    const links = [
        {
            path: "/",
            link: "home"
        }, {
            path: "/apps",
            link: "apps"
        }, {
            path: "/deals",
            link: "deals"
        }, {
            path: "/blog",
            link: "blog"
        },
    ]
    return (
        <nav className="sticky-nav flex justify-between items-center max-w-8xl w-full p-8 my-0 md:my-8 mx-auto bg-white dark:bg-black bg-opacity-60">
            <span className="px-5">-///-</span>
            <span className="flex-1" />
            <div className="text-transform: uppercase text-sm hidden md:block">
                {
                    links.map((l, i) => (
                        <Link href={l.path} key={`menu-${i}`}><a className={`${Router.asPath === l.path && 'bg-green-50'} mx-2 p-1 sm:p-3 rounded-md text-gray-900 dark:text-gray-100 hover:bg-green-50 hover:text-green-800 focus:outline-none focus:bg-green-50 focus:text-green-800`}>{l.link}</a></Link>
                    ))
                }
                <button className="p-2 hover:bg-green-50 rounded  focus:outline-none focus:ring-1 focus:ring-green:500 focus:bg-green-50 ">
                    <Icon icon={moon} />
                </button>
            </div>
            <button className="p-2 hover:bg-green-50 rounded  focus:outline-none focus:ring-1 focus:ring-green:500 focus:bg-green-50 visible md:invisible "><Icon icon={menu} /></button>
        </nav>
    )
}

export default Menu;