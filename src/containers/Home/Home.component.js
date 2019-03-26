import React, { Fragment } from 'react';
import { object, bool } from 'prop-types';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';

import PageTitle from '../../components/PageTitle/PageTitle.component';

import HomeStyles from './Home.styles';

const HomeComponent = props => {
  
  const { classes, isMobile } = props
  
  return (
    <Fragment>
      <PageTitle pageTitleText='Welcome!' pageTitlePath='/home'/>
      <div className={classes.homeContainer}>
        <p>You are using: {isMobile ? 'Mobile' : 'Desktop'}</p>
      </div>
    </Fragment>
  )
}

HomeComponent.propTypes = {
  classes: object.isRequired,
  isMobile: bool.isRequired
}

const StyledHome = injectSheet(HomeStyles)(HomeComponent);

const mapStateToProps = state => ({ isMobile: state.devices.isMobile });
const mapDispatchToProps = () => ({});

const ReducedHome = connect(mapStateToProps, mapDispatchToProps)(StyledHome);
export default ReducedHome;