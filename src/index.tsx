import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from 'utils/reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from 'pages/Home';
import Features from 'pages/Features';
import Pricing from 'pages/Pricing';
import Stories from 'pages/Stories';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

//index renders that page if path is just /
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
