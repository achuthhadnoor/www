import Image from 'next/image';
import Link from 'next/link'
import { parseISO, format } from 'date-fns';
import Icon from 'react-icons-kit'
import {github,twitter} from 'react-icons-kit/feather'
import Container from '../components/Container';
import Subscribe from '../components/Subscribe';

const editUrl = (slug) =>
    `https://github.com/achuthhadnoor/www/edit/master/data/blog/${slug}.mdx`;
const discussUrl = (slug) =>
    `https://mobile.twitter.com/search?q=${encodeURIComponent(
        `https://achuth.dev/blog/${slug}`
    )}`;

export default function BlogLayout({ children, frontMatter }) {
    return (
        <Container
            title={`${frontMatter.title} – Achuth Hadnoor`}
            description={frontMatter.summary}
            image={`https://achuth.dev${frontMatter.ogimage}`}
            date={new Date(frontMatter.publishedAt).toISOString()}
            type="article"
        >
            <div className="flex text-sm text-gray-200 mt-10 px-4 sm:mx-0">
                <Link href="/blog"><a className="uppercase">← Blog</a></Link><span className="flex-1"></span>
            </div>
            <article className="mx-auto max-w-mb mt-5 px-4">
                <h1 className="py-2 font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white ">
                    {frontMatter.title}
                </h1>
                <div className="">
                    <div className="flex items-center">
                        <Image
                            alt="Achuth Hadnoor"
                            height={24}
                            width={24}
                            src="/images/avatars/achuth.png"
                            className="rounded-full"
                        />
                        <div className="flex flex-col ml-2">
                            <p className="text-sm text-gray-700 dark:text-gray-300 ">
                                {frontMatter.by}
                                {'Achuth Hadnoor / '}
                                {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
                            </p>
                            <p className="inline-block pl-8 pr-2 text-sm text-gray-500 min-w-32 mt-2 md:mt-0 ">
                                {frontMatter.readingTime.text}
                                {` • `}
                                {/* <ViewCounter slug={frontMatter.slug} /> */}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="my-2 py-5 space-x-4">{
                    frontMatter.tags.map((tag, index) => (
                        <div className={`inline-block uppercase px-2 py-1 mx-2 rounded-md bg-gray-200 text-gray-600 text-xs`} key={`tag-${index}`}> {tag.value}</div>
                    )
                    )}
                </div>
                <Image
                    alt="Achuth Hadnoor"
                    src={frontMatter.image}
                    width={1175} height={600} priority
                    className="mt-5"
                />
                <div className="prose dark:prose-dark max-w-none w-full mt-5 leading-loose">
                    {children}
                </div>
                <div className="mt-8">
                    <Subscribe />
                </div>
                <div className="flex text-sm text-gray-700 dark:text-gray-300 text-center justify-center">
                    <a
                        href={discussUrl(frontMatter.slug)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-900 text-lg"
                    >
                        {'Discuss on '} <Icon icon={twitter} className="fill-current text-green-600"/>
                    </a>
                    {/* {` • `}
                    <a
                        href={editUrl(frontMatter.slug)}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {'Edit on '}<Icon icon={github}/>
                    </a> */}
                </div>
            </article>
        </Container>
    );
}