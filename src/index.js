import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider as Themes } from 'react-jss';
import { BrowserRouter as Router } from 'react-router-dom';

import AppRoutes from './routes';
import * as serviceWorker from './serviceWorker';

import './index.css';
import LightTheme from './shared/themes/Light.theme';

const root = document.getElementById('root');
const ServedApp = () => (
  <Router>
    <Themes theme={LightTheme}>
      <AppRoutes />
    </Themes>
  </Router>
);

ReactDOM.render(<ServedApp />, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
