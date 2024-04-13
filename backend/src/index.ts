import 'dotenv/config';
import http from "http";
import express from "express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { ApolloServer } from 'apollo-server-express';
import Schema from './gql/schema';


async function startApolloServer() {
    const app = express();

    const httpServer = http.createServer(app);

    const server = new ApolloServer({
        schema: Schema.init(),
        // Tell Express to attach GraphQL functionality to the server.
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });

    // Start the GraphQL server.
    await server.start();

    server.applyMiddleware({ app, path: '/graphql' });

    const port = process.env.SERVER_PORT || 4000;

    await new Promise(() =>
        httpServer.listen({ port: port }, () =>{
            console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`);
        })
    );
}

startApolloServer();
