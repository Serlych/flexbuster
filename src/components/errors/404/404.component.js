import React, {Fragment} from 'react';
import injectSheet from 'react-jss';
import { Ghost } from 'react-kawaii';

import PageTitle from '../../presentational/PageTitle/PageTitle.component';

import Error404Styles from './404.styles';

const Error404Component = props => {
  
  const { classes } = props
  
  return (
    <Fragment>
      <PageTitle pageTitleText='Woopsie!' pageTitlePath={props.location.pathname}/>
      <div className={classes.errorWrapper}>
        <Ghost className={classes.errorImage} size={240} mood="ko" color="#fff"/>
        <div className={classes.errorName}>
          Err<span className={classes.errorEmphasis}>owo</span>r
        </div>
        <div className={classes.errorBody}>
          Oh no! We are sorry! :(
          <br/>
          We could not find the page you requested.
        </div>
      </div>
    </Fragment>
  )
}

const StyledError404 = injectSheet(Error404Styles)(Error404Component);
export default StyledError404;