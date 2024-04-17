# A short application to demonstrate the use of GraphQL queries.
This project is a full-stack application built with Vue.js, integrating Apollo Client and Apollo Server.

## Features
React for the frontend.
Apollo Client for data management on the client-side.
Apollo Server Express for GraphQL server on the backend.

## Prerequisites
Before you begin, ensure you have met the following requirements:

You have installed the latest version of Node.js and npm.
To install the application, follow these steps:

Clone this repository
```bash
git clone https://github.com/studioMFB/rockar-tech-test
```
Copy the .env.example file and rename it to .env, 
then replace the placeholder data with your actual values.
```bash
cp .env.example .env
```
Install the npm dependencies
'ts-node' is needed to run the server with TypeScript.
'dotenv' is necessary to use .ENV var on the server side.
```bash
npm i
```

To run the application, follow these steps:

Start the app for development.
```bash
npm run dev
```
Start the app for production.
```bash
npm run build
npm run start
```

Run frontend tests in a headless browser
```bash
npm run test-run:cy
```
Run frontend tests in a headed browser
```bash
npm run test-open:cy
```
Run backend tests.
```bash
npm run test
```

Open http://localhost:3000 with your browser to see the frontend application.
The GraphQL server can be accessed at http://localhost:4000/rockar. 
You can use tools like GraphQL Playground or Postman to interact with the GraphQL server.

## Project Structure
* backend/src/gql/: This folder contains the various models, types, resolvers and queries for each object.
* frontend/src/pages/index.ts: This is the main page component that uses Apollo Client to fetch data from the GraphQL server.