import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import routes from './routes/index.mjs';
import dependencyRoutes from './routes/dependency.mjs';

process.title = 'myApp'; // Allows for stop signal:
// https://stackoverflow.com/questions/23258421/how-to-stop-app-that-node-js-express-npm-start


const app = express();
const PORT = process.env.PORT || 8080;
app.use(bodyParser.json());
app.use(cors());

app.use('/', routes);
app.use('/dependency', dependencyRoutes);


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

