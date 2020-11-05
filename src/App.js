import React from 'react';
import { Provider } from 'react-redux';

import { Container } from './styles/App';

import Card from './components/Card';
import store from './store';

import { ThemeProvider } from 'styled-components';

const theme = {
  title: 'main',

  colors: {
    darkBlue: '#0f1124',
    lightBlue: '#11162f',

    text: '#9ca0bb',
    title: '#49f2d2',
  },
};

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
