import React, { Fragment } from 'react';
import { element } from 'prop-types';

import Header from '../shared/components/layout/Header/Header.component';
import Content from '../shared/components/layout/Content/Content.component';
import Footer from '../shared/components/layout/Footer/Footer.component';

const App = props => (
  <Fragment>
    <Header />
    <Content>
      {props.children}
    </Content>
    <Footer />
  </Fragment>
)

App.propTypes = {
  children: element
};

export default App;