import React from 'react';
import './App.css';
import NavContainer from "./Navigation/containers/NavContainer";
import {BrowserRouter, Route} from "react-router-dom";
import HomeContainer from "./Home/containers/HomeContainer";

function App() {
  return (
      <>

        <NavContainer />

        <BrowserRouter>

            <Route path="/" component={HomeContainer} />

        </BrowserRouter>

      </>
  );
}

export default App;
