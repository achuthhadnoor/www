import Link from "next/link"
import React from "react";

import list from './blogpostsList'

const Articles = () => {
    return (
        <>
            <h1 className="text-xl mt-5 font-semibold">Recent Articles</h1>
            <div className="grid mb-10 sm:grid-cols-2 sm:mx-0 ">
                {
                    list.map((article, i) => (
                        <React.Fragment key={`article-${i}`}>
                            {i < 4 && <Link href={article.slug}>
                                <a>
                                    <div className="mt-5 max-w-md">
                                        <div className="my-2 text-xs">
                                            <span className="text-gray-500">April 24,2021</span>
                                            {
                                                article.tags.map((tag, index) => (
                                                    <span className={`px-1 py-1 mx-1 rounded-md ${tag.style}`} key={`tag-${index}`}> {tag.value}</span>
                                                )
                                                )}
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">{article.title}</h3>
                                            <p className="text-gray-600">{article.summary}</p>
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