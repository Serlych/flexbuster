import React from 'react';
import injectSheet from 'react-jss';

import HeaderStyles from './Header.styles';

const HeaderComponent = ({ classes }) => (
  <header className={classes.headerContainer}>
    <div className={classes.headerTitle}>
      Joel
    </div>
    <div className={classes.headerButtons}>
      Chavoya
    </div>
  </header>
)

const StyledHeader = injectSheet(HeaderStyles)(HeaderComponent)

export default StyledHeader;