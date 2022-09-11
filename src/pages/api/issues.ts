import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(process.env.REVUE_API_KEY);
  const result = await fetch("https://www.getrevue.co/api/v2/issues", {
    method: "GET",
    headers: {
      Authorization: `Token ${process.env.REVUE_API_KEY}`,
      "Content-Type": "application/json",
    },
  });
  const data = await result.json();
  console.log(data);

  if (!result.ok) {
    return res.status(500).json({ error: "Error retrieving issues" });
  }
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=1200, stale-while-revalidate=600"
  );
  return res.status(201).json({ issues: data });
}
