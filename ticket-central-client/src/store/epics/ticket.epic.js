import {
    CREATE_TICKET, createTicketSuccess,
    DELETE_TICKET, deleteTicketSuccess,
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
import { toast } from 'react-toastify';

const baseAPIUrl = 'http://localhost:3001';

export const loadTicketsEpic = (action$, state$) => action$.pipe(
    ofType(LOAD_ALL_TICKETS),
    tap(() => {
        console.log(state$.value.ticketReducer.jwt)
    }),
    mergeMap(action => ajax({
            url: `${baseAPIUrl}/api/ticket/all`,
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
            url: `${baseAPIUrl}/api/ticket/optional-data`,
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
    tap(() => toast.info('Saving...')),
    mergeMap(action => ajax({
            url: `${baseAPIUrl}/api/ticket/${action.payload.ticketId}`,
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${state$.value.ticketReducer.jwt}`
            },
            body: {
                ...action.payload.ticket
            }
        }).pipe(
            map(response => {
                toast.success('Save successful!');
                return updateTicketSuccess(action.payload.ticket);
            }),
            catchError(err => {
                return of("uh oh - spaghettios!");
            })
        )
    )
);

export const deleteTicketEpic = (action$, state$) => action$.pipe(
    ofType(DELETE_TICKET),
    tap(() => toast.info('Deleting...')),
    mergeMap(action => ajax({
            url: `${baseAPIUrl}/api/ticket/${action.payload}`,
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${state$.value.ticketReducer.jwt}`
            }
        }).pipe(
            map(response => {
                toast.success('Delete successful!');
                return deleteTicketSuccess(action.payload);
            }),
            catchError(err => {
                return of("uh oh - spaghettios!");
            })
        )
    )
);

export const createTicketEpic = (action$, state$) => action$.pipe(
    ofType(CREATE_TICKET),
    tap(() => toast.info('Creating...')),
    mergeMap(action => ajax({
            url: `${baseAPIUrl}/api/ticket/new`,
            method: 'POST',
            headers: {
                Authorization: `Bearer ${state$.value.ticketReducer.jwt}`
            },
            body: {
                ...action.payload
            }
        }).pipe(
            map(response => {
                toast.success('Ticket Created!');
                return createTicketSuccess(action.payload);
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