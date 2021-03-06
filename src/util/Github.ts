import axios, { AxiosResponse } from "axios";
import type { LatestRelease, GithubDownloads } from "./Types";

export interface Github {
  url: string;
  assets_url: string;
  upload_url: string;
  html_url: string;
  id: number;
  author: UploaderOrAuthor;
  node_id: string;
  tag_name: string;
  target_commitish: string;
  name: string;
  draft: boolean;
  prerelease: boolean;
  created_at: string;
  published_at: string;
  assets: AssetsEntity[];
  tarball_url: string;
  zipball_url: string;
  body: string;
}

export interface UploaderOrAuthor {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

export interface AssetsEntity {
  url: string;
  id: number;
  node_id: string;
  name: string;
  label?: null;
  uploader: UploaderOrAuthor;
  content_type: string;
  state: string;
  size: number;
  download_count: number;
  created_at: string;
  updated_at: string;
  browser_download_url: string;
}

export type GithubResponse = AxiosResponse<Github[]>;
type GitHubPromise = Promise<GithubResponse>;

type HelperObj = {
  ETag: string;
  Downloads: GithubDownloads;
  ReleaseInfo: LatestRelease;
};
type GithubHelper = {
  server: HelperObj;
  client: HelperObj;
};

const github = axios.create({
  baseURL: "https://api.github.com",
});

/** Faux cache object */
export const GH: GithubHelper = {
  server: {
    ETag: "",
    Downloads: { TotalDownloads: 0 },
    ReleaseInfo: {
      Version: "0.0.0",
      ReleasePage: "N/A",
      Downloads: [],
    },
  },
  client: {
    ETag: "",
    Downloads: { TotalDownloads: 0 },
    ReleaseInfo: {
      Version: "0.0.0",
      ReleasePage: "N/A",
      Downloads: [],
    },
  },
};

export async function getGithub(repo: "server" | "client"): GitHubPromise {
  let auth: any = undefined;
  const owner = process.env.NEXT_PUBLIC_REPO_OWNER;
  //* Check to see if github credentials exist
  if (process.env.GITHUB_USR && process.env.GITHUB_KEY) {
    auth = {
      username: process.env.GITHUB_USR,
      password: process.env.GITHUB_KEY,
    };
  }

  return github.get(`/repos/${owner}/${repo}/releases`, {
    headers: { "If-None-Match": GH[repo].ETag },
    auth: auth,
  });
}
