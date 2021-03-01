import { NextApiRequest, NextApiResponse } from "next";
import { prettyPrint, queryParser } from "@util";
import { getGithub, GithubResponse, GH } from "@util/Github";

/** Initial Count prior to 1.0.0 */
const init_count = {
  client: 1529,
  server: 1650,
};

const sumTotalDownloads = (response: GithubResponse) => {
  const num_arr: number[] = response.data.map((item) => {
    return item.assets.reduce((a, b) => a + b.download_count, 0);
  });
  return num_arr.reduce((a, b) => a + b);
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader("Content-Type", "application/json");
  const repo = queryParser(req.query.REPO);
  try {
    const repoDeets = await getGithub(repo);
    GH.setETag(repoDeets.headers.etag);
    res.statusCode = 200;
    const raw = {
      "Total Downloads": sumTotalDownloads(repoDeets) + init_count[repo],
    };
    GH.setDownloads(raw);
    res.send(prettyPrint(raw));
  } catch (error) {
    if (error.response?.status === 304) {
      // console.log("Not a real error");
      res.send(prettyPrint(GH.getDownloads()));
    } else {
      res.status(400).json(error.response.data);
    }
  }
};
