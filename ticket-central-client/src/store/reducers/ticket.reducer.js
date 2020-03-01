import {
    EDIT_TICKET,
    LOAD_ALL_TICKETS,
    LOAD_ALL_TICKETS_FAIL,
    LOAD_ALL_TICKETS_SUCCESS, LOAD_TICKET_OPTION_DATA, LOAD_TICKET_OPTION_DATA_SUCCESS, SET_JWT
} from "../actions/ticket.actions";

const initialState = {
    tickets: [],
    isLoading: false,
    currentlyEditing: null,
    tags: [],
    users: [],
    status: [],
    jwt: null
};

export default function ticketReducer(state = initialState, action) {

    switch (action.type) {

        case LOAD_ALL_TICKETS:
            return {
                ...state,
                isLoading: true
            };
        case LOAD_ALL_TICKETS_SUCCESS:
            return {
                ...state,
                tickets: action.payload,
                isLoading: false
            };
        case LOAD_ALL_TICKETS_FAIL:
            return {
                ...state,
                isLoading: false
            };

        case EDIT_TICKET:
            return {
                ...state,
                currentlyEditing: action.payload
            };

        case LOAD_TICKET_OPTION_DATA:
            return {
                ...state,
                isLoading: true
            };
        case LOAD_TICKET_OPTION_DATA_SUCCESS:
            return {
                ...state,
                tags: action.payload.tags,
                status: action.payload.status,
                users: action.payload.users,
                isLoading: false
            };

        case SET_JWT:
            return {
                ...state,
                jwt: action.payload
            };

        default:
            return state;
    }

}