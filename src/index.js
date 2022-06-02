import React from 'react';
import ReactDOM from 'react-dom/client';
import './Dashboard.scss'
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
    <App />
    </BrowserRouter>
  
);

