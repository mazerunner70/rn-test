import request from 'supertest';
import moment from 'moment';
import app from '../app';


test('test root endpoint', () => {
  return request(app)
    .get('/')
    .set('Accept', 'application/json')
    .expect(200)
    .then(response => {
        console.log(response);
        expect(response.statusCode).toEqual(200);
        expect(response.text).toEqual('now then');
    })
});

test('add dependency', async () => {
  await request(app)
    .get('/dependency')
    .set('Accept', 'application/json')
    .expect(200)
    .then(response => {
        console.log('044');
        expect(response.statusCode).toEqual(200);
        expect(response.body).toEqual({ data: [] });
    });
  const unixTime = moment.unix(1537639570);
  await request(app)
    .post('/dependency')
    .send({name:'name', currVer: 3, lastCheck: unixTime})
    .set('Accept', 'application/json')
    .expect(200)
    .then(response => {
        console.log('045');
        expect(response.statusCode).toEqual(200);
        expect(response.body).toEqual({ id: null });
    })
  await request(app)
    .get('/dependency')
    .set('Accept', 'application/json')
    .expect(200)
    .then(response => {
        // console.log('046', response);
        expect(response.statusCode).toEqual(200);
        expect(response.body.data[0].name).toEqual('name');
        expect(response.body.data[0].currVer).toEqual(3);
        expect(JSON.stringify(response.body.data[0].lastCheck)).toEqual(JSON.stringify(unixTime));
    }); 
  await request(app)
    .put('/dependency/name')
    .send({name:'name', currVer: 4, lastCheck: unixTime})
    .set('Accept', 'application/json')
    .expect(200)
    .then(response => {
        console.log('045');
        expect(response.statusCode).toEqual(200);
        expect(response.body).toEqual({ id: null });
    })
  await request(app)
    .get('/dependency')
    .set('Accept', 'application/json')
    .expect(200)
    .then(response => {
        // console.log('046', response);
        expect(response.statusCode).toEqual(200);
        expect(response.body.data[0].name).toEqual('name');
        expect(response.body.data[0].currVer).toEqual(4);
        expect(JSON.stringify(response.body.data[0].lastCheck)).toEqual(JSON.stringify(unixTime));
    }); 
  await request(app)
    .delete('/dependency/name')
    .set('Accept', 'application/json')
    .expect(200)
    .then(response => {
        console.log('045');
        expect(response.statusCode).toEqual(200);
        expect(response.body).toEqual({ id: null });
    })
  await request(app)
    .get('/dependency')
    .set('Accept', 'application/json')
    .expect(200)
    .then(response => {
        console.log('044');
        expect(response.statusCode).toEqual(200);
        expect(response.body).toEqual({ data: [] });
    });     
})

