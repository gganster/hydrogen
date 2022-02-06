import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import "./config";

import { ToastContainer } from 'react-toastify';
import Router from "./lib/internal/Router";
import { Provider as UserProvider } from 'contexts/user';

import 'moment/locale/fr';
import 'react-toastify/dist/ReactToastify.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import "./styles/index.css";
import "react-datepicker/dist/react-datepicker.css";

import moment from "moment";


const App = () => {

  useEffect(() => {
    moment.updateLocale("fr");
  })

  return (
    <>
      <ToastContainer pauseOnFocusLoss={false}
                      theme="colored" />
      <UserProvider>
        <Router />
      </UserProvider>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

reportWebVitals();
