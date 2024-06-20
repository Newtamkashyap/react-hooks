import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Month} from './month';
import { PersonDetails } from './person';
import Hotel from './hotel';
import { Timer } from './useEffect/timer';
import { SetTimer } from './useEffect/setTime';
import { Counter } from './useEffect/timecalculation';
import { Time } from './useEffect/counter';
import { Todos } from './useReducer/todo';
// import { App } from './useRef/app';
import { Component1 } from './usecontext/user';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Component1/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
