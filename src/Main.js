import React from "react";
import "./Main.css";
import About from "./About";
import Footer from './Footer'
import Home from "./Home";
import Navigation from './Navigation'
import Ready from "./Ready";
import Ride from "./Ride";
import Services from "./Services";
import carIcon from "./images/car.svg";
import wallet from './images/waka/wallet.svg'
import phone2 from './images/waka/phone2.svg'
import love from './images/waka/love.svg'
import phone from './images/waka/phone.svg'
import car from './images/waka/car.svg'
function Main() {
  const offers = [
    {
      image: carIcon,
      text: "Get a ride",
      about: "Wakaboy offers you a ride in minutes",
    },
    {
      image: wallet,
      text: "Get a ride",
      about: "Wakaboy offers you a ride in minutes",
    },
    {
      image: phone2,
      text: "Get a ride",
      about: "Wakaboy offers you a ride in minutes",
    },
  ];
  const benefits = [
    {
      image: love,
      text: "Get a ride",
      about: "Wakaboy offers you a ride in minutes",
    },
    {
      image: phone,
      text: "Get a ride",
      about: "Wakaboy offers you a ride in minutes",
    },
    {
      image: car,
      text: "Get a ride",
      about: "Wakaboy offers you a ride in minutes",
    },
  ]

  return (
    <div className="main">
      <Navigation/>
      <Home />
      <About />
      <Services options={offers} />
      <Ride />
      <Services options={benefits} icon/>
      <Ready />
      <Footer/>
    </div>
  );
}

export default Main;
