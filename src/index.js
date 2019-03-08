import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'react-jss';

import App from './components/App';
import * as serviceWorker from './serviceWorker';

import './index.css';

import LightTheme from './shared/themes/LightTheme';

const root = document.getElementById('root');
const ServedApp = () => (
  <ThemeProvider theme={LightTheme}>
    <App />
  </ThemeProvider>
);

ReactDOM.render(<ServedApp />, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
