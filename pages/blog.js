import React, { useState } from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { frontMatter as blogPosts } from './blog/**/*.mdx';

const url = 'https://achuth.now.sh/blog';
const title = 'Blog – Achuth hadnoor';
const description =
  'My Insights on Software Industry , programming ,tech , Design and personal life';

const Blog = () => {
  console.log(blogPosts);

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
        {blogPosts.map((b, i) => (
          <Link key={`blog-${i}`} href={b.slug}>
            <a
              style={{
                display: 'block',
                border: '1px solid #aaa',
                padding: '5px 10px ',
                borderRadius: '5px'
              }}
            >
              <h3>{b.title}</h3>
              <p>{b.summary}</p>
              <div style={{ display: 'flex' }}>
                <span style={{ padding: '0px 10px ' }}>
                  {b.readingTime.text}
                </span>{' '}
                {` `}
                <span style={{ padding: '0px 10px ' }}>
                  {b.readingTime.words} words{' '}
                </span>
                {` `}
                <span style={{ padding: '0px 10px ' }}>
                  Published at {b.publishedAt}
                </span>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};
export default Blog;
