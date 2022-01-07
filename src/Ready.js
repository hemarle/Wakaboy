import React from "react";
import Download from "./Download";
import "./Ready.css";
function Ready() {
  return (
    <div className="ready">
      <h1>Need an errand boy?</h1>
     <Download/>
      <p className="ready__Signup">
        Or <a href="/signup">sign up</a> to become an errand boy
      </p>
    </div>
  );
}

export default Ready;
