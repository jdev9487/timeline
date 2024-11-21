FROM node:22-alpine AS build

ENV NODE_VERSION 22.11.0
ENV NODE_ENV development

WORKDIR /react-app

COPY ./package*.json /react-app

RUN npm ci

COPY ./src ./src
COPY ./public ./public

RUN npm run build

FROM node:alpine

WORKDIR /react-app

RUN npm install -g serve

COPY --from=build /react-app/build .

CMD ["serve", "-s", "."]