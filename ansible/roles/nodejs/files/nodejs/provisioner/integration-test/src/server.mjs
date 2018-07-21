import finalHandler from 'finalhandler';
import http from 'http';
import serveStatic from 'serve-static';
import path from 'path';

import resetServer from '../javascript-scripts/reset-server.mjs';

// Serve up mocha tests
const serve = serveStatic('integration-test/src', { index: ['index.html'] });

// Create server
const server = http.createServer((req, res) => {
  const requested = path.basename(req.url);
  if (requested === 'reset-server') {
    resetServer();
    res.statusCode = 200;
    res.end();
  }
  serve(req, res, finalHandler(req, res));
});

// Listen
server.listen(3000, () => {
  console.log('listening on port 3000');
});
