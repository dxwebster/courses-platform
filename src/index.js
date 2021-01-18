import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './ReactotronConfig'

import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';

LogRocket.init('8zio4n/projeto');
setupLogRocketReact(LogRocket);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

