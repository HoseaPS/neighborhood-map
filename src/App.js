import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Main from './pages/main';

const App = () => (
  <BrowserRouter>
    <Fragment>
      <GlobalStyle />
      <Main />
    </Fragment>
  </BrowserRouter>
);

export default App;
