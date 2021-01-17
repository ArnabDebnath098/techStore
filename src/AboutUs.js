import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="aboutUs">
      <div className="aboutUs-first">
        <h1>ABOUT SJFTECHSTORE</h1>
        <hr />
        <p>
          At Sjftechstore, we provide you with an excellent shopping experience as our clients’
          satisfaction matters a lot. We have the perfect combination of products that are tailored
          to meet your needs through our standard shopping practice. Even if you are not sure of
          what you want, our e-shop has got several ways to help you identify your needs.
        </p>
        <button href="aboutus.html">READ MORE</button>
      </div>

      <div className="securityCams">
        <div className="securityCams-left">
          <h1>SECURITY CAM'S</h1>

          <p>
            Secure your entire home with our security cams. Choose from a range of carefully-curated
            cams or design your own to suit your home and family.
          </p>
          <button href="aboutus.html">VIEW ALL</button>
        </div>
        <div className="securityCams-right"></div>
      </div>
      <div className="smartImage">
        <div className="smartImage-container">
          <h2>SMART IMAGE ENHANCEMENT</h2>
          <p>GET A CLEARER, BRIGHTER VIEW OF THE PEOPLE IN-SHOT</p>
          <button href="aboutus.html">BUY NOW</button>
        </div>
      </div>
      <div className="videoDoorbell">
        <div className="videoDoorbell-left"></div>
        <div className="videoDoorbell-right">
          <h1>VIDEO DOORBELL (WIRED)</h1>

          <p>
            Get instant alert for anyone who approaches, even if they don't press the doorbell. HDR
            imaging ensures high clarity for backlit or low-light scenarios, providing a clear image
            day and night. Receive facial snapshot notifications so that you can quickly check who
            is at the door.
          </p>
          <button href="aboutus.html">SHOP NOW</button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
