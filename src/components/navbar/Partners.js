import React, { Component } from "react";

export default class Partners extends Component {
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
    );
  }
}
