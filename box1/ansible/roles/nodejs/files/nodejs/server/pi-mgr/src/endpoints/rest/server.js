import app from './app';

const port = process.env.PORT || 5080; // change so no clash with Jira

app.listen(port, () => {
  console.log(`Example app, listening on ${port}`);
})