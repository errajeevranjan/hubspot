import React, { Component } from "react";
import "./css/header.css";
import Search from "./Search";
import Language from "./Language";
class Header extends Component {
  render() {
    return (
      <div className=' header border-bottom'>
        <nav className='container navbar navbar-expand-sm ml-auto'>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <i className='fa fa-navicon hamburger'></i>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <Language />
            <Search />
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
