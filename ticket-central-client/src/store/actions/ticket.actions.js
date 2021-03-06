export const LOAD_ALL_TICKETS = 'LOAD_ALL_TICKETS';
export const LOAD_ALL_TICKETS_SUCCESS = 'LOAD_ALL_TICKETS_SUCCESS';
export const LOAD_ALL_TICKETS_FAIL = 'LOAD_ALL_TICKETS_FAIL';
export const EDIT_TICKET = 'EDIT_TICKET';
export const LOAD_TICKET_OPTION_DATA = 'LOAD_TICKET_OPTION_DATA';
export const LOAD_TICKET_OPTION_DATA_SUCCESS = 'LOAD_TICKET_OPTION_DATA_SUCCESS';
export const LOAD_TICKET_OPTION_DATA_FAIL = 'LOAD_TICKET_OPTION_DATA_FAIL';
export const SET_JWT = 'SET_JWT';
export const UPDATE_TICKET = 'UPDATE_TICKET';
export const UPDATE_TICKET_SUCCESS = 'UPDATE_TICKET_SUCCESS';
export const DELETE_TICKET = 'DELETE_TICKET';
export const DELETE_TICKET_SUCCESS = 'DELETE_TICKET_SUCCESS';
export const CREATE_TICKET = 'CREATE_TICKET';
export const CREATE_TICKET_SUCCESS = 'CREATE_TICKET_SUCCESS';

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

/**
 * =====================================================
 *                      STORE JWT
 * =====================================================
 */
export const setJWT = jwt => ({
    type: SET_JWT,
    payload: jwt
});

/**
 * =====================================================
 *                      UPDATE TICKET
 * =====================================================
 */
export const updateTicket = ticketId => ({
    type: UPDATE_TICKET,
    payload: ticketId
});

export const updateTicketSuccess = ticketId => ({
    type: UPDATE_TICKET_SUCCESS,
    payload: ticketId
});

// TODO: skipping fail action for now...

/**
 * =====================================================
 *                      UPDATE TICKET
 * =====================================================
 */
export const deleteTicket = id => ({
    type: DELETE_TICKET,
    payload: id
});

export const deleteTicketSuccess = id => ({
    type: DELETE_TICKET_SUCCESS,
    payload: id
});

// TODO: skipping fail action for now...

/**
 * =====================================================
 *                      CREATE TICKET
 * =====================================================
 */
export const createTicket = ticket => ({
    type: CREATE_TICKET,
    payload: ticket
});

export const createTicketSuccess = ticket => ({
    type: CREATE_TICKET_SUCCESS,
    payload: ticket
});

// TODO: skipping fail action for now...