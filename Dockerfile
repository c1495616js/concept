FROM node:latest
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install

RUN mkdir -p /usr/src/app/server
WORKDIR /usr/src/app/server
COPY server/package.json /usr/src/app/server
RUN npm install

WORKDIR /usr/src/app
COPY . /usr/src/app

EXPOSE 8080
CMD [ "npm", "start" ]
