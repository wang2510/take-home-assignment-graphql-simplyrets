import 'regenerator-runtime/runtime';
import { getApolloServerConfig } from '../../../config/server';
import { ApolloServer } from 'apollo-server-express';

jest.mock('../../../config/server');
jest.mock('apollo-server-express');

beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    ApolloServer.mockClear();
    getApolloServerConfig.mockClear();
});

describe('ApolloServer', () => {
    it('Verity the constructor has been called', () => {
        const soundPlayerConsumer = new ApolloServer(getApolloServerConfig);
        expect(ApolloServer).toHaveBeenCalledTimes(1);
    });
});