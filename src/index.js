import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from './App';

import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './Components/Reducers/rootReducer';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red, blueGrey } from "@mui/material/colors";
import { BrowserRouter } from 'react-router-dom';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore
  (rootReducer,
    composeEnhancers(applyMiddleware(thunk)
    ));


const theme = createTheme({
  palette: {
    primary: "#A0E2F5",
    secondary: blueGrey,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
