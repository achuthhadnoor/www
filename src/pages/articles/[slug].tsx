import React from "react";
import { useRouter } from "next/router";
import { allBlogs } from ".contentlayer/generated";
import { pick } from "contentlayer/client";
import { useMDXComponent } from "next-contentlayer/hooks";
import BlogLayout from "src/layouts/blogLayout";

export default function Post({ post, posts }) {
  const router = useRouter();
  const { pid } = router.query;
  const Component = useMDXComponent(post.body.code);
  return (
    <BlogLayout post={post} posts={posts}>
      <Component />
    </BlogLayout>
  );
}

export async function getStaticPaths(p) {
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
