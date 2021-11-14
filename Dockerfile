FROM node:14-alpine as builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

# Building App as standalone to reduce docker image size (https://github.com/nuxt/nuxt.js/issues/4292)
RUN yarn build --standalone

# Removing dev depedencies from node_modules
RUN npm prune --production

FROM node:14-alpine

WORKDIR /app

COPY --from=builder ./app/ ./

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0

CMD ["yarn", "start"]
