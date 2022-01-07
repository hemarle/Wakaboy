import React from "react";
import "./Ride.css";
import phoneIcon from './images/waka/index-phone.png'
function Ride() {
  return (
    <div className="ride">
      <div className="ride__Image">
        <img src={phoneIcon} alt="" />
      </div>
      <div className="ride__Content">
        <h2>Get an errand boy in minutes</h2>
        <p>
          Pick you location and goods you want, then it gets delivered to you
          asap
        </p>
      </div>
      <div className="ride_Image"></div>
    </div>
  );
}

export default Ride;
