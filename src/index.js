import React from 'react';
import ReactDOM from 'react-dom';

//Service Worker
import * as serviceWorker from './serviceWorker';

//Styles
import { ThemeProvider as Theme } from 'react-jss';
import LightTheme from './shared/themes/Light.theme';
import './index.css';

//Router
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';

//Redux
import { Provider as Redux } from 'react-redux';
import configureStore from './redux/configure.store';
const store = configureStore(window.initialState);

const root = document.getElementById('root');
const ServedApp = () => (
  <Redux store={store}>
    <Router>
      <Theme theme={LightTheme}>
        <AppRoutes />
      </Theme>
    </Router>
  </Redux>
);

ReactDOM.render(<ServedApp />, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();