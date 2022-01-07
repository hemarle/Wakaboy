import React from "react";
import Download from "./Download";
import "./Home.css";
import illustration from "./images/waka/index-header.webp";
function Home() {
  return (
    <div className="home">
      <div className="home__Image">
        <img src={illustration} alt="home illustration" />
      </div>
      <div className="home__Content">
        <h1 className="home__Title">
          Get your errands done <span> Fast</span>
        </h1>
        <p className="home__About">Download WakaBoy app</p>
    <div className="home__Links">

     <Download/>
    </div>
      </div>
    </div>
  );
}

export default Home;
