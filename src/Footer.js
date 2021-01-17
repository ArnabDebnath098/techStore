import React from "react";
import "./Footer.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

function Footer() {
  return (
    <div className="footer">
      <div className="footerTop">
        <div className="footerTop-logo">
          <img src="https://i.ibb.co/ZWV4NVR/SJF-WHITE-400x.png" alt="imagess" />
          <div className="headerTop-left">
            <TwitterIcon className="icon" />
            <FacebookIcon className="icon" />
            <InstagramIcon className="icon" />
          </div>
        </div>
        <div className="footerTop-customer">
          <h3>CUSTOMER CARE</h3>
          <a href="aboutus.html">FAQ </a>
          <a href="aboutus.html">About Us</a>
          <a href="aboutus.html">Contact Us</a>
          <a href="aboutus.html">Track Your Order</a>
        </div>
        <div className="footerTop-policy">
          <h3>OUR POLICIES</h3>
          <a href="aboutus.html">Privacy Policy </a>
          <a href="aboutus.html">Refund Policy</a>
          <a href="aboutus.html">Shipping Policy</a>
          <a href="aboutus.html">Terms of service</a>
        </div>
        <div className="footerTop-goal">
          <h3>OUR GOAL</h3>
          <p>
            Everything about Sjftechstore revolves around our commitment to help you look your best
            and inspire confidence in you. We have been operating for over One Year and we have
            managed to build up a reputable establishment online.
          </p>
        </div>
      </div>
      <hr />
      <div className="footerBottom">
        <p>© 2021 Sjftechstore.</p>
      </div>
    </div>
  );
}

export default Footer;
