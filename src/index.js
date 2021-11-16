import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import { ToastContainer } from 'react-toastify';
import Router from "./lib/internal/Router";

import 'react-toastify/dist/ReactToastify.css';
import "./index.css";

ReactDOM.render(
  <>
    <ToastContainer pauseOnFocusLoss={false}
                    theme="colored" />
    <Router />
  </>,
  document.getElementById('root')
);

reportWebVitals();
