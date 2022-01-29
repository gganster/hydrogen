import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import "./config";

import { ToastContainer } from 'react-toastify';
import Router from "./lib/internal/Router";
import { Provider as UserProvider } from 'contexts/user';

import 'react-toastify/dist/ReactToastify.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import "./styles/index.css";

ReactDOM.render(
  <>
    <ToastContainer pauseOnFocusLoss={false}
                    theme="colored" />
    <UserProvider>
      <Router />
    </UserProvider>
  </>,
  document.getElementById('root')
);

reportWebVitals();
