import "./index.css";
import {
  faGithub,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialMedia = () => {
  return (
    <div className="social-links">
      <a
        href="https://www.youtube.com/@MDigitalCode"
        target="_blank"
        rel="noreferrer"
        aria-label="Twitter"
      >
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a
        href="https://github.com/fmezac"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a
        href="https://pe.linkedin.com/in/federico-meza-colorado-254837120"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
    </div>
  );
};

export default SocialMedia;
