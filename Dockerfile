FROM node:12-alpine as builder
RUN mkdir /build
WORKDIR /build
RUN yarn
COPY . /build
RUN npm install
RUN yarn build
CMD yarn start