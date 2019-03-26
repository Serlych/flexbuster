import React from 'react';
import { Link } from 'react-router-dom';
import { object } from 'prop-types';
import injectSheet from 'react-jss';

import HeaderStyles from './Header.styles';

const HeaderComponent = ({ classes }) => (
  <header className={classes.headerContainer}>
    <div className={classes.headerLogoContainer}>
      <Link to='/'>
        <i className={`fas fa-cat ${classes.headerLogoIcon}`} />
        Flexbuster<span className={classes.headerCopyright}>&copy;</span>
      </Link>
    </div>
    <div className={classes.headerButtons}>
      <Link to='/posts'>
        <i className='fas fa-file-alt' />
      </Link>
      <Link to='/styler'>
        <i className='fas fa-palette' />
      </Link>
      <i className='fas fa-user' />
    </div>
  </header>
)

HeaderComponent.propTypes = {
  classes: object.isRequired
}

const StyledHeader = injectSheet(HeaderStyles)(HeaderComponent);
export default StyledHeader;