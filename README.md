# React starter with Webpack

- install npm
- Bundle new code with `$ webpack`
- Then run `npm run start`. This also runs `webpack-dev-server` to compile the project, and launches development server.
- `localhost:8080` connects to the necessary endpoint

## Use ESLint
1. Run the following command:
```
npm install eslint@4.13.1 -g
npm install eslint@4.13.1 --save-dev
```

2. Then run this command in the top level of project directory:
```
eslint --init
```

3. Answer the questions then it automate `.eslintrc.json` file based on the answers.

### ESLint Rules in `.eslintrc.json`: 
- `0` - off
- `1` - warn
- `2` - error

_ESLint for indentation is removed from this template_

- Run `npm run lint` to check the project's lint
- Run `npm run lint --fix` to check and fix the project's lint



## React-Router
React-Router is installed.