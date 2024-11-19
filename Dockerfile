# Fetching the latest node image on alpine linux
FROM node:22-alpine AS build

# Declaring env
ENV NODE_VERSION 22.11.0
ENV NODE_ENV development

# Setting up the work directory
WORKDIR /react-app

# Installing dependencies
COPY ./package*.json /react-app

RUN npm ci

COPY . .

RUN npm run build

FROM node:alpine AS serve

WORKDIR /react-app

RUN npm install -g serve

COPY --from=build /react-app/build .
COPY --from=build /react-app/package.json .

# Starting our application
CMD ["serve", "-s", "."]