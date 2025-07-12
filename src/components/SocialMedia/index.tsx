import "./index.css";
import {
  faGithub,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const SocialMedia = () => {
  const [showSocials, setShowSocials] = useState(false);

  const handleToggleSocials = () => {
    setShowSocials((prev) => !prev);
  };

  return (
    <div>
      <div className="floating-btn" onClick={handleToggleSocials}>
        <FontAwesomeIcon icon={faPlus} color="#fff" />
      </div>

      {showSocials && (
        <div className="social-links">
          <a
            href="https://www.youtube.com/@MDigitalCode"
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
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
      )}
    </div>
  );
};

export default SocialMedia;
