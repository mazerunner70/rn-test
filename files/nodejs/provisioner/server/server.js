
class Server {

  constructor() {
    this.restify = require('restify');
    var DependencyTracker = require("../dependency-tracker/dependency-tracker.js");
    this.dependencyTracker = new DependencyTracker();
    this.dependencyTracker.sayHello("Me");
  }

  respond(req, res, next) {
    res.send('hello ' + req.params.name);
    next();
  }
  
  drespond(req, res, next) {
    res.send('hello ' + this.dependencyTracker.sayHello("Me"));
    next();
  }

  start() {
    var server = this.restify.createServer();
    server.get('/hello/:name', this.respond);
    server.get('/provision/:name', this.drespond);
    server.head('/hello/:name', this.respond);

    server.listen(8080, function() {
      console.log('%s listening at %s', server.name, server.url);
    });
  }
}

module.exports = Server
