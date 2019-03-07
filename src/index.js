import React from 'react';
import ReactDOM from 'react-dom';
import { StoreProvider } from './store';
import { BrowserRouter as Router } from 'react-router-dom';
import 'styles/base.scss';

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <StoreProvider>
    <Router>
      <App />
    </Router>
  </StoreProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
