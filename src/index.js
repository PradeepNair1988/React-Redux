import React from 'react';
import ReactDOM from 'react-dom';
import App from './JS/App';
import './CSS/index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';  
import rootReducer from './JS/Reducers';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
document.getElementById("root"));