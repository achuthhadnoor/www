import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const API_KEY = process.env.BUTTONDOWN_API_KEY;
    const response = await fetch(
      `https://api.buttondown.email/v1/subscribers`,
      {
        body: JSON.stringify({ email }),
        headers: {
          Authorization: `Token ${API_KEY}`,
          "Content-Type": "application/json",
        },
        method: "POST",
      }
    );
    console.log(response);

    if (response.status >= 400) {
      return res.status(400).json({
        error: `There was an error subscribing to the newsletter.`,
      });
    }

    res.setHeader(
      "Cache-Control",
      "public, s-maxage=1200, stale-while-revalidate=600"
    );

    return res.status(201).json({ error: "" });
  } catch (error) {
    res.setHeader(
      "Cache-Control",
      "public, s-maxage=1200, stale-while-revalidate=600"
    );
    return res.status(500).json({ error: error.message || error.toString() });
  }
}
