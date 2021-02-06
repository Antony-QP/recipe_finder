import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

export const Navbar = ({icon, title}) => {
  return (
    <nav>
      <div className='nav-wrapper'>
        <i className={icon}></i>
        <a href='/recipe_finder' className='brand-logo'>
          {title}
        </a>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <Link to='/recipe_finder'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Recipe Finder",
  icon: "fas fa-utensils",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
