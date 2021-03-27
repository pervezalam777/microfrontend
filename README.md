# Microfrontend Architecture
complete micro frontend architecture with react and webpack5 module federation plugin   


## TODO
- [] Shared external library (e.g. React, React-router, etc.)
- [] `Microfrontend setup template` with setup steps
  - [] Should have webpack configuration file with module federation plugin
  - [] Should have package.json file which list minimum required dependencies for microfrontend with react
  - [] Should have ESLint enabled
  - [] Should have unit test case configuration
  - [] Should have pri-commit hook with husky
  - [] Should have Docker file with .nginx
  - [] README file that talks about microfrontend and Events it dispatches
  - [] .gitignore
  - [] sonar enabled
- [] Should have Client and back-office web application runs on microfrontend
- [] Should have At least 4 micro-frontend application for client facing
- [] Should have At least 3 micro-frontend application for back-office facing
- [] Should have Host micro frontend for client and back-office web application
- [] Should have shared microfrontend (eagerly loaded microfrontend paired with each microfrontend)
  - [] Should provide common components used across client and back-office microfrontend
  - [] Should provide common hooks, services and global state
  - [] Should provide channel or mechanism for communication among microfrontend 
  - [] Should have global Style injected in each microfrontend when it run independently and in host app when all microfrontend runs in host container
  - 