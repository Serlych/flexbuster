import React from 'react';
import { connect } from 'react-redux';

const Home = props => {
  
  const { isMobile } = props
  
  return (
    <div className="Home">
      <h1>Home</h1>
      <h3>You are using: {isMobile ? 'Mobile' : 'Desktop'}</h3>
    </div>
  )
}

const mapStateToProps = state => ({ isMobile: state.device.isMobile });
const mapDispatchToProps = () => ({});
const ReducedHome = connect(mapStateToProps, mapDispatchToProps)(Home);

export default ReducedHome;