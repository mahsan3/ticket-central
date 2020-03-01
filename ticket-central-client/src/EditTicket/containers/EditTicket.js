import React, {useEffect} from 'react';
import {connect} from "react-redux";
import Loading from "../../common/Loading";
import {loadTicketOptionData} from "../../store/actions/ticket.actions";

function EditTicket(props) {

    useEffect(() => {
        props.loadOptionalData();
    }, []);

    if(props.isLoading) {
        return (
            <div className="row">
                <div className="col">

                    <Loading />

                </div>
            </div>
        );
    }else {
        return (
            <div className="row">
                <div className="col">

                    <h1>Finished loading</h1>

                </div>
            </div>
        );
    }

}

// Wire up this component to the store
function mapStateToProps(state) {
    return {
        isLoading: state.ticketReducer.isLoading,
        currentTicket: state.ticketReducer.tickets.find(t => t.id === state.ticketReducer.currentlyEditing),
        tags: state.ticketReducer.tags,
        users: state.ticketReducer.users,
        status: state.ticketReducer.status
    }
}

function mapDispatchToProps(dispatch) {

    return {
        loadOptionalData: () => dispatch(loadTicketOptionData())
    };

}

EditTicket = connect(mapStateToProps, mapDispatchToProps)(EditTicket);

export default EditTicket;