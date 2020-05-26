import React, { Component } from "react";

class About extends Component {
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
          About
        </button>
        <div
          className='dropdown-menu dropdown-menu-right ml-5'
          aria-labelledby='language'>
          <div className='grid-container'>
            <div className='item1'>
              <h6 className='about-heading ml-5'>Company</h6>
              <div className='card border-0 about-card'>
                <ul className='list-group list-group-flush'>
                  <li className='list-group-item'>
                    <a href='https://www.hubspot.com/' className='about-link'>
                      Contact Us
                    </a>
                  </li>

                  <li className='list-group-item'>
                    <a href='https://www.hubspot.com/' className='about-link'>
                      About Us
                    </a>
                  </li>

                  <li className='list-group-item'>
                    <a href='https://www.hubspot.com/' className='about-link'>
                      Management Team
                    </a>
                  </li>

                  <li className='list-group-item'>
                    <a href='https://www.hubspot.com/' className='about-link'>
                      Board of Directors
                    </a>
                  </li>

                  <li className='list-group-item'>
                    <a href='https://www.hubspot.com/' className='about-link'>
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className='item2'>
              <h6 className='about-heading ml-5'>News</h6>{" "}
              <div className='card border-0 about-card'>
                <ul className='list-group list-group-flush'>
                  <li className='list-group-item'>
                    <a href='https://www.hubspot.com/' className='about-link'>
                      Hubspot News
                    </a>
                  </li>

                  <li className='list-group-item'>
                    <a href='https://www.hubspot.com/' className='about-link'>
                      Press Resources
                    </a>
                  </li>

                  <li className='list-group-item'>
                    <a href='https://www.hubspot.com/' className='about-link'>
                      Speakers
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className='item3'>
              <h6 className='about-heading ml-5 '>Investors</h6>{" "}
              <div className='card border-0 about-card'>
                <ul className='list-group list-group-flush'>
                  <li className='list-group-item'>
                    <a href='https://www.hubspot.com/' className='about-link'>
                      {" "}
                      Investor Relations{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
