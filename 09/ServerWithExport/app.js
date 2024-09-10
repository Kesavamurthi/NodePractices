const http = require('http');

const router = require('./route.js')

const server = http.createServer(router);

server.listen(3000);