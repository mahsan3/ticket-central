import {
    EDIT_TICKET,
    LOAD_ALL_TICKETS, LOAD_TICKET_OPTION_DATA,
    LOAD_TICKET_OPTION_DATA_SUCCESS,
    loadAllTicketsFail,
    loadAllTicketsSuccess, loadTicketOptionDataSuccess, UPDATE_TICKET, updateTicketSuccess
} from "../actions/ticket.actions";
import {ofType} from "redux-observable";
import {of} from 'rxjs';
import {map, mergeMap, catchError, tap} from "rxjs/operators";
import { ajax } from 'rxjs/ajax';
import history from "../../utils/history";

export const loadTicketsEpic = (action$, state$) => action$.pipe(
    ofType(LOAD_ALL_TICKETS),
    tap(() => {
        console.log(state$.value.ticketReducer.jwt)
    }),
    mergeMap(action => ajax({
            url: '/api/ticket/all',
            method: 'GET',
            headers: {
                Authorization: `Bearer ${state$.value.ticketReducer.jwt}`
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

export const loadTicketOptionsEpic = (action$, state$) => action$.pipe(
    ofType(LOAD_TICKET_OPTION_DATA),
    mergeMap(action => ajax({
            url: '/api/ticket/optional-data',
            method: 'GET',
            headers: {
                Authorization: `Bearer ${state$.value.ticketReducer.jwt}`
            }
        }).pipe(
        map(response => {
            return loadTicketOptionDataSuccess(
                response.response.data.tags,
                response.response.data.status,
                response.response.data.users
            );
        }),
        catchError(err => {
            return of("uh oh - spaghettios!");
        })
        )
    )
);

export const updateTicketEpic = (action$, state$) => action$.pipe(
    ofType(UPDATE_TICKET),
    mergeMap(action => ajax({
            url: `/api/ticket/${action.payload.ticketId}`,
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${state$.value.ticketReducer.jwt}`
            },
            body: {
                ...action.payload.ticket
            }
        }).pipe(
            map(response => {
                return updateTicketSuccess(action.payload.ticket);
            }),
            catchError(err => {
                return of("uh oh - spaghettios!");
            })
        )
    )
);

// Not using
export const editTicketEpic = action$ => action$.pipe(
    ofType(EDIT_TICKET),
    mergeMap(action => {
        history.push(`/edit/${action.payload}`); // TODO: doesn't work, look into this
        return of();
    })
);