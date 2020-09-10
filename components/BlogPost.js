import React from 'react';
import NextLink from 'next/link';
import useSWR from 'swr';
import format from 'comma-number';

import fetcher from '../lib/fetcher';
import { H3, P, Row } from './mdx_components';

const BlogPost = (frontMatter) => {
  const { title, summary } = frontMatter;

  const slug = frontMatter.__resourcePath
    .replace('blog/', '')
    .replace('.mdx', '');

  const { data } = useSWR(`/api/page-views?id=${slug}`, fetcher);
  const views = data?.total;

  return (
    <NextLink href={`blog/${slug}`} passHref>
      <a>
        <Row>
          <Flex>
            <H3>{title}</H3>
            <P>{`${views ? format(views) : '–––'} views`}</P>
          </Flex>
          <P>{summary}</P>
        </Row>
      </a>
    </NextLink>
  );
};

export default BlogPost;

const Flex = styled.div`
  display: flex;
  flex-direction: colum;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 700px;
`;
