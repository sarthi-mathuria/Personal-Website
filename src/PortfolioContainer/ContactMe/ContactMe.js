import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

import "./ContactMe.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading title={"Contact Me"} />

      <div className="social-container">
        <a
          href="https://www.linkedin.com/in/sarthimathuria"
          className="linkedin social"
        >
          <FontAwesomeIcon icon={faLinkedin} size="3x" />
        </a>
        <a
          href="https://github.com/sarthi-mathuria"
          className="github social"
        >
          <FontAwesomeIcon icon={faGithub} size="3x" />
        </a>
        <a href="mailto:sarthimathuria@utexas.edu" className="mail social">
          <FontAwesomeIcon icon={faEnvelope} size="3x" />
        </a>
        <a
          href="https://www.instagram.com/sarthi.mathuria"
          className="instagram social"
        >
          <FontAwesomeIcon icon={faInstagram} size="3x" />
        </a>
      </div>
      <div className="mail-container">
        <a href="mailto:sarthimathuria@utexas.edu">sarthimathuria@utexas.edu</a>
      </div>
    </div>
  );
}

{
  /* <div className="colz">
<div className="colz-icon">
  <a href="https://web.facebook.com/?_rdc=1&_rdr">
    <i className="fa fa-facebook-square" />
  </a>
  <a href="#">
    <i className="fa fa-google-plus-square" />
  </a>
  <a href="https://www.instagram.com/instructor_ehizeex/">
    <i className="fa fa-instagram" />
  </a>
  <a href="https://www.youtube.com/channel/UCSSr5ZDFbilpZ592_ycoAwA">
    <i className="fa fa-youtube-square" />
  </a>
  <a href="https://twitter.com/Ehiedu_baba">
    <i className="fa fa-twitter" />
  </a>
</div>
</div> */
}
