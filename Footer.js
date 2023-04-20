import React from 'react';
import './Footer.css';
import { Facebook, Twitter, Instagram } from '@material-ui/icons';

import PropTypes from 'prop-types';

const Footer = ({ color }) => {
  const style = { backgroundColor: color };

  return (
    <div className="footer" style={style}>
      <div className="footer-icons">
        <a href="https://www.facebook.com">
          <Facebook className="icon" />
        </a>
        <a href="https://www.twitter.com">
          <Twitter className="icon" />
        </a>
        <a href="https://www.instagram.com">
          <Instagram className="icon" />
        </a>
      </div>
    </div>
  );
};

Footer.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Footer;

