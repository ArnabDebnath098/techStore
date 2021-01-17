import React from "react";
import "./Down.css";

function Down() {
  return (
    <div className="down">
      <div className="frontDoor">
        <div className="frontDoor-container">
          <h2>SMART IMAGE ENHANCEMENT</h2>
          <p>GET A CLEARER, BRIGHTER VIEW OF THE PEOPLE IN-SHOT</p>
          <button href="aboutus.html">BUY NOW</button>
        </div>
      </div>
      <div className="warning">
        <div className="warning-left">
          <h1>A HARSH WARNING TO UNWANTED GUEST</h1>

          <p>
            Adjust the brightness to suit your surroundings. Scare off intruders or light up the way
            when you get home late. Activate or dim the floodlights via voice command on Amazon
            Alexa or Google Assistant. Customize detection settings to suit your surroundings. When
            a relevant event is identified the footage will be recorded and an instant alert will be
            sent.
          </p>
          <button>SHOP NOW</button>
        </div>
        <div className="warning-right"></div>
      </div>
      <div className="notified">
        <div className="notified-container">
          <h2>GET NOTIFIED IMMEDIATELY</h2>
          <p>INSTANT ALERTS ALLOW YOU TO ALWAYS HAVE AN EYE ON YOUR HOME</p>
          <button href="aboutus.html">SHOP NOW</button>
        </div>
      </div>
      <div className="review">
        <h1>
          why customer ❤️ <br /> "sjftechstore"
        </h1>
        <hr />
      </div>
      <div className="signUp">
        <h3>SIGN UP FOR UPDATES</h3>
        <p>Sign up to get the latest on sales, new releases and more …</p>
        <div className="mail">
          <input type="email" placeholder="Enter your email address" />
          <button href="aboutus.html">SIGN UP</button>
        </div>
      </div>
    </div>
  );
}

export default Down;
