#### stage 1
FROM node:12.16.1 as node
LABEL author="Muhammad Ahsan"
WORKDIR /app
COPY ticket-central-client/package.json package.json
RUN npm install
COPY ticket-central-client/ .
RUN npm run build

#### stage 2
FROM nginx:alpine
VOLUME /var/cache/nginx
WORKDIR /usr/share/nginx/html
COPY --from=node /app/build/ /usr/share/nginx/html
COPY ./.docker/config/nginx.development.conf /etc/nginx/conf.d/default.conf