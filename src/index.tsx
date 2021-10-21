import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import App from './App';

import { modules } from './mocks/modules-data';
import { authData } from './mocks/auth-data';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/course/modules/1', () => {
      return modules;
    });

    this.get('/auth', () => {
      return authData;
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
