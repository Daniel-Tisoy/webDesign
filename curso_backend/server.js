const http = require("http");

function answerRequest(request, response) {
  response.end("Hello World!");
}

let server = http.createServer(answerRequest);

server.listen(3000);