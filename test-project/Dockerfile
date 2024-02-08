###################################
# syntax = docker/dockerfile:1.0-experimental
###################################
# Creating a Prod Base Image
FROM node:lts-alpine@sha256:8e6a472eb9742f4f486ca9ef13321b7fc2e54f2f60814f339eeda2aff3037573 as base

WORKDIR /base

COPY package.json .
COPY yarn.lock .
COPY ./libraries/package-b/package.json libraries/package-b/
COPY ./libraries/package-a libraries/package-a/

COPY ./libraries/package-b libraries/package-b
RUN yarn install
CMD ["node", "/base/libraries/package-b/index.js"]