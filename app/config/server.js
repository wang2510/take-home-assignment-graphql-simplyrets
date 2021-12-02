import { RestService } from '../service/restService';
import { AuthenticationError } from 'apollo-server-express';
import { addResolversToSchema } from '@graphql-tools/schema';
import { schema } from '../service/graphql/schema';
import { resolvers } from '../service/graphql/resolvers';

const graphQLSchema = addResolversToSchema(
    {
        schema,
        resolvers
    });

// Returning apollo server config to fulfill client requests.
export const getApolloServerConfig = () => ({
    //An executable GraphQL schema.
    schema: graphQLSchema,

    // A function that returns an object containing DataSource
    // instances for use by your resolvers. The object is
    // automatically added to each operation's context.
    dataSources: () => {
        return {
            restService: new RestService(),
        };
    },

    // An object (or a function that creates an object) that's
    // passed to every resolver that executes for a particular operation.
    // This enables resolvers to share helpful context, such as a
    // database connection.
    // A simple string match check of Bearer token
    context: ({ req }) => {
        const token = req.headers.authorization;

        if (!token || token !== "Bearer 676cfd34-e706-4cce-87ca-97f947c43bd4") {
            throw new AuthenticationError('Invalid user.');
        }

        return {
            email: 'user1@sideinc.com',
        };
    },
});