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
                        <React.Fragment key={`article-${i}-${article.slug}`}>
                            {
                                view === 'grid' &&
                                <> { i < 4 &&
                                    (
                                        <Link href={`/blog/${article.slug}`}>
                                            <a className="border-b-2 pb-4 sm:border-b-0 sm:pr-2">
                                                <div className={`mt-5 ${view === 'grid' && `max-w-md`}`}>
                                                    <h3 className="font-semibold  hover:bg-yellow-100 inline-block">{article.title}</h3>
                                                    <div className="my-2 text-xs flex flex-col sm:flex-row">
                                                        <span className="text-gray-500 py-1">{format(parseISO(article.publishedAt), 'MMMM dd, yyyy')}</span>
                                                        <div className="flex space-x-2 flex-1 flex-wrap items-center">
                                                            {
                                                                article.tags.map((tag, index) => (
                                                                    <span className={`uppercase p-1 mx-2 rounded-md bg-gray-200 text-gray-600 text-xs inline-block`} key={`tag-${index}`}> {tag.value}</span>
                                                                )
                                                                )}
                                                        </div>
                                                    </div>
                                                    <p className={`text-gray-600 ${view === 'grid' && `text-sm`}`}>{article.summary}</p>
                                                </div>
                                            </a>
                                        </Link>)
                                }
                                </>}
                            { view === 'list' &&
                                (<Link href={`/blog/${article.slug}`}>
                                    <a className="border-b-2 pb-4 sm:border-b-0 sm:pr-2">
                                        <div className={`mt-5 ${view === 'grid' && `max-w-md`}`}>
                                            <h3 className="font-semibold  hover:bg-yellow-100 inline-block">{article.title}</h3>
                                            <div className="my-2 text-xs flex flex-col sm:flex-row">
                                                <span className="text-gray-500 py-1">{format(parseISO(article.publishedAt), 'MMMM dd, yyyy')}</span>
                                                <div className="flex space-x-2 flex-1 flex-wrap items-center">
                                                    {
                                                        article.tags.map((tag, index) => (
                                                            <span className={`uppercase p-1 mx-2 rounded-md bg-gray-200 text-gray-600 text-xs inline-block`} key={`tag-${index}`}> {tag.value}</span>
                                                        )
                                                        )}
                                                </div>
                                            </div>
                                            <p className={`text-gray-600 ${view === 'grid' && `text-sm`}`}>{article.summary}</p>
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