const port = process.env.port || 5000;
const express = require('express');
const app = express();

const http = require('http');
const server = http.server(app);

app.use(express.static('client'));

server.listen(port, function(){

console.log('Server is running');

});