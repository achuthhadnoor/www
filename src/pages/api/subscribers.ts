import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const result = await fetch("https://www.getrevue.co/api/v2/subscribers", {
    method: "GET",
    headers: {
      Authorization: `Token ${process.env.REVUE_API_KEY}`,
      "Content-Type": "application/json",
    },
  });
  const data = await result.json();

  if (!result.ok) {
    return res.status(500).json({ error: data.error.email[0] });
  }

  return res.status(200).json(data);
}
