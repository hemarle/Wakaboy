import React from "react";
import "./Footer.css";
import ziglaIcon from "./images/zigla.png";
import facebook from "./images/waka/facebook.svg";
import instagram from "./images/waka/instagram.svg";
import twitter from "./images/waka/twitter.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__Left">
        <img src={ziglaIcon} alt="" />
        <p> 2021, Zigla</p>
      </div>
      <div className="footer__Center">
        <h3>Stay Connected</h3>
        <div className="footer__Social">
          <a href="#">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="#">
            <img src={instagram} alt="" />
          </a>
          <a href="#">
            <img src={twitter} alt="" />
          </a>
        </div>
      </div>
      <div className="footer__Right">
        <h3>Subscribe</h3>
        <div className="footer__Send">
          <input
            className="input"
            type="email"
            name="footEmail"
            id="footEmail"
          />
          <input className="button" type="submit" value="Send" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
