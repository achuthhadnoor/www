import React, { useState } from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { frontMatter as blogPosts } from './blog/**/*.mdx';
import {
  H1,
  Title,
  SubTitle,
  H3,
  P,
  H2,
  Row,
  Ul
} from '../components/mdx_components';

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
      <div style={{ maxWidth: '300px', display: 'flex', alignItems: 'center' }}>
        <hr style={{ flex: 1 }} />
        <Title style={{ padding: '0px 10px' }}>Articles</Title>
      </div>
      <H1 style={{ margin: '40px 10px' }}>Recently published</H1>
      <Ul>
        {blogPosts.map((b, i) => (
          <Row key={`blog-${i}`}>
            <H2 style={{ fontWeight: '600' }}>{b.title}</H2>
            <P style={{ margin: '10px 0px' }}>{b.summary}</P>
            <div style={{ display: 'flex' }}>
              <span style={{ paddingRight: 20 }}>{b.publishedAt}</span>
              <span style={{ paddingRight: 20 }}>
                {b.readingTime.words} words
              </span>
              <span style={{ paddingRight: 20 }}>{b.readingTime.text}</span>
              <Link href={b.slug}>
                <a style={{ paddingRight: 20 }}>
                  <span className="readmore">
                    Read more <span className="arrow">&rarr;</span>
                  </span>
                </a>
              </Link>
            </div>
          </Row>
        ))}
      </Ul>
    </>
  );
};
export default Blog;
