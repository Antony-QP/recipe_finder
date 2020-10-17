import React from "react";
// import {Link} from "react-router-dom";

export const Footer = () => {
  return (
    <footer className='page-footer'>
      <div className='container'>
        <div className='row'>
          <div className='col l4  s12'>
            <h5 className='white-text'>Shop for your goods at...</h5>
            <ul>
              <li>
                <a href='https://www.waitrose.com/' className='grey-text text-lighten-3'>
                  Waitrose
                </a>
              </li>
              <li>
                <a href='https://www.tesco.com/' className='grey-text text-lighten-3'>
                  Tesco
                </a>
              </li>
              <li>
                <a href='https://www.marksandspencer.com/' className='grey-text text-lighten-3'>
                  Marks and Spencer
                </a>
              </li>
              <li>
                <a href='https://groceries.morrisons.com/webshop/startWebshop.do' className='grey-text text-lighten-3'>
                  Morrisons
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='footer-copyright'>
        <div className='container'>&copy;Recipe Finder</div>
      </div>
    </footer>
  );
};

export default Footer;
