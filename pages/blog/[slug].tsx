import { useMDXComponent } from "next-contentlayer/hooks";
// import { getTweets } from 'lib/twitter';
import components from "components/MDXcomponents";
import BlogLayout from "layouts/blog";
// import Tweet from 'components/Tweet';
import { allBlogs } from "contentlayer/generated";
import type { Blog } from "contentlayer/generated";
import { pick } from "contentlayer/client";

export default function Post({ post, posts }: { post: Blog; posts: Blog[] }) {
  const Component = useMDXComponent(post.body.code);
  //   const StaticTweet = ({ id }:any) => {
  //     const tweet = tweets.find((tweet) => tweet.id === id);
  //     return <Tweet {...tweet} />;
  //   };

  return (
    <BlogLayout post={post} posts={posts}>
      <Component
        components={
          {
            ...components,
            // StaticTweet
          } as any
        }
      />
    </BlogLayout>
  );
}

export async function getStaticPaths() {
  return {
    paths: allBlogs.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const post = allBlogs.find((post) => post.slug === params.slug);
  //   const tweets = await getTweets(post.tweetIds);
  const posts = allBlogs
    .filter(
      (postItem) =>
        postItem._id !== post?._id &&
        pick(postItem, [
          "slug",
          "title",
          "summary",
          "publishedAt",
          "tags",
          "image",
          "readingTime",
          "_id",
        ])
    )
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );

  return { props: { post, posts: posts.slice(0, 3) } };
}
