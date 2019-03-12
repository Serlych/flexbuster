import React, { Component } from 'react';

import Header from '../shared/components/layout/Header/Header.component';
import Content from '../shared/components/layout/Content/Content.component';
import Footer from '../shared/components/layout/Footer/Footer.component';

import Home from '../components/Home/Home.component';

import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header />
        <Content>
          <Home/>
        </Content>
        <Footer />
      </div>
    )
  }
}

export default App;