
// var chai = require('chai');
const server = 'http://localhost:8080';
const expect = chai.expect;
const assert = chai.assert;

function testAsync(done, fn) {
  try {
    fn();
    done();
  } catch (err) {
    done(err);
  }
}

async function resetServer() {
  const response = await fetch('/reset-server');
  const data = await response.json();
  console.log(data);
  return data;
}

describe('Test empty initially', () => {
  it('should return empty initially', (done) => {
    chai.request(server)
      .get('/dependency')
      .end((err, res) => {
        if (err) {
          throw err;
        }
        testAsync(done, (() => {
          expect(res).to.have.status(200);
          expect(res.body).to.not.be.undefined;
          expect(res.body).to.have.keys(['data']);
          const value = res.body.data;
          expect(value).to.eql([]);
        }));
      });
  });
});
describe('Test adding one entry', () => {
  it('add an entry', (done) => {
    chai.request(server)
      .post('/dependency')
      .send({
        name: 'dummy',
        currVer: 2.4,
        lastCheck: new Date('2018-01-01T01:20:30.000Z'),
      }) // https://groups.google.com/forum/#!topic/chaijs/-KF5Jf9t8z4
      .end((err, res) => {
        expect(err).to.equal(null);
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.have.keys(['status', 'details']);
        const value = res.body.status;
        expect(value).to.eql('SUCCESS');
        done();
      });
  });
  it('should return one entry found', (done) => {
    chai.request(server)
      .get('/dependency')
      .end((err, res) => {
        if (err) {
          throw err;
        }
        testAsync(done, (() => {
          expect(res).to.have.status(200);
          expect(res.body).to.not.be.undefined;
          expect(res).to.be.json;
          expect(res.body).to.have.keys(['data']);
          const data = res.body.data;
          expect(data).to.be.an('array');
          expect(data).to.have.length(1);
          expect(data[0]).to.be.a('object');
          expect(data[0]).to.have.keys(['name', 'currVer', 'lastCheck']);
          expect(data[0].name).to.be.a('string');
          expect(data[0].name).to.eql('dummy');
          expect(data[0].currVer).to.be.a('number');
          expect(data[0].currVer).to.eql(2.4);
          expect(data[0].lastCheck).to.be.a('string');
          expect(data[0].lastCheck).to.eql('2018-01-01T01:20:30.000Z');
        }));
      });
  });
});
describe('Test adding second entry', () => {
  it('add an entry', (done) => {
    chai.request(server)
      .post('/dependency')
      .send({
        name: 'dummy1',
        currVer: 2.5,
        lastCheck: new Date('2019-01-01T01:20:30.000Z'),
      }) // https://groups.google.com/forum/#!topic/chaijs/-KF5Jf9t8z4
      .end((err, res) => {
        expect(err).to.equal(null);
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.have.keys(['status', 'details']);
        const value = res.body.status;
        expect(value).to.eql('SUCCESS');
        done();
      });
  });
  it('should return two entries found', (done) => {
    chai.request(server)
      .get('/dependency')
      .end((err, res) => {
        if (err) {
          throw err;
        }
        testAsync(done, (() => {
          expect(res).to.have.status(200);
          expect(res.body).to.not.be.undefined;
          expect(res).to.be.json;
          expect(res.body).to.have.keys(['data']);
          const data = res.body.data;
          expect(data).to.be.an('array');
          expect(data).to.have.length(2);
          expect(data[0]).to.be.a('object');
          expect(data[0]).to.have.keys(['name', 'currVer', 'lastCheck']);
          data.sort((a, b) => a.name > b.name);// ensure rows are in expected order
          expect(data[0].name).to.be.a('string');
          expect(data[0].name).to.eql('dummy');
          expect(data[0].currVer).to.be.a('number');
          expect(data[0].currVer).to.eql(2.4);
          expect(data[0].lastCheck).to.be.a('string');
          expect(data[0].lastCheck).to.eql('2018-01-01T01:20:30.000Z');
          expect(data[1]).to.be.a('object');
          expect(data[1]).to.have.keys(['name', 'currVer', 'lastCheck']);
          expect(data[1].name).to.be.a('string');
          expect(data[1].name).to.eql('dummy1');
          expect(data[1].currVer).to.be.a('number');
          expect(data[1].currVer).to.eql(2.5);
          expect(data[1].lastCheck).to.be.a('string');
          expect(data[1].lastCheck).to.eql('2019-01-01T01:20:30.000Z');
        }));
      });
  });
});
describe('Test finding row', () => {

  it('Find row by name', (done) => {
    chai.request(server)
      .get('/dependency/dummy')
      .end((err, res) => {
        if (err) {
          throw err;
        }
        testAsync(done, (() => {
          expect(res).to.have.status(200);
          expect(res.body).to.not.be.undefined;
          expect(res).to.be.json;
          expect(res.body).to.have.keys(['data']);
          const data = res.body.data;
          expect(data).to.be.an('object');
          expect(data).to.have.keys(['name', 'currVer', 'lastCheck']);
          expect(data.name).to.be.a('string');
          expect(data.name).to.eql('dummy');
          expect(data.currVer).to.be.a('number');
          expect(data.currVer).to.eql(2.4);
          expect(data.lastCheck).to.be.a('string');
          expect(data.lastCheck).to.eql('2018-01-01T01:20:30.000Z');
        }));
      });
  });
  it('To not find row by name', (done) => {
    chai.request(server)
      .get('/dependency/dummy3')
      .end((err, res) => {
        if (err) {
          throw err;
        }
        testAsync(done, (() => {
          expect(res).to.have.status(200);
          expect(res.body).to.not.be.undefined;
          expect(res).to.be.json;
          expect(res.body).to.have.keys(['data']);
          expect(res.body.data).to.equal(null);
        }));
      });
  });
});
describe('Test update a row', () => {
  it('To update a row by name', (done) => {
    chai.request(server)
      .put('/dependency/dummy1')
      .send({
        name: 'dummy1',
        currVer: 2.9,
        lastCheck: new Date('2020-01-01T01:20:30.000Z'),
      })
      .end((err, res) => {
        if (err) {
          throw err;
        }
        testAsync(done, (() => {
          expect(res).to.have.status(200);
          expect(res.body).to.not.be.undefined;
          expect(res).to.be.json;
          expect(res.body).to.have.keys(['status', 'details']);
          expect(res.body.status).to.equal('SUCCESS');
          expect(res.body.details).to.be.an('object');
          expect(res.body.details).to.have.keys(['id']);
          expect(res.body.details.id).to.be.null;
        }));
      });
  });
});
describe('Delete a row', () => {
  it('To delete a row by name', (done) => {
    chai.request(server)
      .delete('/dependency/dummy')
      .end((err, res) => {
        if (err) {
          throw err;
        }
        testAsync(done, (() => {
          expect(res).to.have.status(200);
          expect(res.body).to.not.be.undefined;
          expect(res).to.be.json;
          expect(res.body).to.have.keys(['status', 'details']);
          expect(res.body.status).to.equal('SUCCESS');
          expect(res.body.details).to.be.an('object');
          expect(res.body.details).to.have.keys(['id']);
          expect(res.body.details.id).to.be.null;
        }));
      });
  });
});

describe('Reset server', () => {
  it('async reset started', () => {
    resetServer();
  });
});
