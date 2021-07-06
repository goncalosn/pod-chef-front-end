#stage1
FROM node:13-alpine as build

WORKDIR /app

COPY package.json ./
RUN npm install

COPY . /app
RUN npm run build

#stage2

FROM nginx:1.16.0-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]