// const http = require('http'); CommonJS => require
import http from 'node:http'; //Esmodules => import/export

// req = request
// res = response
const server = http.createServer((req, res) => {
    return res.end('Hello World');
})

server.listen(3333);
