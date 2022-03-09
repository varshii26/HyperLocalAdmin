import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import login from "./Pages/login";
import React from 'react';

function App() {
  return (

    <Router>
      <Route exact path="/">
        dashboard
      </Route>
      <Route exact path="/login" component={login} />
      <Route path="*" render={() => "404 Not Found"} />
    </Router>

  );
}

export default App;
