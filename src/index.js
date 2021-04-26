import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SettingsContextProvider from './context/SettingsContext';
import Cloud from './components/Cloud';
//import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <SettingsContextProvider>
    <div className="cloud" style={{top:"12%"}}></div>
    <div className="cloud"  style={{top:"50%"}}></div>
    <App />
    </SettingsContextProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
