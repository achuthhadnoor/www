import { writeFileSync } from "fs";
import RSS from "rss";
import { allBlogs } from "../.contentlayer/generated/Blog/_index.mjs";

async function generate() {
  const feed = new RSS({
    title: "Achuth Hadnoor",
    site_url: "https://achuth.dev",
    feed_url: "https://achuth.dev/feed.xml",
  });

  allBlogs.map((post) => {
    feed.item({
      title: post.title,
      url: `https://achuth.dev/blog/${post.slug}`,
      date: post.publishedAt,
      description: post.summary,
    });
  });

  writeFileSync("./public/feed.xml", feed.xml({ indent: true }));
}

generate();
