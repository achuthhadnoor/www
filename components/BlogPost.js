import React from 'react';
import NextLink from 'next/link';
// import useSWR from 'swr';
// import format from 'comma-number'; 

// import fetcher from '../lib/fetcher';

const BlogPost = (frontMatter) => {
  const { title, summary } = frontMatter; 

  const slug = frontMatter.__resourcePath
    .replace('blog/', '')
    .replace('.mdx', '');

//   const { data } = useSWR(`/api/page-views?id=${slug}`, fetcher);
//   const views = data?.total;

  return (
    <NextLink href={`blog/${slug}`} passHref>
      <a>
        <div>
          <Flex>
            <h1 size="md" as="h3" mb={2} fontWeight="medium">
              {title}
            </h1>
            <p>
              {/* {`${views ? format(views) : '–––'} views`} */}
            </p>
          </Flex>
          <p>{summary}</p>
        </div>
      </a>
    </NextLink>
  );
};

export default BlogPost;

const Flex = styled.div`
    display:flex;
    flex-direction:colum;
    align-items:flex-start;
    justify-content:flex-start;
    max-width:700px;
`