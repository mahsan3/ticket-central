import React from 'react';
import Moment from 'react-moment';

function TicketCard({ticket, edit}) {
    return (
        <div className="card m-2">
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <h5 className="card-title">{ticket.title}</h5>
                    <button type="button" className="btn btn-outline-primary" onClick={() => edit(ticket.id)}>
                        <i className="far fa-edit"></i>
                    </button>
                </div>

                <h6 className="card-subtitle mb-2 text-muted">
                    <Moment format="MMMM DD, YYYY">
                        {ticket.createdAt}
                    </Moment>
                </h6>
                <p className="card-text">
                    {ticket.description}
                </p>
                <footer className="">
                    {ticket.tags.map((t, i) => <span key={i} className="badge badge-pill badge-info mr-1">{t.name}</span>
                    )}
                </footer>
            </div>
        </div>
    );
}

export default TicketCard;