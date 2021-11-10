import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import mocks from './mocks/mocks';

const settings = {
  placesCount: 251,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      placesCount = {settings.placesCount}
      mocks = {mocks}
    />
  </React.StrictMode>,
  document.getElementById('root'));
