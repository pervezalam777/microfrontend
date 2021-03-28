# pull official base image
FROM node:13.12.0-alpine as builder

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm ci

# add app
COPY . ./

# start app
RUN ["npm", "run", "build"]

FROM nginx

#!/bin/sh

COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from builder
COPY --from=builder /app/dist /usr/share/nginx/html
