# Micro frontend builder
This folder provide build script for building all the micro frontend with a single command.

## Build setup with lerna on local 
### `Pre-requisite`
Install npm packages in each micro frontend before running the following commands

### **`Run in development`**
```sh
# If not installed packages previously
$ npm install

# Run all the micro frontend containing package name @mf*
$ npm run start
```

### **`Run production config compiled build`**
```sh
## create build in each micro-frontend
$ npm run build 

## run build with production configuration
$ npm run serve
```

### **`Clean build before running`**
```sh
$ npm run clean
```

## **`Build setup with docker-compose on local`**
### **`Pre-requisites`**
The system should have docker installed.

### **`Run build`**
```sh
$ docker-compose up
```

### Shut down docker container
```sh
$ docker-compose down
```

### **`Run build before running the container`**
```sh
$ docker-compose up --build
```
