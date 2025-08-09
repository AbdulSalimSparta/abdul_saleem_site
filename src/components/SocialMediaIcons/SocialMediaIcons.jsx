import {FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import style from "./SocialMediaIcons.module.css";
import {FaXTwitter} from 'react-icons/fa6'

const SocialMediaIcons = () => (
   <div className={style.socialcontainer}>
    <a href="https://www.instagram.com/_sparta_salim" target="_blank" rel="noopener noreferrer"  aria-label="Instagram">
      <FaInstagram className={style.sociallinks} color="#ffffff" />
    </a>
    <a href="https://x.com/as_bgm" target="_blank" rel="noopener noreferrer"  aria-label="Twitter">
      <FaXTwitter className={style.sociallinks} color="#ffffff" />
    </a>
    <a href="https://github.com/AbdulSalimSparta" target="_blank" rel="noopener noreferrer"  aria-label="Github">
      <FaGithub className={style.sociallinks} color="#ffffff" />
    </a>
    <a href="https://www.linkedin.com/in/abdul-saleem-t-a-982485227/" target="_blank" rel="noopener noreferrer"  aria-label="Linkedin">
      <FaLinkedin className={style.sociallinks} color="#ffffff" />
    </a>
  </div>
);

export default SocialMediaIcons;
