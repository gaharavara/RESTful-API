const http = require("http"); // require is the node way to import
const app = require('./app');

const port = process.env.PORT || 7000; // to run on the default provided port or else on port 7000

const server = http.createServer(app); // to create the server

server.listen(port); // to make the server start listening to the requests on the assigned port