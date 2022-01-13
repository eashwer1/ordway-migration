FROM node:16-alpine3.11

RUN npm install -g pnpm

COPY --chown=node:node . /usr/src/node-server/

WORKDIR /usr/src/node-server

RUN pnpm install --dev
