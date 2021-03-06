import React, {useEffect} from 'react';
import {connect} from "react-redux";
import Loading from "../../common/Loading";
import {deleteTicket, editTicket, loadTicketOptionData, updateTicket} from "../../store/actions/ticket.actions";
import TicketForm from "../../common/TicketForm";
import { useHistory } from "react-router-dom";

function EditTicket(props) {
    let history = useHistory();

    useEffect(() => {
        props.loadOptionalData();

        return () => {
            props.editTicket(null);
        };

    }, []);

    const handleUpdate = (updatedTicket) => {
        props.updateTicker({
            ticketId: props.currentTicket.id,
            ticket: updatedTicket
        });
        history.push('/');
    };

    const handleDelete = () => {
        props.deleteTicket(props.currentTicket.id);
        history.push('/');
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
                        deleteTicket={handleDelete}
                        ticketData={props.currentTicket}
                        tags={props.tags}
                        users={props.users}
                        status={props.status}
                        showDelete={true}
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
        loadOptionalData: () => dispatch(loadTicketOptionData()),
        updateTicker: updatedTicket => dispatch(updateTicket(updatedTicket)),
        deleteTicket: id => dispatch(deleteTicket(id)),
        editTicket: id => dispatch(editTicket(id))
    };

}

EditTicket = connect(mapStateToProps, mapDispatchToProps)(EditTicket);

export default EditTicket;