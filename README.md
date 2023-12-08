# RS School React 2023 Q3 - GraphiQL

GraphiQL is a playground/IDE for graphQL requests. GraphiQL is an open-source tool that include: authorization and authentication capabilities, ensuring access to the tool is restricted to authorized users; work with a user-specified open GraphQL endpoint.

## Application structure

Your app must contain:

1. Welcome page
2. User auth
3. GraphiQL page with:
   - request editor (query editor / JSON viewer)
   - variables editor
   - headers editor
   - documentation explorer (should be lazy-loaded)
   - response section (query editor / JSON viewer)
   - possibility to change to a different user-specified API endpoint

---

![screenshot will be add later](-)

Task description: <https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/graphiql.md#graphiql>

Deploy: <(will be add later)>

## Tech Stack

(will be add later)

- [React](https://react.dev)
- [React Router](https://reactrouter.com)
- [Redux Toolkit & RTK Query](https://redux-toolkit.js.org)

## Installation

1. Clone the project with `git clone`
2. Run `npm i` to install dependencies
3. Run `npm run dev` to start local development server

## Provided scripts

```sh
npm run dev
```

Start local development server

```sh
npm run build
```

Build project in production mode for further deployment

```sh
npm run format:fix
```

Reformat source code & configs to match `Prettier` settings

```sh
npm run lint
```

Check source code with `ESLint`.

```sh
npm run lint:fix
```

Automatically fix all auto-fixable errors & warnings with `ESLint`

```sh
npm run typecheck
```

Perform TypeScript typechecking of source code with `tsc` (TypeScript Compiler)

```sh
npm run preview
```

Locally preview the production build

```sh
npm run prepare
```

Runs automatically after package installation to install Husky hooks

```sh
npm run test
```

Runs tests with Vitest

```sh
npm run coverage
```

Displays coverage of implemented tests
