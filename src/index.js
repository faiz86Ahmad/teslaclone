import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "../src/App/Store"
import {Provider} from "react-redux";

 store.subscribe(()=>console.log(store.getState()));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);