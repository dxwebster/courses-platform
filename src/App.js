import React from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import store from './store';

import Routes from './routes';

import theme from './styles/themes/themeDefault';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
