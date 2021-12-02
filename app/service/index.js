import { getApolloServerConfig } from '../config/server';
import { ApolloServer } from 'apollo-server-express';

// Return server based on configs
export const getApolloServer = () => {
    return new ApolloServer(getApolloServerConfig());
};
