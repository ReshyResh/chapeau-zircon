import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import store from './Redux/configureStore';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Home />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
