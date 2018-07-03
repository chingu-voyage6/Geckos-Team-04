import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { injectGlobal } from 'styled-components';
import App from '../components/App';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', 'sans-serif';
  }
`;

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
