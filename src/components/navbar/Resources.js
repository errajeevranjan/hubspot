import React, { Component } from "react";

class Resources extends Component {
  render() {
    return (
      <div className='dropdown mr-3'>
        <button
          className='btn menu dropdown-toggle'
          type='button'
          id='dropdownMenuButton'
          data-toggle='dropdown'
          aria-haspopup='true'
          aria-expanded='false'>
          Resources
        </button>
        <div
          className='dropdown-menu dropdown-menu-right'
          aria-labelledby='language'>
          <div className='grid-container'>
            <div className='item1'>
              <a
                className='dropdown-item resources-dropdown'
                href='https://www.hubspot.com/'>
                <h6>Blog</h6>
                <p>
                  Read marketing, sales, agency, and customer
                  <br /> success blog content.
                </p>
              </a>
              <hr />
            </div>

            <div className='item2'>
              <a
                className='dropdown-item resources-dropdown'
                href='https://www.hubspot.com/'>
                <h6>Customer Stories</h6>{" "}
                <p>
                  Hear from the businesses that use HubSpot <br />
                  to grow better every day.
                </p>
              </a>
              <hr />
            </div>

            <div className='item3'>
              <a
                className='dropdown-item resources-dropdown'
                href='https://www.hubspot.com/'>
                <h6>Developers</h6>{" "}
                <p>
                  Create apps and custom integrations for
                  <br /> businesses using HubSpot.
                </p>
              </a>
              <hr />
            </div>

            <div className='item4'>
              <a
                className='dropdown-item resources-dropdown'
                href='https://www.hubspot.com/'>
                <h6>Ebooks, Guides & More</h6>{" "}
                <p>
                  Get access to HubSpot’s most popular
                  <br /> marketing resources.
                </p>
              </a>
              <hr />
            </div>

            <div className='item5'>
              <a
                className='dropdown-item resources-dropdown'
                href='https://www.hubspot.com/'>
                <h6>Onboarding & Services</h6>{" "}
                <p>
                  Find training and consulting services to help
                  <br /> you thrive with HubSpot.
                </p>
              </a>
              <hr />
            </div>

            <div className='item6'>
              <a
                className='dropdown-item resources-dropdown'
                href='https://www.hubspot.com/'>
                <h6>Research & Reports</h6>{" "}
                <p>
                  Get up-to-date research and data on hot
                  <br /> business trends.
                </p>
              </a>
              <hr />
            </div>

            <div className='item7'>
              <a
                className='dropdown-item resources-dropdown'
                href='https://www.hubspot.com/'>
                <h6>Free courses & Certifications</h6>{" "}
                <p>
                  Take courses on the latest business trends,
                  <br /> taught by industry experts.
                </p>
              </a>
              <hr />
            </div>

            <div className='item8'>
              <a
                className='dropdown-item resources-dropdown'
                href='https://www.hubspot.com/'>
                <h6>What is Inbound?</h6>{" "}
                <p>
                  Get a primer on how inbound helps your
                  <br /> business grow better.
                </p>
              </a>
              <hr />
            </div>

            <div className='item9'>
              <a
                className='dropdown-item resources-dropdown'
                href='https://www.hubspot.com/'>
                <h6>Customer Support</h6>{" "}
                <p>
                  Get help if you have questions about using
                  <br /> HubSpot software.
                </p>
              </a>
              <hr />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resources;
