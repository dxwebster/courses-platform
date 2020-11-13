import React from 'react';
import { Provider } from 'react-redux';

import { Container } from './styles/App';

import Card from './components/Card';
import store from './store';

import { ThemeProvider } from 'styled-components';
import theme from './styles/themes/themeDefault'


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Container>
            <Card />
          </Container>
        </Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
