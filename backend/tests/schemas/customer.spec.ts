import http from "http";
import express from "express";
import cors from "cors";
import gql from "graphql-tag";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import { createTestClient } from "apollo-server-testing";
import Schema from "../../src/gql/schema";
import { startApolloServer } from '../../src/main';

// Create a test server instance
const app = express();
const clientPort = process.env.CLIENT_PORT || 3000;
// Configure CORS.
app.use(
  cors({
    origin: `http://localhost:${clientPort}`, // Allow only the front-end origin to access.
  })
);
const httpServer = http.createServer(app);
const server = new ApolloServer({
  schema: Schema.init(),
  // Tell Express to attach GraphQL functionality to the server.
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});


// const server = startApolloServer();

// Wrap the server with createTestClient to simulate client requests
const { query } = createTestClient(server as any);

// Write your test cases
describe("customers query", () => {
  it("should return an array of customers", async () => {
    // Mock data or set up database fixtures if needed
    const expectedCustomers = [
      {
        email: "tom.harding1974@gmail.co.uk",
        forename: "Tom",
        surname: "Harding",
        contactNumber: "07938244758",
        postcode: "SS26GH",
      },
      {
        email: "drosmanahmed@pharmaceuticalsglobal.org",
        forename: "Osman",
        surname: "Ahmed",
        contactNumber: "+91719548839",
        postcode: "396210",
      },
      {
        email: "dominic.sutton@rockar.com",
        forename: "Dominic",
        surname: "Sutton",
        contactNumber: "+44 (0) 7950 244 036",
        postcode: "W12 7SL",
      },
    ];

    // Define your query
    const GET_CUSTOMERS_QUERY = gql`
    query {
      customers {
        email
        forename
        surname
        contactNumber
        postcode
      }
    }
  `;

    const CUSTOMERS_NAME_QUERY = gql`
      query getCustomers($filter: CustomerFilterInput) {
        customers(filter: $filter) {
          forename
          surname
        }
      }
    `;

    const CUSTOMERS_QUERY = gql`
      query getFilteredCustomers($filter: CustomerFilterInput!) {
        customers(filter: $filter) {
          forename
          surname
          email
          contactNumber
          postcode
        }
      }
    `;

    // Execute the query
    const { data } = await query({ query: GET_CUSTOMERS_QUERY });

    // Assert that the data matches the expected customers
    expect(data.customers).toEqual(expect.arrayContaining(expectedCustomers));
  });
});
