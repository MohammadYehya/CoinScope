FROM node:22.11.0-alpine

WORKDIR /

COPY . .

RUN npm i

ENV NODE_ENV=production

USER node

EXPOSE 4000

CMD ["npx", "ts-node", "server.ts"]