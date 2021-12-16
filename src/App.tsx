/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './config/ReactotronConfig';
import AppProvider from './providers/AppProvider';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Course from './pages/Dashboard/components/Course';

import GlobalStyle from './styles/global';

function App() {
  console.info(`==> 🌎  Você está no modo ${process.env.NODE_ENV}`);
  console.info(`==> 🌎  Você está no ambiente ${process.env.REACT_APP_ENVIRONMENT}`);

  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Login />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/courses/*" element={<Course />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </AppProvider>
  );
}

export default App;
