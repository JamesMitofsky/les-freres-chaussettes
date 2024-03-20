import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { useEffect, useState } from "react";

export const useConfigClient = () => {
    let defaultJWT: string | null = null;
    if (typeof localStorage !== 'undefined') {
        defaultJWT = localStorage.getItem('jwt')
    }
    const [authTokenStorage, setAuthTokenStorage] = useState(defaultJWT); // by default it is null

    useEffect(() => {
        setAuthTokenStorage(localStorage.getItem('jwt')); // as soon as it is available just update the token
    }, []);


    const client = new ApolloClient({
        uri: "http://localhost:4000/graphql",
        cache: new InMemoryCache(),
        headers: {
            authorization: `Bearer ${authTokenStorage}`,
        },
    });

    return client;
};