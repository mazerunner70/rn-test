import finalHandler from 'finalhandler';
import http from 'http';
import serveStatic from 'serve-static';

// Serve up mocha tests
const serve = serveStatic('.', {'index': ['index.html']});

// Create server
const server = http.createServer(function onRequest (req, res) {
  serve(req, res, finalHandler(req, res))
})

// Listen
server.listen(3000, () => {
  console.log('listening on port 3000');
})
