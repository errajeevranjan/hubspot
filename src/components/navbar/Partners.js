import React, { Component } from "react";

class Partners extends Component {
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
          Partners
        </button>
        <div
          className='dropdown-menu dropdown-menu-right'
          aria-labelledby='language'>
          <div className='grid-container'>
            <div className='item1'>
              <a
                className='dropdown-item partners-dropdown'
                href='https://www.hubspot.com/'>
                <h6>Partners</h6>
                <p>
                  Find a partner in our global community of service
                  <br /> providers who can help you grow.
                </p>
              </a>
            </div>

            <div className='item2'>
              <a
                className='dropdown-item partners-dropdown'
                href='https://www.hubspot.com/'>
                <h6>Partner With Us</h6>{" "}
                <p>
                  Explore our sales, agency, and app partnership
                  <br /> programs.
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Partners;
