import React from 'react';
import {useAuth0} from "../../Auth/Auth";
import {connect} from "react-redux";
import {setJWT} from "../../store/actions/ticket.actions";

function NavContainer(props) {

    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    const logoutCleanUp = () => {
        props.setJWT(null);
        logout();
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Ticket Central</a>

            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>

            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                <ul className="navbar-nav mr-auto">

                    {!isAuthenticated && (
                        <li className="nav-item active">
                            <a className="nav-link" href="#" onClick={() => loginWithRedirect({})}>Login</a>
                        </li>
                    )}
                    {
                        isAuthenticated && (
                            <li className="nav-item active">
                                <a className="nav-link" href="#" onClick={() => logoutCleanUp()}>Logout</a>
                            </li>
                        )
                    }

                    <li className="nav-item">
                        <a className="nav-link" href="#"></a>
                    </li>
                </ul>

            </div>
        </nav>
    );
}

// Wire up this component to the store
function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {

    return {
        setJWT: token => dispatch(setJWT(token))
    };

}

NavContainer = connect(mapStateToProps, mapDispatchToProps)(NavContainer);

export default NavContainer;