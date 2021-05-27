import { getFileBySlug, getFiles } from "../../lib/mdx";
import hydrate from 'next-mdx-remote/hydrate';
import AppView from '@/layouts/app';
import MDXComponents from '@/components/MDXComponents'

export default function Post({ mdxSource, frontMatter }) {
    const content = hydrate(mdxSource, {
        components: {
              ...MDXComponents,
        }
    }); 
    return (
        <AppView frontMatter={frontMatter}>{content}</AppView>
    )
}

export async function getStaticPaths() {
    const posts = await getFiles('apps');
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
    const post = await getFileBySlug('apps', params.slug);
    return { props: { ...post } };
}