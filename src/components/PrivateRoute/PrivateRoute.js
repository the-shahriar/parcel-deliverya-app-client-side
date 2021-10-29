import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuthentication from '../../hooks/useAuthentication';

const PrivateRoute = ({ children, ...rest }) => {

    const { allContexts } = useAuthentication();
    const { user, loading } = allContexts

    if (loading) {
        return <Spinner animation="border" />
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        >
        </Route>
    );
};

export default PrivateRoute;