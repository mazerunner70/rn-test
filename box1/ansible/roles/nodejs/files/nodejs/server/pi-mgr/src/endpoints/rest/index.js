import './server';

// import express from 'express';
// import bodyParser from 'body-parser';

// import routes from './routes/home';
// import dependencyRoutes from './routes/dependency';

// function initialise() {
//   const port = process.env.PORT || 5080; // change so no clash with Jira

//   const app = express();
//   app.use(bodyParser.json());
//   app.use(bodyParser.urlencoded({extended: false}));

//   app.use('/', routes);
//   app.use('/dependency', dependencyRoutes);

//   app.listen(port, () => {
//     console.log(`listening on port ${port}`);
//   });
//   return app;
// }

// const server = initialise();

// export default server;