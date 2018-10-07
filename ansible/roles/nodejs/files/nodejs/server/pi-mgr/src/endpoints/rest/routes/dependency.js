import express from 'express';
import * as db from '../../../api/dependencies';
import moment from 'moment';

function Rest2JS(jsonObject) {
  //{name:'name', currVer: 3, lastCheck: unixTime}
  return {
    name: jsonObject.name,
    currVer: Number(jsonObject.currVer),
    lastCheck: moment(jsonObject.lastCheck, "DD-MM-YYYY").startOf('day')
  }
}

function JS2Rest(jsObject) {
  return {
    name: jsObject.name,
    currVer: jsObject.currVer,
    lastCheck: jsObject.lastCheck.format("DD-MM-YYYY")
  }
}

const router = express.Router();

router.get('/', async (req, res) => {
  // console.log('024');
  const data = await db.getAll()
  // console.log('025', data);
  const rows = data.map(row=> JS2Rest(row));
  res.status(200).send({
    data: rows,
  });
});

router.get('/:name', async (req, res) => {
  const reqName = req.params.name;
  res.status(200).send({
    data: await db.getByName(reqName),
  });
});

router.put('/:name', async (req, res, next) => {
  const reqName = req.params.name;
  const dependency = Rest2JS(req.body);
  if (reqName !== dependency.name) {
    return next({ status: 400, message: `put param '${reqName}' must be the same as request body name ${dependency.name}` });
  }
  res.status(200).send(await db.updateRow(dependency));
});

router.delete('/:name', async (req, res) => {
  const reqName = req.params.name;
  res.status(200).send(await db.deleteRow(reqName));
});

router.post('/', async (req, res) => {
  const dependency = Rest2JS(req.body);
  console.log('004', dependency);
  const result = await db.insertRow(dependency);
  console.log('-->', result);
  const statusCode = result.status === 'FAILURE' && result.details.errno === 19 ? 409 : 200;
  res.status(statusCode).send(result);
});

export default router;
