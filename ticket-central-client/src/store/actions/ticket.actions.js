export const LOAD_ALL_TICKETS = 'LOAD_ALL_TICKETS';
export const LOAD_ALL_TICKETS_SUCCESS = 'LOAD_ALL_TICKETS_SUCCESS';
export const LOAD_ALL_TICKETS_FAIL = 'LOAD_ALL_TICKETS_FAIL';

export const loadAllTickets = jwt => ({
    type: LOAD_ALL_TICKETS,
    payload: jwt
});

export const loadAllTicketsSuccess = tickets => ({
    type: LOAD_ALL_TICKETS_SUCCESS,
    payload: tickets
});

export const loadAllTicketsFail = () => ({
    type: LOAD_ALL_TICKETS_FAIL
});
