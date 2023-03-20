

import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { IconType } from "react-icons/lib";

export interface SocialDataObject {
  ariaLabel?: string;
  icon?: IconType;
  link?: string;
}

const SocialLinks: Array<SocialDataObject> = [
  {
    ariaLabel: "Github",
    icon: AiOutlineGithub,
    link: 'https://github.com/IsSabuhi'
  },
  {
    ariaLabel: "Twitter",
    icon: AiOutlineTwitter,
    link: ''
  },
  {
    ariaLabel: "Telegram",
    icon: FaTelegram,
    link: ''
  },
  {
    ariaLabel: "Instagram",
    icon: AiFillInstagram,
    link: ''
  }
];

export default SocialLinks;
