import {
    EDIT_TICKET,
    LOAD_ALL_TICKETS, LOAD_TICKET_OPTION_DATA,
    LOAD_TICKET_OPTION_DATA_SUCCESS,
    loadAllTicketsFail,
    loadAllTicketsSuccess, loadTicketOptionDataSuccess
} from "../actions/ticket.actions";
import {ofType} from "redux-observable";
import {of} from 'rxjs';
import {map, mergeMap, catchError} from "rxjs/operators";
import { ajax } from 'rxjs/ajax';
import history from "../../utils/history";

export const loadTicketsEpic = action$ => action$.pipe(
    ofType(LOAD_ALL_TICKETS),
    mergeMap(action => ajax({
            url: '/api/ticket/all',
            method: 'GET',
            headers: {
                Authorization: `Bearer ${action.payload}`
            }
        }).pipe(
            map(response => {
                return loadAllTicketsSuccess(response.response.data.tickets);
            }),
            catchError(err => {
                return of(loadAllTicketsFail());
            })
        )
    )
);

export const loadTicketOptionsEpic = action$ => action$.pipe(
    ofType(LOAD_TICKET_OPTION_DATA),
    mergeMap(action => ajax({
            url: '/api/ticket/optional-data',
            method: 'GET',
            headers: {
                Authorization: `Bearer ${action.payload}`
            }
        }).pipe(
        map(response => {
            return loadTicketOptionDataSuccess(response.response.data);
        }),
        catchError(err => {
            return of("uh oh - spaghettios!");
        })
        )
    )
);

export const editTicketEpic = action$ => action$.pipe(
    ofType(EDIT_TICKET),
    mergeMap(action => {
        history.push(`/edit/${action.payload}`); // TODO: doesn't work, look into this
        return of();
    })
);