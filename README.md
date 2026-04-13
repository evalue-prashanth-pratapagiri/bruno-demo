# GraphQL Bruno Demo

Apollo Server v5 GraphQL service with Bruno integration tests.

## Setup

```bash
npm install
```

## Running the server

Start the dev server (TypeScript, watch mode):

```bash
npm run dev
```

Server runs at `http://localhost:4000/`.

## Running the tests

The tests require the server to be running on `http://localhost:4000/`.

Run all tests:

```bash
npm test
```

This runs `bru run --env local` against the `tests/` collection.

Run a single test file:

```bash
cd tests && npx bru run 01_get_users.bru --env local
```

Run with verbose output:

```bash
cd tests && npx bru run --env local --reporter-junit results.xml
```

## Bruno desktop app

To browse and run tests in the UI, download the Bruno desktop app from [usebruno.com](https://www.usebruno.com) and open the `tests/` folder as a collection.
