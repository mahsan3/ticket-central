import {LOAD_ALL_TICKETS, loadAllTicketsFail, loadAllTicketsSuccess} from "../actions/ticket.actions";
import {ofType} from "redux-observable";
import {of} from 'rxjs';
import {map, mergeMap, catchError} from "rxjs/operators";
import { ajax } from 'rxjs/ajax';

export const loadTickets = action$ => action$.pipe(
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