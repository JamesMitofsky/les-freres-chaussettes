import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
    return new ApolloClient({
        uri: "http://localhost:4000/graphql",
        cache: new InMemoryCache(),
        headers: {
            authorization: "Bearer " + localStorage.getItem('jwt') || '',
        },
    });
};

export default createApolloClient;