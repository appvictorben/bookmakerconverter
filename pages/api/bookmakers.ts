import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json([
    { code: "1xbet:ng", name: "1xbet - Nigeria" },
    { code: "bet9ja", name: "Bet9ja" },
    { code: "22bet", name: "22Bet" },
    { code: "sportybet:ng", name: "Sportybet - Nigeria" },
  ]);
}
