import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import App from './components/App';
import './styles/_global.css'

WebFont.load({
  google: {
    families: ['Open Sans', 'sans-serif']
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
