import Image from 'next/image';
import { parseISO, format } from 'date-fns';

import Container from '../components/Container';
import Subscribe from '../components/subscribe';

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
      image={`https://achuth.dev${frontMatter.image}`}
      date={new Date(frontMatter.publishedAt).toISOString()}
      type="article"
    >
      <article className="mx-auto max-w-mb mt-10 px-4">
      <h1 className="py-2 font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white ">
          {frontMatter.title}
        </h1>
        <div className="my-2">{
          frontMatter.tags.map((tag, index) => (
            <span className={`px-1 py-1 mx-1 rounded-md ${tag.style}`} key={`tag-${index}`}> {tag.value}</span>
          )
          )}</div>
        <div className="flex flex-col py-1 items-center space-x-2 md:flex-row justify-between items-start md:items-center w-full mt-2 mb-8">
          <div className="flex items-center">
            <Image
              alt="Achuth Hadnoor"
              height={24}
              width={24}
              src="/images/avatar.png"
              className="rounded-full"
            />
            <p className="text-sm text-gray-700 dark:text-gray-300 ml-2">
              {frontMatter.by}
              {'Achuth Hadnoor / '}
              {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
            </p>
          </div>
          <p className="text-sm text-gray-500 min-w-32 mt-2 px-2 md:mt-0">
            {frontMatter.readingTime.text}
            {` • `}
            {/* <ViewCounter slug={frontMatter.slug} /> */}
          </p>
        </div>
        <div className="prose dark:prose-dark max-w-none w-full">
          {children}
        </div>
        <div className="mt-8">
          <Subscribe />
        </div>
        <div className="text-sm text-gray-700 dark:text-gray-300">
          <a
            href={discussUrl(frontMatter.slug)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {'Discuss on Twitter'}
          </a>
          {` • `}
          <a
            href={editUrl(frontMatter.slug)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {'Edit on GitHub'}
          </a>
        </div>
      </article>
    </Container>
  );
}