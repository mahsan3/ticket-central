import {
    LOAD_ALL_TICKETS,
    LOAD_ALL_TICKETS_FAIL,
    LOAD_ALL_TICKETS_SUCCESS
} from "../actions/ticket.actions";

const initialState = {
    tickets: [],
    isLoading: false,
    currentlyEditing: null,
    tags: [],
    users: [],
    status: []
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

        default:
            return state;
    }

}