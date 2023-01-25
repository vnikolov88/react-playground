import React from 'react';
import ReactDOM from 'react-dom/client';

import { Routes } from 'generouted/react-router';

import './index.css';

import axios from "axios";

axios.defaults.baseURL = "http://localhost:7206";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = 'http://localhost:5174';
axios.defaults.headers.get['Access-Control-Allow-Origin'] = 'http://localhost:5174';
axios.defaults.headers.delete['Access-Control-Allow-Origin'] = 'http://localhost:5174';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
)
