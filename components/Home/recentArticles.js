import Link from "next/link"
import React from "react";

import list from './blogpostsList'

const Articles = () => {
    const articles = [
        {
            title: "Personal branding is more influential than long list of portfolio projects",
            summary: "Portfolio projects help you undertand the design problems in the existing design project. but personal branding helps you create a design system",
            tags: [{
                id: "design",
                value: "design",
                style: "text-indigo-400 bg-indigo-50"
            }, {
                id: "personal",
                value: "personal",
                style: "text-pink-400 bg-pink-50"
            }],
            link: "/blog/personal-branding-over-portfolios"
        },
        {
            title: "What i learned from a $1k through affiliate marketing",
            summary: "Lessons and takeaways from my experience of bringing apps to uses using affiliate marketers",
            tags: [{
                id: "marketing",
                value: "marketing",
                style: "bg-red-50  text-red-400"
            }],
            link: "/blog/affiliate-marketing"
        }
    ]
    return (
        <>
           <div className="flex items-center mt-5">
               <h1 className="text-xl font-semibold flex-1">Recent Articles</h1>
               <Link href="/blog"><a className="p-1 text-gray-400 hover:text-gray-700">Read all posts →</a></Link>
            </div> 
            <div className="grid mb-10 sm:grid-cols-2 sm:mx-0 ">
                {
                    list.map((article, i) => (
                        <React.Fragment key={`article-${i}`}>
                            {i < 4 && <Link href={article.slug}>
                                <a>
                                    <div className="mt-5 max-w-md">
                                        <div>
                                            <h3 className="font-semibold">{article.title}</h3>
                                            <div className="my-2 text-xs">
                                                <span className="text-gray-500">April 24,2021</span>
                                                {
                                                    article.tags.map((tag, index) => (
                                                        <span className={`px-1 py-1 mx-1 rounded-md ${tag.style}`} key={`tag-${index}`}> {tag.value}</span>
                                                    )
                                                    )}
                                            </div>
                                            <p className="text-gray-600 text-sm">{article.summary}</p>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                            }
                        </React.Fragment>
                    ))
                }
            </div>
            {/* <span className="transform uppercase font-bold text-xs"> Read more {'> > >'}</span> */}
        </>
    )
}

export default Articles;