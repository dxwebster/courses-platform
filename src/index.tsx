import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import App from './App';

import { modules } from './mocks/modules-data';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/course/modules/1', () => {
      return modules;
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
