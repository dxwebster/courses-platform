import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import App from './App';

import { modules } from './mocks/modules-data';
import { authData } from './mocks/auth-data';
import { courses } from './mocks/courses-data';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/courses/', () => {
      return courses;
    });

    this.get('/courses/modules/', () => {
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
