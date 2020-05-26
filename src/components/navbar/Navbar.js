import React, { Component } from "react";
import "./css/navbar.css";
import Software from "./Software";
import Resources from "./Resources";
import Partners from "./Partners";
import About from "./About";
import Hubspot from "./hubspot.svg";
export default class Navbar extends Component {
  render() {
    return (
      <nav class='container navbar navbar-expand-lg navigationmenu'>
        <a class='navbar-brand ml-4' href='https://www.hubspot.com/'>
          <img src={Hubspot} alt='' />
        </a>
        <Software />
        <div className='mr-3'>
          <a
            href='https://www.hubspot.com/'
            style={{
              color: "#33475b",
              fontWeight: "bold",
              textDecoration: "none",
            }}>
            Pricing
          </a>
        </div>
        <Resources />
        <Partners />
        <About />
      </nav>
    );
  }
}
