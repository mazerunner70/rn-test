
class Server {

  constructor() {
    this.restify = require('restify');
  }

  respond(req, res, next) {
    res.send('hello ' + req.params.name);
    next();
  }

  start() {
    var server = this.restify.createServer();
    server.get('/hello/:name', this.respond);
    server.get('/provision/:name', this.respond);
    server.head('/hello/:name', this.respond);

    server.listen(8080, function() {
      console.log('%s listening at %s', server.name, server.url);
    });
  }
}

module.exports = Server
