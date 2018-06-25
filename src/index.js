import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { injectGlobal } from 'styled-components';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', 'sans-serif';
  }
`;

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
