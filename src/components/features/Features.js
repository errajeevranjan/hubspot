import React, { Component } from "react";
import "./css/features.css";
import icon1 from "../navbar/softwareicons/icon1.svg";
import icon2 from "../navbar/softwareicons/icon2.svg";
import icon3 from "../navbar/softwareicons/icon3.svg";
import icon4 from "../navbar/softwareicons/icon4.svg";
import icon5 from "../navbar/softwareicons/icon5.svg";

export default class Features extends Component {
  render() {
    return (
      <div class='features pb-5'>
        <div class='container'>
          <div class='row'>
            <div class='col-sm-4'>
              <div
                class='card border-0  mt-5 greybg'
                style={{ width: "22rem" }}>
                <div class='card-body mt-3'>
                  <h1 class='card-title '>
                    {" "}
                    Powerful alone. <br></br>Better together.
                  </h1>
                  <p class='card-text start-card'>
                    HubSpot offers a full stack of software for marketing,
                    sales, and customer service, with a completely free CRM at
                    its core. They’re powerful alone — but even better when used
                    together.
                  </p>
                </div>
              </div>
            </div>

            <div class='col-sm-4'>
              <div class='card border-0   mt-5' style={{ width: "22rem" }}>
                <div class='card-body  mt-3'>
                  <h5 class='card-title '>
                    {" "}
                    <img src={icon1} alt='' className='softwareicons' />
                    Free HubSpot CRM
                  </h5>
                  <p class='card-text '>
                    Everything you need to organize, track, and build better
                    relationships with leads and customers. Yes, it's 100% free.
                    Forever.
                  </p>
                  <hr />
                  <ul>
                    <h6 className='popular-features'>POPULAR FEATURES</h6>
                    <li>
                      <i class='fas fa-check-circle'></i>Contact Insights
                    </li>
                    <li>
                      <i class='fas fa-check-circle'></i>Deals
                    </li>
                    <li>
                      <i class='fas fa-check-circle'></i>Tasks
                    </li>
                  </ul>
                  <button href='#' class='btn button4 mb-5 ml-3'>
                    Get free CRM
                  </button>
                </div>
              </div>
            </div>

            <div class='col-sm-4'>
              <div class='card border-0  mt-5' style={{ width: "22rem" }}>
                <div class='card-body  mt-3'>
                  <h5 class='card-title '>
                    {" "}
                    <img src={icon2} alt='' className='softwareicons' />
                    CMS Hub
                  </h5>
                  <p class='card-text '>
                    Content management software that’s flexible for marketers,
                    powerful for developers, and gives customers a personalized,
                    secure experience.
                  </p>
                  <hr />
                  <ul>
                    <h6 className='popular-features'>POPULAR FEATURES</h6>
                    <li>
                      <i class='fas fa-check-circle'></i>Drag-and-Drop Editor
                    </li>
                    <li>
                      <i class='fas fa-check-circle'></i>SEO Recommendations
                    </li>
                    <li>
                      <i class='fas fa-check-circle'></i>Website Themes
                    </li>
                  </ul>
                  <button href='#' class='btn button4 mb-4 ml-3'>
                    Get started
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class='row'>
            <div class='col-sm-4'>
              <div class='card border-0 mt-2' style={{ width: "22rem" }}>
                <div class='card-body  mt-3'>
                  <h5 class='card-title '>
                    {" "}
                    <img src={icon3} alt='' className='softwareicons' />{" "}
                    Marketing Hub
                  </h5>
                  <p class='card-text '>
                    Marketing software to help you grow traffic, convert more
                    visitors, and run complete inbound marketing campaigns at
                    scale.
                  </p>
                  <hr />
                  <ul>
                    <h6 className='popular-features'>POPULAR FEATURES</h6>
                    <li>
                      <i class='fas fa-check-circle'></i>Lead Generation
                    </li>
                    <li>
                      <i class='fas fa-check-circle'></i>Marketing Automation
                    </li>
                    <li>
                      <i class='fas fa-check-circle'></i>Analytics
                    </li>
                  </ul>
                  <button href='#' class='btn button4 mb-5 ml-3'>
                    Get started
                  </button>
                </div>
              </div>
            </div>

            <div class='col-sm-4'>
              <div class='card border-0 mt-2' style={{ width: "22rem" }}>
                <div class='card-body  mt-3'>
                  <h5 class='card-title '>
                    {" "}
                    <img src={icon4} alt='' className='softwareicons' />
                    Sales Hub
                  </h5>
                  <p class='card-text '>
                    Time-saving sales software that helps you get deeper
                    insights into prospects, automate the tasks you hate, and
                    close more deals faster.
                  </p>
                  <hr />
                  <ul>
                    <h6 className='popular-features'>POPULAR FEATURES</h6>
                    <li>
                      <i class='fas fa-check-circle'></i>Email Tracking
                    </li>
                    <li>
                      <i class='fas fa-check-circle'></i>Meeting Scheduling
                    </li>
                    <li>
                      <i class='fas fa-check-circle'></i>Email Automation
                    </li>
                  </ul>
                  <button href='#' class='btn button4 mb-4 ml-3'>
                    Get started
                  </button>
                </div>
              </div>
            </div>

            <div class='col-sm-4'>
              <div class='card border-0 mt-2' style={{ width: "22rem" }}>
                <div class='card-body  mt-3'>
                  <h5 class='card-title '>
                    {" "}
                    <img src={icon5} alt='' className='softwareicons' /> Service
                    Hub
                  </h5>
                  <p class='card-text '>
                    Customer service software to help you connect with
                    customers, exceed expectations, and turn them into promoters
                    that grow your business.
                  </p>
                  <hr />
                  <ul>
                    <h6 className='popular-features'>POPULAR FEATURES</h6>
                    <li>
                      <i class='fas fa-check-circle'></i>Tickets
                    </li>
                    <li>
                      <i class='fas fa-check-circle'></i>Customer Feedback
                    </li>
                    <li>
                      <i class='fas fa-check-circle'></i>Knowledge Base
                    </li>
                  </ul>
                  <button href='#' class='btn button4 mb-4 ml-3'>
                    Get started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
