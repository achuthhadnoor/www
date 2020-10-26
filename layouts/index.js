import React from 'react';
import { parseISO, format } from 'date-fns';
import BlogSeo from '../components/BlogSeo';
import Nav from '../components/Nav';
import Link from 'next/link';
import { Row, P, SubTitle, H3, H1 } from '../components/mdx_components';
import Icon from 'react-icons-kit';
import { pencil } from 'react-icons-kit/fa';
import { messageCircle } from 'react-icons-kit/feather';
import styled from 'styled-components';

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
      <Wrapper>
        <BlogSeo url={`https://achuth.now.sh/blog/${slug}`} {...frontMatter} />
        <Link href="/blog">
          <H3 style={{ cursor: 'pointer' }}>&larr; BACK</H3>
        </Link>
        <div
          style={{
            maxWidth: '600px',
            marginTop: 20,
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <hr style={{ maxWidth: '100px', width: '100%' }} />
          <div>
            <SubTitle>{frontMatter.title}</SubTitle>
            <div>
              <a href={editUrl(slug)}>
                <Icon icon={pencil} style={{ padding: 10 }} />
              </a>
              <a href={discussUrl(slug)}>
                <Icon icon={messageCircle} style={{ padding: 10 }} />
              </a>
            </div>
          </div>
        </div>
        <Row>{children}</Row>
      </Wrapper>
    );
  };
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
