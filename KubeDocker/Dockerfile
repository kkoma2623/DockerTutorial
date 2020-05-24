FROM node:carbon
EXPOSE 8080
COPY server.js .
RUN npm install express
CMD node server.js > log.out