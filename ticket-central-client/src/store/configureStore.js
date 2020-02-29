import {createStore, applyMiddleware, compose} from "redux";
import {rootEpic, rootReducer} from "./reducers";
import { createEpicMiddleware } from 'redux-observable';
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

const epicMiddleware = createEpicMiddleware();

export default function configureStore(initialStore) {
    // It's like ng-freeze, will tell you during development if you actually try and mutate state
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        rootReducer,
        initialStore,
        composeEnhancers(applyMiddleware(
            reduxImmutableStateInvariant(),
            epicMiddleware
        ))
    );

    epicMiddleware.run(rootEpic);

    return store;

}