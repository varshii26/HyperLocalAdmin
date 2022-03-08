import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import login from "./Pages/login";
import React from 'react';

function App() {
  return (

    <Routes>
      <Route exact path="/">
        dashboard
      </Route>
      <Route exact path="/login" compo />
      <Route path="*" render={() => "404 Not Found"} />
    </Routes>

  );
}

export default App;
