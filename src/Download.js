import React from "react";
import "./Download.css";
import apple from "./images/waka/iphone.svg";
import playstore from "./images/waka/playstoreIcon.svg";
function Download() {
  return (
    <div className="download">
      <div className="download__Links">
        <a className="download__Link" href="/login">
          <img src={apple} alt="apple" />
        </a>
        <a className="download__Link" href="/login">
          <img src={playstore} alt="apple" />
        </a>
      </div>
    </div>
  );
}

export default Download;
