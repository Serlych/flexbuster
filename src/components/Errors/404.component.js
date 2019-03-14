import React from 'react';
import injectSheet from 'react-jss';
import { Ghost } from 'react-kawaii';

import Error404Styles from './404.styles';

const Error404 = ({ classes }) => (
  <div className={classes.errorWrapper}>
    <Ghost className={classes.errorImage} size={240} mood="sad" color="#E0E4E8" />
    <div className={classes.errorName}>
      uwurror 404
    </div>
    <div className={classes.errorText}>
      Oh no! :(
      <br/>
      We could not find the page you requested. Maybe a typo?
    </div>
  </div>
)

const StyledError404 = injectSheet(Error404Styles)(Error404);
export default StyledError404;