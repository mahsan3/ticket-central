import {combineReducers} from "redux";
import { combineEpics } from 'redux-observable';
import {loadTickets} from '../epics/ticket.epic';
import ticketReducer from "./ticket.reducer";

export const rootEpic = combineEpics(
    loadTickets
);

export const rootReducer = combineReducers({
    ticketReducer
});