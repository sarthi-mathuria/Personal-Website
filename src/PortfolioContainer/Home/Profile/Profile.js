import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                Hi, I'm <span className="highlighted-text">Sarthi Mathuria </span>
              </h1>
            </span>
            <span className="profile-role-tagline">
              I'm a software developer based in Texas
            </span>
          </div>

          <div className="profile-options">
          <button className="btn primary-btn"
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            > Get In Touch </button>
            <a href="Sarthi Mathuria Resume.pdf" target="_blank">
              <button className="btn highlighted-btn">Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}