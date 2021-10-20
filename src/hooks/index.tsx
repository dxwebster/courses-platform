/* eslint-disable react/prop-types */
import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import theme from '../styles/themes/themeDefault';
import { store } from '../store';

import { AuthProvider } from './auth';
import { ToastProvider } from './toast';

const AppProvider = ({ children }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <ToastProvider>{children}</ToastProvider>
      </AuthProvider>
    </ThemeProvider>
  </Provider>
);

export default AppProvider;
