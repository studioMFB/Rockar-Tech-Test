import { gql } from 'apollo-server-express';
import { makeExecutableSchema } from '@graphql-tools/schema';


export default class Schema {

    static init() {
        const typeDefs = gql`
        type Query {
            hello: String
          }
        `;

        const resolvers = {
            Query: {
                hello: () => 'Hello world!',
            },
            // Add the custom scalar resolvers here
        };

        const schema = makeExecutableSchema({
            typeDefs: [typeDefs], // Combine scalar type definitions with our own
            resolvers: resolvers,
        });

        return schema;
    }
}
