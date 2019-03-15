import React from 'react';
import { element } from 'prop-types';
import injectSheet from 'react-jss';

import HeaderStyles from './Header.styles';

const HeaderComponent = ({ classes }) => (
  <header className={classes.headerContainer}>
    <div className={classes.headerLogoContainer}>
      <i className={`fas fa-otter ${classes.headerLogoIcon}`} />
      Flexbuster
    </div>
    <div className={classes.headerButtons}>
      <i className='fas fa-user'/>
    </div>
  </header>
)

HeaderComponent.propTypes = {
  children: element
}

const StyledHeader = injectSheet(HeaderStyles)(HeaderComponent);
export default StyledHeader;