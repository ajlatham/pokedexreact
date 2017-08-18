import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import { BrowserRouter } from 'react-router-dom';

const localApp = (
  <LocaleProvider locale={enUS}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </LocaleProvider>
);

ReactDOM.render(localApp, document.getElementById('root'));

registerServiceWorker();
