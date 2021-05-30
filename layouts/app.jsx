import Image from 'next/image';
import Link from 'next/link'
import { parseISO, format } from 'date-fns';
import Container from '../components/Container';
import Subscribe from '../components/Subscribe';

const editUrl = (slug) =>
    `https://github.com/achuthhadnoor/www/edit/master/data/blog/${slug}.mdx`;
const discussUrl = (slug) =>
    `https://mobile.twitter.com/search?q=${encodeURIComponent(
        `https://achuth.dev/blog/${slug}`
    )}`;

export default function AppLayout({ children, frontMatter }) {
    console.log(frontMatter.image);
    return (
        <Container
            title={`${frontMatter.title} – Achuth Hadnoor`}
            description={frontMatter.summary}
            image={`https://achuth.dev${frontMatter.ogimage}`}
            date={new Date(frontMatter.publishedAt).toISOString()}
            type="article"
        > 
            <article className="mx-auto max-w-mb mt-5 px-4">
                {children}
                <div className="mt-8">
                    <Subscribe />
                </div>
            </article>
        </Container>
    );
}