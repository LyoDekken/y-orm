FROM node:16

RUN apt-get update

EXPOSE 3000

WORKDIR /usr/src/index

COPY [ "package.json", "yarn.lock" ] .

RUN yarn

COPY . .

USER node

CMD ["yarn", "dev", "start"]