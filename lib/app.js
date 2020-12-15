const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
  socket.on('data', data => {
    const request = parseRequest(data.toString());

    console.log(request.body, 'REQUEST BODYYY');

    if(request.path === '/' && request.method === 'GET') {
      socket.end(createResponse({ body: 'hi', status: '200 OK', contentType: 'text/plain' }));
    } else if(request.path === '/echo' && request.method === 'POST') {
      console.log(request.body, 'REQUEST BODY');
      return socket.end(createResponse({ body: request.body, status: '200 OK', contentType: 'text/plain' }));
    } else if(request.path === '/red' && request.method === 'GET') {
      return socket.end(createResponse({ body: '<h1>red</h1>', status: '200 OK', contentType: 'text/plain' }));
    } else if(request.path === '/green' && request.method === 'GET') {
      return socket.end(createResponse({ body: '<h1>green</h1>', status: '200 OK', contentType: 'text/plain' }));
    }
  });
});

module.exports = app;
