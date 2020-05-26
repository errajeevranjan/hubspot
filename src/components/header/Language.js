import React, { Component } from "react";
import "./css/header.css";

export default class Language extends Component {
  render() {
    return (
      <div className='dropdown'>
        <div className='dropdown'>
          <button
            className='btn button0 primary dropdown-toggle'
            type='button'
            id='dropdownMenuButton'
            data-toggle='dropdown'
            aria-haspopup='true'
            aria-expanded='false'>
            <i className='fas fa-globe'></i> &nbsp; English
          </button>
          <div className='dropdown-menu' aria-labelledby='language'>
            <a className='dropdown-item' href='https://www.hubspot.com/'>
              日本語
            </a>
            <a className='dropdown-item' href='https://www.hubspot.com/'>
              Deutsch
            </a>
            <a className='dropdown-item' href='https://www.hubspot.com/'>
              English
            </a>
            <a className='dropdown-item' href='https://www.hubspot.com/'>
              Español
            </a>
            <a className='dropdown-item' href='https://www.hubspot.com/'>
              Português
            </a>
            <a className='dropdown-item' href='https://www.hubspot.com/'>
              Français
            </a>
          </div>
        </div>
        <h4 className='divide'>|</h4> &nbsp;
        <h6 className='contact'>
          <a href='https://www.hubspot.com/'>Contact Sales</a>
        </h6>
      </div>
    );
  }
}
