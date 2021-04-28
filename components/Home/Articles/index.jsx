import Link from "next/link"
import React from "react";
import { parseISO, format } from 'date-fns';

const Articles = ({ list, view }) => {
    return (
        <>{view === 'grid' && (
            <div className="flex items-center mt-5">
                <h1 className="text-xl font-semibold flex-1">Recent Articles</h1>
                <Link href="/blog"><a className="p-1 text-gray-400 hover:text-gray-700 text-sm">Read all posts →</a></Link>
            </div>
        )}
            <div className={`grid ${view === 'grid' ? ` mb-10 sm:grid-cols-2 ` : `w-full`} sm:mx-0`}>
                {
                    list.map((article, i) => (
                        <React.Fragment key={`article-${i}`}>
                            {i < 4 &&
                                (<Link href={article.slug}>
                                    <a className="border-b-2 pb-4 sm:border-b-0 ">
                                        <div className={`mt-5 ${view === 'grid' ? `max-w-md` : 'max-w-xl'}`}>
                                            <div>
                                                <h3 className="font-semibold">{article.title}</h3>
                                                <div className="my-2 text-xs">
                                                    <span className="text-gray-500">{format(parseISO(article.publishedAt), 'MMMM dd, yyyy')}</span>
                                                    {
                                                        article.tags.map((tag, index) => (
                                                            <span className={`uppercase p-1 mx-2 rounded-md bg-gray-200 text-gray-600 text-xs`} key={`tag-${index}`}> {tag.value}</span>
                                                        )
                                                        )}
                                                </div>
                                                <p className={`text-gray-600 ${view === 'grid' && `text-sm`}`}>{article.summary}</p>
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