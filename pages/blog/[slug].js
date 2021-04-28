import { getFileBySlug, getFiles } from "../../lib/mdx";
import hydrate from 'next-mdx-remote/hydrate';
import BlogPost from '@/layouts/blog';
import MDXComponents from '@/components/MDXComponents'

export default function Post({ mdxSource, frontMatter }) {
    const content = hydrate(mdxSource, {
        components: {
              ...MDXComponents,
            //   StaticTweet
        }
    }); 
    return (
        <BlogPost frontMatter={frontMatter}>{content}</BlogPost>
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