import Link from "next/link";

const BlogPost = ({ title, summary, slug }) => (
    <Link href={`/blog/${slug}`}>
        <a>
            <h1 className="font-bold sm:text-xl ">{title}</h1>
            <p>{summary}</p>
        </a>
    </Link>
)
export default BlogPost;