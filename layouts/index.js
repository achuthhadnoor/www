import React from 'react';
import { parseISO, format } from 'date-fns';
import BlogSeo from '../components/BlogSeo';
import Nav from '../components/Nav';
import Link from 'next/link';
import { Row } from '../components/mdx_components';
import Icon from 'react-icons-kit';
import { pencil } from 'react-icons-kit/fa';
import { messageCircle } from 'react-icons-kit/feather';

export default (frontMatter) => {
  const slug = frontMatter.__resourcePath
    .replace('blog/', '')
    .replace('.mdx', '');

  const editUrl = (slug) =>
    `https://github.com/achuthhadnoor/www/edit/master/pages/blog/${slug}.mdx`;
  const discussUrl = (slug) =>
    `https://mobile.twitter.com/search?q=${encodeURIComponent(
      `https://achuth.now.sh/blog/${slug}`
    )}`;
  return ({ children }) => {
    return (
      <>
        <BlogSeo url={`https://achuth.now.sh/blog/${slug}`} {...frontMatter} />
        <a href={editUrl(slug)}>
          <Icon icon={pencil} style={{ padding: 10 }} />
        </a>
        <a href={discussUrl(slug)}>
          <Icon icon={messageCircle} style={{ padding: 10 }} />
        </a>
        <Row>{children}</Row>
      </>
    );
  };
};
