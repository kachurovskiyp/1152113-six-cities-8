import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const settings = {
  placesCount: 251,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      placesCount = {settings.placesCount}
    />
  </React.StrictMode>,
  document.getElementById('root'));
