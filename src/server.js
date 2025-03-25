// const http = require('http'); CommonJS => require
import http from 'node:http'; //Esmodules => import/export

// Uma requisição HTTP é composta por dois principais recursos: 

// Método HTTP
// URL

// Métodos HTTPS: GET, POST, PUT, PATCH, DELETE

// GET = Buscar uma informação do back-end
// POST = Criar Uma informação no back-end
// PUT = Atualizar um recurso no back-end
// PATCH = Atualizar uma informação específica de um recurso no back-end
// DELETE = Deletar um recurso do back-end

// GET /users = Buscando usuários no back-end
// POST /users = Criar um usuário no back-end

const server = http.createServer((req, res) => {
    const {method, url} = req;

    if (method == 'GET' && url == '/users') {
        return res.end('Listagem de usuários');
    }
    if (method == "POST" && url == "/users") {
      return res.end("Criação de usuários");
    }
    

    return res.end('Hello World Watch');
})

server.listen(3333);
