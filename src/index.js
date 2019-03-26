import React from 'react';
import ReactDOM from 'react-dom';

import { Provider as Redux } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import ThemePicker from './shared/utils/ThemePicker.util';
import configureStore from './redux/configure.store';
import AppRoutes from './routes';

import './index.css';

import * as serviceWorker from './serviceWorker';

const store = configureStore(window.initialState);
const root = document.getElementById('root');

const ServedApp = () => (
  <Redux store={store}>
    <ThemePicker>
      <Router>
        <AppRoutes />
      </Router>
    </ThemePicker>
  </Redux>
);

ReactDOM.render(<ServedApp />, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();