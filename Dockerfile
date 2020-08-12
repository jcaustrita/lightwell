FROM node:12.16.3

WORKDIR /home/node

COPY yarn.lock package.json ./

RUN yarn install

COPY . ./

RUN yarn && yarn build

# Express SPA

FROM rkingon/express-spa:latest

ENV PORT 3000

WORKDIR /home/node

EXPOSE 3000

COPY --from=0 /home/node/dist ./src
