import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started</span>
          <span className="secondaryText">
            Register and start using our platform
            <br />
            to manage your properties and find yourself a home
          </span>
          <button className="button">
            <a href="mailto:tkabanda@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
