import React from 'react';
import { element } from 'prop-types';
import injectSheet from 'react-jss';

import FooterStyles from './Footer.styles';

const FooterComponent = props => {
  
  const { classes } = props
  
  return (
    <footer className={classes.footerContainer}>
      <div>&copy; Flexbuster {(new Date()).getFullYear()}</div>
    </footer>
  )
}

FooterComponent.propTypes = {
  children: element
}

const StyledFooter = injectSheet(FooterStyles)(FooterComponent);
export default StyledFooter;