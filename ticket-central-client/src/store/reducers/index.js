import {combineReducers} from "redux";
import { combineEpics } from 'redux-observable';
import {
    loadTicketsEpic,
    editTicketEpic,
    loadTicketOptionsEpic,
    updateTicketEpic,
    deleteTicketEpic,
    createTicketEpic
} from '../epics/ticket.epic';
import ticketReducer from "./ticket.reducer";

export const rootEpic = combineEpics(
    loadTicketsEpic,
    loadTicketOptionsEpic,
    updateTicketEpic,
    deleteTicketEpic,
    createTicketEpic
    // editTicketEpic
);

export const rootReducer = combineReducers({
    ticketReducer
});