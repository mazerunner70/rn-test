import restify from 'restify';
import chalk from 'chalk';
import DependencyTracker from './../dependency-tracker/dependency-tracker.mjs';

export default class Server {
  constructor() {
    this.restify = restify;
    this.dependencyTracker = new DependencyTracker();
    console.log(`Server()-> ${this}`);
  }
  respond(req, res, next) {
    console.log(`Server.respond()-> ${this}`);
    res.send(`hello ${req.params.name}`);
    next();
  }
  drespond(req, res, next) {
    console.log(`Server.drespond()-> ${this}`);
    res.send(this.dependencyTracker.respond());
    next();
  }
  start() {
    this.server = restify.createServer();
    this.server.get('/hello/:name', this.respond);
    this.server.get('/provision/:name', this.drespond.bind(this));
    this.server.head('/hello/:name', this.respond);
    console.log(`1=${this}`);
    this.server.listen(8080, this.serverStartUp.bind(this));
  }
  serverStartUp() {
    console.log(`2=${this}`);
    console.log(`${this.server.name} listening at ${this.server.url}`);
    console.log(chalk.green());
  }
}
