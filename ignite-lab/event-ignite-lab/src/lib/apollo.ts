import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient ({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ob1ebo1otc01xx8l7q84zt/master',
    cache: new InMemoryCache()
    
})