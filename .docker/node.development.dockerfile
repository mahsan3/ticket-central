FROM node:12.16.1 as node
LABEL author="Muhammad Ahsan"

WORKDIR /var/www/ticket-central-api
COPY package.json .

RUN npm install -g pm2@latest
RUN npm install

COPY server.js .
COPY .docker/scripts/wait-for-it.sh .
RUN chmod +x ./wait-for-it.sh
COPY api/ api/

RUN mkdir -p /var/log/pm2

EXPOSE 3001

ENTRYPOINT ["bash", "-c", "./wait-for-it.sh db:3606 -- node server"]
