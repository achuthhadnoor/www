import { getFileBySlug, getFiles } from "@/lib/mdx";

export default function Post({mdxSource, frontMatter}) {
    return (
        <div>

        </div>
    )
}

export async function getStaticPaths() {
    const posts = await getFiles('blog');
    return {
        paths: posts.map((p) => ({
            params: {
                slug: p.replace(/\.mdx/, '')
            }
        })),
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const post = await getFileBySlug('blog', params.slug);
    return { props: { ...post } };
}