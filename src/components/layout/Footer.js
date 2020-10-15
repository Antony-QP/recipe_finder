import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

export const Footer = () => {
  return (
    <footer className='page-footer'>
      <div className='container'>
        <div className='row'>
          <div className='col l6 s12'>
            <h5 className='white-text'>More Information</h5>
            <p className='grey-text text-lighten-4'>Some stuff</p>
          </div>
          <div className='col l4 offset-l2 s12'>
            <h5 className='white-text'>Shop for your goods at...</h5>
            <ul>
              <li>
                <a href='' className='grey-text text-lighten-3'>
                  Waitrose
                </a>
              </li>
              <li>
                <a href='' className='grey-text text-lighten-3'>
                  Tesco
                </a>
              </li>
              <li>
                <a href='' className='grey-text text-lighten-3'>
                  Marks and Spencer
                </a>
              </li>
              <li>
                <a href='' className='grey-text text-lighten-3'>
                  Morrisons
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='footer-copyright'>
        <div className='container'>&copyright</div>
      </div>
    </footer>
  );
};

export default Footer;
