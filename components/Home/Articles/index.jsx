import Link from "next/link"
import React from "react";

import list from '../../blogpostsList'

const Articles = () => {
    return (
        <>
            <div className="flex items-center mt-5">
                <h1 className="text-xl font-semibold flex-1">Recent Articles</h1>
                <Link href="/blog"><a className="p-1 text-gray-400 hover:text-gray-700 text-sm">Read all posts →</a></Link>
            </div>
            <div className="grid mb-10 sm:grid-cols-2 sm:mx-0 ">
                {
                    list.map((article, i) => (
                        <React.Fragment key={`article-${i}`}>
                            {i < 4 &&
                                (<Link href={article.slug}>
                                    <a className="border-b-2 pb-4 sm:border-b-0 ">
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
                                </Link>)
                            }
                        </React.Fragment>
                    ))
                }
            </div>
        </>
    )
}

export default Articles