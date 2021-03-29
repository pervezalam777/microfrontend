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
  - [ ] Should have support for environment variable
- [x] Should have Client and back-office web application runs on microfrontend
- [x] Should have `Host micro frontend` for `client` and `back-office` web application
  - [x] `Error boundary` component
  - [x] `Routing` for `public` and `protected` routes
- [x] Should have `shared microfrontend` (eagerly loaded microfrontend paired with each microfrontend)
  - [x] Should provide `common components` used across client and back-office microfrontend
    - [x] Should have Checkbox
    - [x] Should have Radio button
  - [x] Should have `common hooks`
  - [x] Should have `services`
    - [x] Should have event service for establishing communication among microfrontend
    - [x] Should have http service for making call to micro-services
  - [x] Should have `global Style` 
    - [x] Injected in each microfrontend when it run independently and in host app when all microfrontend runs in host container

## References
- [module-federation](https://github.com/module-federation/module-federation-examples)