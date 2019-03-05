// servidor http

// charging the http library

const http = require('http');

// I do start chance and load chance then is mandatory to instantiate Chance so I can use it, check library documentation http://chancejs.com/
const Chance = require('chance');
const chance = new Chance();
// remember to do npm iinstall to uload the library I used for this project or npm install chance@1.0.15 (to intall another version)

// definition of my server
const server = http.createServer(function(request, response) {

        response.writeHead(200,{'Content-Type': 'text/html'});
        response.end('Wake up, now you will see a different name every time ' + chance.name() + 'and a random number' +chance.integer() + ' Wow!!'+ '<h1>Can you see my HTML working!!</h1>' );
        
})

// starting my local server
server.listen(1337,'127.0.0.1')
console.log('Servidor arrancado en http://127.0.0.1:1337');
