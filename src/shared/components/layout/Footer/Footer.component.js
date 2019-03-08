import React from 'react';
import injectSheet from 'react-jss';

const FooterComponent = ({ classes }) => (
  <footer>
    <div>&copy; Flexbuster {(new Date()).getFullYear()}</div>
  </footer>
)

export default FooterComponent;