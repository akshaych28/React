import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import  AppEmployee from "./App_employee";

ReactDOM.render(<AppEmployee />, document.getElementById('root'));
registerServiceWorker();
