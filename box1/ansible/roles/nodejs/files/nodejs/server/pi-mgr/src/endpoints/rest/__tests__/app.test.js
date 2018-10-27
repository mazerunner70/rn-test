const request = require('supertest');
const express = require('express');
 
const app = express();
 
app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});
 
request(app)
  .get('/user')
  .expect('Content-Type', /json/)
  .expect('Content-Length', '15')
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
  });

  test('responds with json', function() {
    return request(app)
      .get('/user')
      .set('Accept', 'application/json')
      .expect(200)
      .then(response => {
          expect(response.body.name).toEqual('john')
      })
  });