import React, { Component } from "react";
import "./css/home.css";
export default class Home extends Component {
  render() {
    return (
      <div>
        <div className='container'>
          <div className='home'>
            <h1 className='main-heading pb-5'>There’s a better way to grow.</h1>
            <p className='home-p pt-2 pb-5'>
              Marketing, sales, and service software that helps your business
              grow without compromise. Because “good for the business” should
              also mean “good for the customer.”
            </p>
            <button className='btn button3 btn-lg'>
              <span className='home-button'>Get HubSpot free</span>
            </button>
            <br />
            <small>
              Get started with FREE tools, and <br />
              upgrade as you grow.
            </small>
          </div>
        </div>
        <picture>
          <source
            media='(min-width: 1025px)'
            srcSet='//cdn2.hubspot.net/hubfs/53/raw_assets/public/_Web%20Team%20Assets/Website/assets/svg/hero.svg'
            className='home-background'
          />
          <img
            className='home-background'
            alt='Garage Startup Enterprise Illustration'
            src='https://www.hubspot.com/hubfs/raw_assets/public/_Web%20Team%20Assets/Website/assets/svg/hero.svg'
          />
        </picture>
      </div>
    );
  }
}
