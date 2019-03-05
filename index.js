// servidor http

// cargar libreria http

const http = require('http');

// definir un servidor 
const server = http.createServer(function(request, response) {

        response.writeHead(200,{'Content-Type': 'text/html'});
        response.end('<h1>This is a test </h1><br> Wake up, <b>Neo eres genial</b> <h3>Was checking how could I put much more information in this server</h3> <p>To me the problem here is indentation</pr>');

})

// arrancar el servidor
server.listen(1337,'127.0.0.1')
console.log('Servidor arrancado en http://127.0.0.1:1337');
