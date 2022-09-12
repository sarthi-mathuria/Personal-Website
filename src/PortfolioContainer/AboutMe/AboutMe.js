import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  // const SCREEN_CONSTSANTS = {
  //   description:
  //    ,
  //   highlights: {
  //     bullets: [
  //       "Full Stack web and mobile development",
  //       "Interactive Front End as per the design",
  //       "React and React Native",
  //       "Redux for State Mnanagement",
  //       "Building REST API",
  //       "Managing database",
  //     ],
  //     heading: "Here are a Few Highlights:",
  //   },
  // };
  // const renderHighlight = () => {
  //   return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
  //     <div className="highlight" key={i}>
  //       <div className="highlight-blob"></div>
  //       <span>{value}</span>
  //     </div>
  //   ));
  // };

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              <div>
                Gang! My name is Sarthi Mathuria and I'm passionate about leveraging software to bring innovative ideas to life.
                
                Currently, I'm a student at UT Austin majoring in Computer Science with a minor in Business. 
                <br />
                <br />
                I've been programming for ~3 years, gaining experience in working with a ton of different technologies and meeting some amazing people.

                <br />
                <br />
                Please feel free to reach out at sarthimathuria@utexas.edu
              </div>
              {/* {SCREEN_CONSTSANTS.description} */}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                {/* <span>{SCREEN_CONSTSANTS.highlights.heading}</span> */}
              </div>
              {/* {renderHighlight()} */}
            </div>              
          </div>
        </div>
      </div>
    </div>
  );
}