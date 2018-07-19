import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { injectGlobal } from 'styled-components';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

injectGlobal`
  *{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

  body {
    margin: 0;
    padding: 0;
    font-family: Mark,Avenir,Helvetica,Arial,sans-serif;
    font-size: 16px;
    line-height: 1.6;
    -webkit-font-smoothing: anti-aliased;
  }
  img {
    max-width: 100%;
    height: auto;
}
`;

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
