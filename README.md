# Microfrontend Architecture
complete micro frontend architecture with react and webpack5 module federation plugin   


## TODO
- [x] Shared external library (e.g. React, React-router, etc.)
- [x] `Microfrontend setup template` with setup steps
  - [x] Should have webpack5 configuration file with `module federation plugin`
  - [x] Should have `package.json` file which list minimum required dependencies for microfrontend with react
  - [x] Should have `ESLint enabled`
  - [x] Should have `unit test case configuration`
  - [x] Should have `pri-commit hook with husky`
  - [x] Should have `Dockerfile` with `.nginx`
  - [x] `README.md` file that talks about microfrontend and Events it dispatches
  - [x] `.gitignore`
  - [x] `Sonar enabled`
- [] Should have Client and back-office web application runs on microfrontend
- [] Should have At least `4 micro-frontend application` for client facing
- [] Should have At least `3 micro-frontend application` for back-office facing
- [] Should have `Host micro frontend` for `client` and `back-office` web application
- [] Should have `shared microfrontend` (eagerly loaded microfrontend paired with each microfrontend)
  - [] Should provide `common components` used across client and back-office microfrontend
  - [] Should provide `common hooks`, `services` and `global state`
  - [] Should provide channel or mechanism for communication among microfrontend 
  - [] Should have `global Style injected` in each microfrontend when it run independently and in host app when all microfrontend runs in host container
  - 