import React, {useEffect, useState} from 'react';
import {useAuth0} from "../../Auth/Auth";
import TicketCard from "../components/TicketCard";
import Loading from "../../common/Loading";

function HomeContainer(props) {

    const { loading, user, getTokenSilently } = useAuth0();
    const [tickets, setTickets] = useState([]);

    useEffect(() => {

        console.log('Running HomeContainer Effect...');

        // TODO: use interceptor for adding to headers
        const getUserTickets = async () => {

            try {

                const token = await getTokenSilently();
                console.log(token);
                const response = await fetch("/api/ticket/all", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                const responseData = await response.json();

                if(responseData.hasOwnProperty('data') && responseData.data.tickets) {
                    setTickets(responseData.data.tickets);
                }else {
                    throw new Error('API Error: Data or tickets missing from response')
                }

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
            {tickets.map(t => <TicketCard ticket={t} key={t.id}/>)}
        </>
    );
}

export default HomeContainer;