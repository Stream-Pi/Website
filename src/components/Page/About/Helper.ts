import { TeamMember, MyIconHelper, PersonIcon, IconObj } from "@util/Types";

export type TeamRow = {
  teamMembers: TeamMember[];
  className?: string;
  identifier: string;
};

export type SocialBubbleProps = {
  IcoPre: IconObj["IcoPre"];
  IcoName: IconObj["IcoName"];
  text: string;
  className?: string;
  iconClassName?: string;
  textClassName?: string;
};

const sampic = "/images/sampic.png";
const defaultpic = "/images/defpic.png";
const togpic = "/images/togpic.png";
const brapic = "/images/brapic.jpg";

const { TwitterIcon, GithubIcon, YouTubeIcon } = MyIconHelper;

export const Samuel: TeamMember = {
  name: "Samuel Quinones",
  picture: sampic,
  icons: [
    TwitterIcon("https://twitter.com/SamuelQuinones1"),
    GithubIcon("https://github.com/SamuelQuinones"),
    YouTubeIcon("http://corporalsaturn.com/"),
    new PersonIcon("fas", "globe", "Website", "https://samtheq.com"),
  ],
};

export const Debayan: TeamMember = {
  name: "Debayan Sutradhar",
  picture: defaultpic,
  icons: [
    TwitterIcon("https://twitter.com/rnayabed"),
    GithubIcon("https://github.com/rnayabed/"),
    YouTubeIcon("https://www.youtube.com/channel/UCuMkj5u1wC70KtuXWHLTfkQ"),
  ],
};

// CR / User Experience
export const TOGLK: TeamMember = {
  name: "Toglk",
  picture: togpic,
  icons: [GithubIcon("https://github.com/TOGLK")],
};

export const Brady: TeamMember = {
  name: "Brady",
  picture: brapic,
  icons: [GithubIcon("https://github.com/Brady-StreamPi")],
};

// Infrastructure
export const Jtoland: TeamMember = {
  name: "Jason Toland",
  picture: defaultpic,
  icons: [GithubIcon("https://github.com/jtoland")],
};

export const Developers = [Samuel, Debayan];
export const CommunityRelations = [Brady];
export const UserExperience = [TOGLK];
export const Infrastructure = [Jtoland];
