import Link from "next/link"

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
            <h1 className="text-xl mt-5 font-semibold">Recent Articles</h1>
            <div className="grid mb-10 sm:grid-cols-2 sm:mx-0 ">
                {
                    articles.map((article, i) => (
                        <Link href={article.link} keu={`article-${i}`}>
                            <a>
                                <div className="mt-5 max-w-md">
                                    <div className="my-2 text-xs">
                                        <span className="text-gray-500">April 24,2021</span>
                                        {
                                            article.tags.map((tag,index) => (
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
                    ))
                }
            </div>
            {/* <span className="transform uppercase font-bold text-xs"> Read more {'> > >'}</span> */}
        </>
    )
}

export default Articles;