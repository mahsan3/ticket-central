import React, {useEffect, useState} from 'react';
import {useAuth0} from "../../Auth/Auth";
import TicketCard from "../components/TicketCard";
import Loading from "../../common/Loading";
import {connect} from "react-redux";
import {loadAllTickets} from "../../store/actions/ticket.actions";

function HomeContainer(props) {

    const { loading, user, getTokenSilently } = useAuth0();

    useEffect(() => {

        console.log('Running HomeContainer Effect...');

        // TODO: use interceptor for adding to headers
        const getUserTickets = async () => {

            try {

                const token = await getTokenSilently();
                console.log(token);
                props.loadTickets(token);

            }catch (err) {
                console.error(err);
            }

        };

        if(!loading) getUserTickets();

    }, [loading]);

    if (loading || !user) {
        return <Loading />;
    }

    return (
        <>
            <h1>My Tickets</h1>
            {props.tickets.map(t => <TicketCard ticket={t} key={t.id}/>)}
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
        loadTickets: token => dispatch(loadAllTickets(token))
    };

}

HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

export default HomeContainer;