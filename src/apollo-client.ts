import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
    let authorization: string = "Bearer " + localStorage.getItem('jwt') ;
    return new ApolloClient({
        uri: "http://localhost:4000/graphql",
        cache: new InMemoryCache(),
        headers: {
            authorization: authorization,
        },
    });
};

export default createApolloClient;