import React, { useState } from 'react';
import { NextSeo } from 'next-seo';

import { frontMatter as blogPosts } from './blog/**/*.mdx';
import styled from 'styled-components';

const url = 'https://achuth.now.sh/blog';
const title = 'Blog – Achuth hadnoor';
const description =
  'My Insights on Software Industry , programming ,tech , Design and personal life';

const Blog = () => {
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
      <div>
        <h1>Blog</h1>
        <p>{`
            I am Focust on creating content for designers , developers and makers to give the community.
        `}</p>
        <h1>All Posts</h1>
      </div>
    </>
  );
};
export default Blog;
