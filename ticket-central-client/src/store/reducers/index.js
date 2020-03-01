import {combineReducers} from "redux";
import { combineEpics } from 'redux-observable';
import {loadTicketsEpic, editTicketEpic} from '../epics/ticket.epic';
import ticketReducer from "./ticket.reducer";

export const rootEpic = combineEpics(
    loadTicketsEpic,
    loadTicketOptionsEpic,
    // editTicketEpic
);

export const rootReducer = combineReducers({
    ticketReducer
});