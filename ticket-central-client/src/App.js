import React from 'react';
import './App.css';
import NavContainer from "./Navigation/containers/NavContainer";
import {BrowserRouter, Route} from "react-router-dom";
import HomeContainer from "./Home/containers/HomeContainer";
import EditTicket from "./EditTicket/containers/EditTicket";

function App() {
  return (
    <BrowserRouter>

        <NavContainer />

        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/edit/:id" component={EditTicket} />

    </BrowserRouter>

  );
}

export default App;
