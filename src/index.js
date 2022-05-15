import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./redux/store";
import { Provider } from "react-redux";
import {ThemeProvider} from "@material-ui/core/styles";
import theme from './font.js'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store ={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
