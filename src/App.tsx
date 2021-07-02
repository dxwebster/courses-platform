/* eslint-disable no-console */
import React from 'react';

import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { store } from './store';

import Routes from './routes';
import history from './services/history';

import theme from './styles/themes/themeDefault';
import GlobalStyle from './styles/global';

import './config/ReactotronConfig';

import { getConfigs } from './config/environment';

function App() {
  const configs: any = getConfigs();

  console.info(`==> 🌎  Você está no modo ${process.env.NODE_ENV}`);
  console.info(`==> 🌎  Você está no ambiente ${process.env.ENVIRONMENT}`);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Routes configs={configs} />
          <GlobalStyle />
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
