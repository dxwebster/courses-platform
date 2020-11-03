import React from 'react'
import { Provider } from 'react-redux'

import { Container } from "./styles/App"

import Card from "./components/Card"
import store  from './store'

function App() {
  return (
    <div className="App"> 
      <Provider store={store}>
          <Container>
            <Card />
          </Container>
      </Provider>
    </div>
  );
}

export default App;
