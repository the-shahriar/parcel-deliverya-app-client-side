import React from 'react';
import { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';
import useServices from '../hooks/useServices';


export const AuthContext = createContext();

const AuthProvider = (props) => {
    const { children } = props;
    const allContexts = useFirebase();
    const allServices = useServices();

    return (
        <AuthContext.Provider value={{ allContexts, allServices }} >

            {children}

        </AuthContext.Provider >
    );
};

export default AuthProvider;