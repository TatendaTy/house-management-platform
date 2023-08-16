import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={120} />

          <span className="secondaryText">
            Our mission is to help you find the right place to live in the city
            of your choice.
            <br />
            We do this by providing you with a list of the best residencies.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Details</span>
          <span className="secondaryText">123 USIU-Road Nairobi</span>

          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Products</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
