import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { from, to, code } = req.body;
  if (!from || !to || !code)
    return res.status(400).json({ error: "Missing fields." });

  // Mock conversion logic
  const converted = `${to.toUpperCase()}-${code}-X`;
  res.status(200).json({
    success: true,
    from,
    to,
    originalCode: code,
    converted,
  });
}
