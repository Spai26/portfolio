import {
  AiOutlineHome,
  AiOutlineContacts,
  AiOutlineFolderOpen,
  AiOutlineFundProjectionScreen,
  AiOutlineFileDone,
} from "react-icons/ai";
export const navigations = [
  {
    id: 1,
    name: "home",
    href: "#home",
    icon: <AiOutlineHome />,
  },
  {
    id: 2,
    name: "about me",
    href: "#aboutme",
    icon: <AiOutlineFileDone />,
  },

  {
    id: 3,
    name: "services",
    href: "#services",
    icon: <AiOutlineFundProjectionScreen />,
  },

  {
    id: 4,
    name: "portfolio",
    href: "#portfolio",
    icon: <AiOutlineFolderOpen />,
  },

  {
    id: 5,
    name: "contact me",
    href: "#contactme",
    icon: <AiOutlineContacts />,
  },
];

import { BsFacebook, BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
export const socials = [
  { url: "https://www.linkedin.com/in/sergioai93/", svg: <BsLinkedin /> },
  { url: "https://twitter.com/sergioai93", svg: <BsTwitter /> },
  { url: "https://www.facebook.com/SergioAi.93/", svg: <BsFacebook /> },
  { url: "https://github.com/Spai26", svg: <BsGithub /> },
];
