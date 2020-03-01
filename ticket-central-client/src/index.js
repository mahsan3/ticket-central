import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import {Auth0Provider} from "./Auth/Auth";
import history from "./utils/history";

const store = configureStore();

// A function that routes the user to the right place
// after login
const onRedirectCallback = appState => {
    history.push(
        appState && appState.targetUrl
            ? appState.targetUrl
            : window.location.pathname
    );
};

ReactDOM.render(
    <Provider store={store}>

        <Auth0Provider
            domain={process.env.REACT_APP_AUTH0_DOMAIN}
            client_id={process.env.REACT_APP_AUTH0_CLIENTID}
            redirect_uri={process.env.REACT_APP_AUTH0_CALLBACK}
            onRedirectCallback={onRedirectCallback}>

            <App />

        </Auth0Provider>

    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
