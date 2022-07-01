import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { Authentication } from './api/index';
import indonesia from 'moment/locale/id';

const moment = require('moment');
const momentDurationFormatSetup = require('moment-duration-format');

momentDurationFormatSetup(moment);
moment.locale('id', indonesia);
// eslint-disable-next-line no-unused-expressions
typeof moment.duration.fn.format === 'function';
// eslint-disable-next-line no-unused-expressions
typeof moment.duration.format === 'function';

Authentication();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
