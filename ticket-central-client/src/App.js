import React from 'react';
import './App.css';
import NavContainer from "./Navigation/containers/NavContainer";
import {BrowserRouter, Route} from "react-router-dom";
import HomeContainer from "./Home/containers/HomeContainer";
import EditTicket from "./EditTicket/containers/EditTicket";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
        <ToastContainer />
        <NavContainer />

        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/edit/:id" component={EditTicket} />

    </BrowserRouter>

  );
}

export default App;
