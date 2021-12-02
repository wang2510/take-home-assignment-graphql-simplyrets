import express from 'express';
import { getApolloServer } from './app/service';

// Self executing to run service
(async function runServer() {
    const apolloServer = getApolloServer();

    // Apollo server > 3.0 version requires this
    await apolloServer.start();
    const app = express();

    // Set middleware
    apolloServer.applyMiddleware({ app, path: '/graphql' });

    app.listen({ port: 4000 }, () =>
        console.log(`Listening on http://localhost:4000/graphql`)
    );

    return app;
})();

