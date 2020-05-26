import React, { Component } from "react";
import icon1 from "./softwareicons/icon1.svg";
import icon2 from "./softwareicons/icon2.svg";
import icon3 from "./softwareicons/icon3.svg";
import icon4 from "./softwareicons/icon4.svg";
import icon5 from "./softwareicons/icon5.svg";

export default class Software extends Component {
  render() {
    return (
      <div className='dropdown mr-3 ml-auto'>
        <button
          className='btn menu dropdown-toggle'
          type='button'
          id='dropdownMenuButton'
          data-toggle='dropdown'
          aria-haspopup='true'
          aria-expanded='false'>
          Software
        </button>
        <div className='dropdown-menu' aria-labelledby='software'>
          <a
            className='dropdown-item software-dropdown'
            href='https://www.hubspot.com/'>
            <h6>
              <img src={icon1} alt='' className='softwareicons mt-4' /> Free
              HubSpot CRM
            </h6>
            <small className='small ml-4 pl-3'>
              All your contacts and companies, 100% free
            </small>
          </a>
          <hr />

          <a
            className='dropdown-item software-dropdown'
            href='https://www.hubspot.com/'>
            <h6>
              <img src={icon2} alt='' className='softwareicons mt-4' />
              Marketing Hub
            </h6>
            <br />
            <small className='small ml-4 pl-3'>
              Marketing software to increase traffic and leads. Free and premium
              plans
            </small>
          </a>
          <a
            className='dropdown-item software-dropdown'
            href='https://www.hubspot.com/'>
            <h6>
              <img src={icon3} alt='' className='softwareicons mt-4' />
              Sales Hub
            </h6>
            <br />
            <small className='small ml-4 pl-3'>
              Sales software for closing more deals, faster. Free and premium
              plans.
            </small>
          </a>
          <a
            className='dropdown-item software-dropdown'
            href='https://www.hubspot.com/'>
            <h6>
              <img src={icon4} alt='' className='softwareicons mt-4' />
              Service Hub
            </h6>
            <br />
            <small className='small ml-4 pl-3'>
              Software for providing first-class customer service. Free and
              premium plans.
            </small>
          </a>
          <a
            className='dropdown-item software-dropdown'
            href='https://www.hubspot.com/'>
            <h6>
              <img src={icon5} alt='' className='softwareicons mt-4' />
              CMS Hub <span className='badge badge-success'>New</span>
            </h6>
            <br />
            <small className='small ml-4 pl-3'>
              Content management software to power website. Premium plans and
              free trial
            </small>
          </a>
          <hr />
          <a className='dropdown-item' href='https://www.hubspot.com/'>
            <h6>App Marketplace</h6>
            <br />

            <small>
              First HubSpot apps for the tools and software you use to run your
              bussiness.
            </small>
          </a>
        </div>
      </div>
    );
  }
}
