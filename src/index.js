import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store';

import * as searchResultsActions from './store/searchResults';
import * as searchTermActions from './store/searchTerms';

const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  window.store = store;
  window.searchResultsActions = searchResultsActions;
  window.searchTermActions = searchTermActions;
}

function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);


