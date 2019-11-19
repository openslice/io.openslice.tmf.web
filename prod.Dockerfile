# base image
FROM node:12.2.0 as build

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
ADD . /app
RUN npm install
RUN npm install -g @angular/cli@8.3.8

# generate build
RUN ng build --output-path=dist --prod

