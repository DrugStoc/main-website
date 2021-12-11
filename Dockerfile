FROM node:16-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

# Building App as standalone to reduce docker image size (https://github.com/nuxt/nuxt.js/issues/4292)
RUN yarn build

# Removing dev depedencies from node_modules
RUN npm prune --production

ENV PORT=3000

EXPOSE 3000

CMD ["yarn", "start"]
