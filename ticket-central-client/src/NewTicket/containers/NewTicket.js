import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {createTicket, loadTicketOptionData} from "../../store/actions/ticket.actions";
import TicketForm from "../../common/TicketForm";

function NewTicket(props) {

    let initTicketValues = {
        title: '',
        description: '',
        status: {
            id: ''
        },
        ticket_assigned_to: {
            id: ''
        },
        tags: []
    };

    useEffect(() => {
        props.loadOptionalData();

        return () => {
        };

    }, []);

    const createTicket = ticket => {
        console.log('Create new ticket', ticket);
        props.newTicket(ticket);
        props.history.push('/');
    };

    return (
        <div className="row">
            <div className="col m-2">

                <TicketForm
                    handleSubmit={createTicket}
                    ticketData={initTicketValues}
                    tags={props.tags}
                    users={props.users}
                    status={props.status}
                    showDelete={false}
                />

            </div>
        </div>
    );
}

// Wire up this component to the store
function mapStateToProps(state) {
    return {
        tags: state.ticketReducer.tags,
        users: state.ticketReducer.users,
        status: state.ticketReducer.status
    }
}

function mapDispatchToProps(dispatch) {

    return {
        loadOptionalData: () => dispatch(loadTicketOptionData()),
        newTicket: ticket => dispatch(createTicket(ticket))
    };

}

NewTicket = connect(mapStateToProps, mapDispatchToProps)(NewTicket);

export default NewTicket;