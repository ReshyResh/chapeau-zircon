import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Home from './pages/Home';
import Install from './pages/Install';
import store from './Redux/configureStore';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {window.ethereum ? <Home /> : <Install />}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
