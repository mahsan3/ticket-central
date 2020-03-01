export const LOAD_ALL_TICKETS = 'LOAD_ALL_TICKETS';
export const LOAD_ALL_TICKETS_SUCCESS = 'LOAD_ALL_TICKETS_SUCCESS';
export const LOAD_ALL_TICKETS_FAIL = 'LOAD_ALL_TICKETS_FAIL';
export const EDIT_TICKET = 'EDIT_TICKET';
export const LOAD_TICKET_OPTION_DATA = 'LOAD_TICKET_OPTION_DATA';
export const LOAD_TICKET_OPTION_DATA_SUCCESS = 'LOAD_TICKET_OPTION_DATA_SUCCESS';
export const LOAD_TICKET_OPTION_DATA_FAIL = 'LOAD_TICKET_OPTION_DATA_FAIL';

/**
 * =====================================================
 *                      LOAD TICKETS
 * =====================================================
 */
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


/**
 * =====================================================
 *                      EDIT TICKET
 * =====================================================
 */
export const editTicket = id => ({
    type: EDIT_TICKET,
    payload: id
});

/**
 * =====================================================
 *                 GET TICKET OPTION DATA
 * =====================================================
 */
export const loadTicketOptionData = () => ({
    type: LOAD_TICKET_OPTION_DATA
});

export const loadTicketOptionDataSuccess = (tags, status, users) => ({
    type: LOAD_TICKET_OPTION_DATA_SUCCESS,
    payload: {
        tags,
        status,
        users
    }
});

// TODO: skipping fail action for now...