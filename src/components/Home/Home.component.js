import React from 'react';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';

import HomeStyles from './Home.styles'

const HomeComponent = props => {
  
  const { isMobile, classes } = props
  
  return (
    <div className={classes.homeContainer}>
      <h1>Home</h1>
      <h3>You are using: {isMobile ? 'Mobile' : 'Desktop'}</h3>
    </div>
  )
}

const StyledHome = injectSheet(HomeStyles)(HomeComponent);

const mapStateToProps = state => ({ isMobile: state.device.isMobile });
const mapDispatchToProps = () => ({});

const ReducedHome = connect(mapStateToProps, mapDispatchToProps)(StyledHome);
export default ReducedHome;