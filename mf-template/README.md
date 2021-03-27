
# (Microfrontend name)
(microfrontend description)

## Event dispatch
(list all the events this microfrontend dispatches)

## state
(what this microfrontend holds in global state)

## Commands
NOTE: Please check `webpack.config.js` file if it has dependency on other micro-frontend then that should also be running before running this micro-frontend.

### **`Run application on local`**

```sh
# install all the dependencies via running the following command.
# NOTE: run it only once or when new dependencies are added to package.json
$ npm install

# Run the following command to start local server
$ npm run start
```

### **`Run application with production mode`**
NOTE: To run all the micro-frontend in single please check `mf-builder` folder

```sh
## Create production build
$ npm run build

## Run the build with webpack sever
$ npm run serve
```

### **`Run test environment`**

```sh
# Run test
$ npm run test

# Debug test
$ npm run test:debug
```

### **`Test coverage`**

```sh
# Check test coverage on console window
$ npm run test:coverage
```

### **`Linter and formatter`**

This repository contains linting and formatting rules.

> Linting rules are hooked with git commit command. If any linting rule breaks it will throw error. These rules are there to keep code clean.

The following are commands to manually check and auto fix linting errors. **But it is re-commended that you should fix all the error manually.**

```sh
# Check linting errors
$ npm run lint

# Auto fix linting errors
$ npm run fix:lint
```

For formatting code files, we are using `Prettier` settings please check '.prettierrc'.

> `In order to adhere to standard formatting please ignore setting up formatter in your IDE (VSCode) via plugins`
