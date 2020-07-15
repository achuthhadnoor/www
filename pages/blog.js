import React, { useState } from 'react';
import { NextSeo } from 'next-seo';
// eslint-disable-next-line import/no-unresolved, import/extensions
import { frontMatter as blogPosts } from './blog/**/*.mdx';
import { frontMatter as IntroToNextMDX } from './blog/2020/intro-to-next.mdx';
import styled from 'styled-components';

const url = 'https://achuth.now.sh/blog';
const title = 'Achuth hadnoor';
const description =
  'Thoughts on the software industry, programming, tech, illustration, Designs , and my personal life.';
const Blog = () => {
  const [searchValue, setSearchValue] = useState('');

  const filteredBlogPosts = blogPosts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    );

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description
        }}
      />

      <Container>sample</Container>
    </>
  );
};

export default Blog;

const Container = styled.div``;
