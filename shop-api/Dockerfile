FROM alpine

ENV TZ=Europe/Warsaw

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

ENV LC_ALL=C.UTF-8
ENV LANG=C.UTF-8

RUN apk update
RUN apk upgrade --no-cache
RUN apk add --no-cache nodejs npm gnupg curl wget unzip vim

EXPOSE 8080

COPY . /app/shop-api/
WORKDIR /app/shop-api/
RUN rm -rf node_modules
RUN npm install
ENTRYPOINT ["npm", "run", "serve"]