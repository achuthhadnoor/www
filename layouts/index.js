import React from 'react';
import { parseISO, format } from 'date-fns';
import BlogSeo from '../components/BlogSeo';
import Nav from '../components/Nav';
import Link from 'next/link';
const editUrl = (slug) =>
  `https://github.com/achuthhadnoor/portfolio-next/edit/master/pages/blog/${slug}.mdx`;
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://achuth.now.sh/blog/${slug}`
  )}`;

export default (frontMatter) => {
  const slug = frontMatter.__resourcePath
    .replace('blog/', '')
    .replace('.mdx', '');

  return ({ children }) => {
    return (
      <>
        <Nav />
        <BlogSeo url={`https://achuth.now.sh/blog/${slug}`} {...frontMatter} />
        {children}
      </>
    );
  };
};
