import React from "react";
import "./About.css";
function About() {
  return (
    <div className="about">
      <div className="about__Left">
        <h2>Earn cash by running errands</h2>

        <p> It's time to start earning cash on your free period</p>
      </div>

      <div className="about__Right">
        <a href="/signIn">Sign Up to drive</a>
      </div>
    </div>
  );
}

export default About;
