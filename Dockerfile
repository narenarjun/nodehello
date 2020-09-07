FROM node:latest

LABEL maintainer="narendran 'narendev0610@gmail.com'" 

EXPOSE 8000

WORKDIR /opt/app-root/src

COPY hello.js .
COPY package.json .

CMD ["npm", "start"]