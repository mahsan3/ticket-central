import React, {useEffect} from 'react';
import {connect} from "react-redux";
import Loading from "../../common/Loading";
import {loadTicketOptionData} from "../../store/actions/ticket.actions";
import TicketForm from "../components/TicketForm";

function EditTicket(props) {

    useEffect(() => {
        props.loadOptionalData();
        console.log(props.currentTicket)
    }, []);

    const handleUpdate = (updatedTicket) => {
        console.log('Updated ticket is...', updatedTicket);
    };


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
                <div className="col m-2">

                    <TicketForm
                        handleSubmit={handleUpdate}
                        ticketData={props.currentTicket}
                        tags={props.tags}
                        users={props.users}
                        status={props.status}
                    />


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