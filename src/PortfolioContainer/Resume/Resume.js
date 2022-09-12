import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading2 ? props.subHeading2 : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education & Skills", logoSrc: "education.svg" },
    { label: "Experience", logoSrc: "work-history.svg" },
    { label: "Experience Continued", logoSrc: "work-history.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Projects Continued", logoSrc: "projects.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "React Native", ratingPercentage: 85 },
    { skill: "Express JS", ratingPercentage: 89 },
    { skill: "Node JS", ratingPercentage: 89 },
    { skill: "Mongo Db", ratingPercentage: 70 },
    { skill: "Core Java", ratingPercentage: 80 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: "Huffman Compressor",
      duration: { fromDate: "", toDate: "" },
      subHeading: "Built a lossless data compression program that uses binary trees, priority queues, and hash maps.",
      subHeading2: "Compressed and decompressed files using the standard Huffman algorithm for encoding and decoding.",
    },
    {
      title: "Sorting Visualizer",
      duration: { fromDate: "", toDate: "" },
      subHeading:
        "Created an application for visualizing 5 sorting algorithms.",
        subHeading2:
        "Visualize it here: https://sarthi-mathuria.github.io/Sorting-Visualizer/",
    },

  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"University of Texas at Austin"}
        subHeading={"BSA in Computer Science, Minor in Business"}
        subHeading2={"GPA: 3.87"}
        fromDate={"Expected"}
        toDate={" May 2024"}
      />

      <ResumeHeading
        heading={"Skills"}
        subHeading = {"Languages: Java, R; Familiar with: C"}
        subHeading2 = {"Tools/Platforms/Frameworks: React.js, HTML, CSS, Git"}
      />

    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Congressional Campaign"}
          subHeading={"Data Analyst Intern"}
          fromDate={"Summer"}
          toDate={"2020"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
          - Implemented predictive modeling to data sets using linear regression to measure progress for the campaign.
          </span>
          <br />
          <span className="resume-description-text">
          - Created relationships between different databases and raw data sets to identify voters to target and allocate resources to.
          </span>
          <br />
          <span className="resume-description-text">
            - R, Excel{" "}
          </span>

        </div>
        
      </div>

      
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="work-experience"
    >
      <div className="experience-container">
        <ResumeHeading
          heading={"Rice University STEM Department"}
          subHeading={"Data Analytics Research Intern"}
          fromDate={"Summer"}
          toDate={"2019"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
          - Conducted interdisciplinary research combining statistical mechanics and Bayesian statistical reasoning with computer data simulations.
          </span>
          <br />
          <span className="resume-description-text">
            - Java{" "}
          </span>

        </div>
        
      </div>
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          subHeading2={projectsDetails.subHeading2}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* projects continued */
    <div className="resume-screen-container" key="interests">
      
      
      <ResumeHeading
        heading="Evil Hangman"
        subHeading="Developed a program that cheats at the classic game Hangman."
        subHeading2="Implemented 3 levels of difficulty from 3 different algorithms that delay choosing a word until the end of the game."
        
      />

      <ResumeHeading
      heading="All projects on github.com/sarthi-mathuria"
      />
      
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={""} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;