import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";

export default function log(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == "POST") {
    if (req.body && req.body.path) {
      const data =
        req.body.date +
        " " +
        req.body.path +
        " " +
        (req.body.id ? req.body.id : "");
      fs.appendFileSync("log.txt", data + "\n");
      res.status(200).send("ok.");
      return;
    }
  }
  res.status(500).send("Internal Error.");
}
