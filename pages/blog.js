import React, { useState } from 'react';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { frontMatter as blogPosts } from './blog/*.mdx';
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
import { Twitter } from '../icons';
import styled from 'styled-components';

const url = 'https://achuth.now.sh/blog';
const title = 'Blog – Achuth hadnoor';
const description =
  'My Insights on Software Industry , programming ,tech , Design and personal life';

const Blog = () => {
  return (
    <Wrapper>
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
      <Ul style={{ flexDirection: 'column' }}>
        {blogPosts.map((b, i) => (
          <BlogPostDiv i={i} b={b} key={`blog-${i}`} />
        ))}
      </Ul>
    </Wrapper>
  );
};

export default Blog;

const BlogPostDiv = ({ i, b, ...props }) => {
  return (
    <Row {...props}>
      <Link href={b.slug}>
        <a>
          <H2 style={{ fontWeight: '600' }}>{b.title}</H2>
        </a>
      </Link>
      <P style={{ margin: '10px 0px', maxWidth: '800px' }}>{b.summary}</P>
      <div style={{ display: 'flex', alignItems: 'center', maxWidth: '450px' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ paddingRight: 20 }}>{b.publishedAt}</span>
          <span style={{ paddingRight: 20 }}>{b.readingTime.text}</span>
        </div>
        <div style={{ display: 'flex', flex: 1 }}>
          <span style={{ paddingRight: 20 }}>
            <Twitter />
          </span>
          <Link href={b.slug}>
            <a style={{ paddingRight: 20, fontWeight: 500 }}>
              <span className="readmore">
                Read more <span className="arrow">&rarr;</span>
              </span>
            </a>
          </Link>
        </div>
      </div>
    </Row>
  );
};

const Wrapper = styled.div`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  min-height: 100vh;
  padding: 20px;
  margin: auto;
  opacity: 0;
  animation: bcCCNc 0.6s 0.3s ease-in-out forwards;
  @media (min-width: 960px) {
    & {
      max-width: 940px;
      padding: 20px;
      margin: auto;
    }
  }
  @media (min-width: 1200px) {
    & {
      max-width: 1200px;
      padding: 20px;
    }
  }

  /* sc-component-id: sc-keyframes-bcCCNc */
  @-webkit-keyframes bcCCNc {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes bcCCNc {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  /* sc-component-id: sc-keyframes-iuhkkK */
  @-webkit-keyframes iuhkkK {
    from {
      width: 0px;
      opacity: 0;
    }
    to {
      width: 200px;
      opacity: 1;
    }
  }
  @keyframes iuhkkK {
    from {
      width: 0px;
      opacity: 0;
    }
    to {
      width: 200px;
      opacity: 1;
    }
  }
  /* sc-component-id: sc-keyframes-gztygP */
  @-webkit-keyframes gztygP {
    from {
      -webkit-transform: translateY(30px);
      -ms-transform: translateY(30px);
      transform: translateY(30px);
      opacity: 0;
    }
    to {
      -webkit-transform: translateY(0);
      -ms-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes gztygP {
    from {
      -webkit-transform: translateY(30px);
      -ms-transform: translateY(30px);
      transform: translateY(30px);
      opacity: 0;
    }
    to {
      -webkit-transform: translateY(0);
      -ms-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
