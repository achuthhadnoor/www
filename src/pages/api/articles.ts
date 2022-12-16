import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const GET_USER_ARTICLES = `
    query {
        user(username: "achuth") {
            publication{
              posts {
                _id,
                title,
                brief,
                slug
                dateAdded,
                coverImage
              }
            }
        }
    }
`;

  const result = await fetch("https://api.hashnode.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: GET_USER_ARTICLES,
      variables: {},
    }),
  });
  const result_data = await result.json();

  const data = result_data.data.user.publication.posts;

  if (!result.ok) {
    return res.status(500).json({ error: "Error retrieving issues" });
  }
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=1200, stale-while-revalidate=600"
  );
  return res.status(201).json([...data]);
}
