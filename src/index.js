import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { injectGlobal } from 'styled-components';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

injectGlobal`
  @font-face {
    font-family: "Mark";
    src: url('https://fonts.thumbtack.com/mark/mark-tt.woff2') format("woff2");
    font-style: normal;
    font-weight: normal;
  }

  body {
    margin: 0;
    padding: 0;
    display: block;
    font-family: Mark,Avenir,Helvetica,Arial,sans-serif;
    font-size: 16px;
    line-height: 1.6;
    -webkit-font-smoothing: anti-aliased;
  }
`;

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
