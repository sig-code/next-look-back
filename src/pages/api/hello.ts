// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id: number;
  data: {
    name: string;
    email: string;
    tel: string;
  };
};

// ダミーデータ
const data = [
  { name: "-", email: "-", tel: "-" },
  { name: "Taro", email: "taro@yamada", tel: "090-999-999" },
  { name: "Hanako", email: "hanako@flower", tel: "080-888-888" },
  { name: "Sachiko", email: "sachiko@happy", tel: "070-777-777" },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | string>
) {
  if (req.method == "GET") {
    res.status(200).send("Cannot access this api");
    return;
  }

  if (req.method == "POST") {
    const id = req.query.id ? +req.query.id : 0;
    const result = data[id] ? data[id] : data[0];
    res.status(200).json({ id: id, data: result });
  }
}
