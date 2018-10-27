// var chai = require('chai');
const server = 'http://localhost:8080';
const expect = chai.expect;
const assert = chai.assert;

function testAsync(done, fn) {
  try {
    fn();
    done();
  } catch(err) {
    done(err);
  }
}

describe('Test REST api', () => {
  it('should return correct resuylt', (done) => {
    console.log('here');
    chai.request(server)
      .get('/dependency')
      .end((err, res) => {
        console.log('here2');
        if (err) {
          throw err;
        }
        testAsync(done, function () {
          expect(res).to.have.status(200);
          assert.equal('{"data":[]}', res.body.result);
        }.bind(res));
      });
  });
})