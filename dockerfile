# build stage
FROM node:10.8.0 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm --registry https://registry.npm.taobao.org install
COPY . .
RUN npm run build:prod

# production stage
FROM nginx:1.13.12-alpine as production-stage
# COPY --from=build-stage /app/nginx.conf /etc/nginx/nginx.conf
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
