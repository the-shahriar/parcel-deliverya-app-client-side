import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuthentication from '../../hooks/useAuthentication';
import ShowSpinner from '../ShowSpinner/ShowSpinner';

const PrivateRoute = ({ children, ...rest }) => {

    const { allContexts } = useAuthentication();
    const { user, loading } = allContexts

    if (loading) {
        return <ShowSpinner></ShowSpinner>
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