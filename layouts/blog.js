import React, { useState } from 'react';
import { NextSeo } from 'next-seo';

import BlogPost from '../components/BlogPost';

// eslint-disable-next-line import/no-unresolved, import/extensions
import { frontMatter as blogPosts } from './blog/**/*.mdx';
import styled from 'styled-components';

const url = 'https://leerob.io/blog';
const title = 'Blog – Lee Robinson';
const description =
  'Thoughts on the software industry, programming, tech, videography, music, and my personal life.';

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
      <Container>
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <h1>Blog</h1>
          <p>
            {`I've been writing online since 2014, mostly about web development and tech careers.
                In total, I've written ${blogPosts.length} articles on this site.
                Use the search below to filter by title.`}
          </p>
          <input
            aria-label="Search articles"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search articles"
          />
          <>
            <Icon name="search" color="gray.300" />
          </>
        </Flex>
        {!searchValue && (
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
            mt={8}
          >
            <h2>Most Popular</h2>
          </Flex>
        )}
        <Flex>
          <h1>All Posts</h1>
          {!filteredBlogPosts.length && 'No posts found.'}
          {filteredBlogPosts.map((frontMatter) => (
            <BlogPost key={frontMatter.title} {...frontMatter} />
          ))}
        </Flex>
      </Container>
    </>
  );
};

export default Blog;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 0 auto 4rem auto;
  max-width: 700px;
`;
const Flex = styled.div`
  display: flex;
  flex-direction: colum;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 700px;
`;
