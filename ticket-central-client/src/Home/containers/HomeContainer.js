import React, {useEffect, useState} from 'react';
import {useAuth0} from "../../Auth/Auth";
import TicketCard from "../components/TicketCard";
import Loading from "../../common/Loading";
import {connect} from "react-redux";
import {editTicket, loadAllTickets, setJWT} from "../../store/actions/ticket.actions";

function HomeContainer(props) {

    const { loading, user, getTokenSilently } = useAuth0();

    useEffect(() => {

        console.log('Running HomeContainer Effect...');

        // TODO: use interceptor for adding to headers
        const getUserTickets = async () => {

            try {

                const token = await getTokenSilently();
                console.log(token);
                props.setJWT(token);
                props.loadTickets();

            }catch (err) {
                console.error(err);
            }

        };

        if(!loading) getUserTickets();

    }, [loading]);

    const editTicket = (id) => {
        props.editTicket(id);
        props.history.push(`/edit/${id}`);
        console.log(`Edit ${id}`);
    };

    if (loading || !user) {
        return <Loading />;
    }

    return (
        <>
            <h1>My Tickets</h1>
            {props.tickets.map(t => <TicketCard ticket={t} key={t.id} edit={editTicket}/>)}
        </>
    );
}

// Wire up this component to the store
function mapStateToProps(state) {
    return {
        tickets: state.ticketReducer.tickets
    }
}

function mapDispatchToProps(dispatch) {

    return {
        loadTickets: () => dispatch(loadAllTickets()),
        editTicket: id => dispatch(editTicket(id)),
        setJWT: token => dispatch(setJWT(token))
    };

}

HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

export default HomeContainer;