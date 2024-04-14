import 'dotenv/config';
import http from "http";
import express from "express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { ApolloServer } from 'apollo-server-express';
import Schema from './gql/schema';
import cors from 'cors';


async function startApolloServer() {
    const app = express();

    const clientPort = process.env.CLIENT_PORT || 3000;

    // Configure CORS.
    app.use(cors({
        origin: `http://localhost:${clientPort}`, // Allow only the front-end origin to access.
    }));

    const httpServer = http.createServer(app);

    const server = new ApolloServer({
        schema: Schema.init(),
        // Tell Express to attach GraphQL functionality to the server.
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });

    // Start the GraphQL server.
    await server.start();

    server.applyMiddleware({ app, path: '/rockar' });

    const serverPort = process.env.SERVER_PORT || 4000;

    await new Promise(() =>
        httpServer.listen({ port: serverPort }, () => {
            console.log(`🚀 Server ready at http://localhost:${serverPort}${server.graphqlPath}`);
        })
    );
}

startApolloServer();
