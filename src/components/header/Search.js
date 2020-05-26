import React, { Component } from "react";
import "./css/header.css";

export default class Search extends Component {
  render() {
    return (
      <div className='searchDiv ml-auto'>
        <form className='form-inline'>
          {/* Search */}
          <input
            id='search-box'
            type='text'
            className='search-box'
            placeholder=''
            name='q'
          />
          <label htmlFor='search-box'>
            <i className='fas fa-search search-icon'></i>
          </label>

          {/* Login Button */}
          <button className='btn btn-sm success button1 mr-3'>Log in</button>
          {/* Get HubSpot Free Button */}
          <button className='btn btn-sm button2'>Get HubSpot free</button>
        </form>
      </div>
    );
  }
}
