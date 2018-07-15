import express from 'express';
import sqliteDb from '../../dao/sqlite-db.mjs';
import Dao from '../../dao/sqlite-dao.mjs';
import DependencyRepo from '../../dependency-tracker/dependency-repo.mjs';
import Dependency from '../../dependency-tracker/dependency.mjs';

const router = express.Router();

async function dependencyRoute(dependencyRouter) {
  const db = await sqliteDb();
  const dao = new Dao(db);
  const dependencyRepo = new DependencyRepo(dao);
  dependencyRepo.initialise();

  dependencyRouter.get('/', async (req, res) => {
    res.status(200).send({
      data: await dependencyRepo.getAll(),
    });
  });
  dependencyRouter.post('/', async (req, res) => {
    console.log(`body is:${req.body}`);
    console.log(req.body);
    const dependency = Dependency.fromJsonObject(req.body);
    const result = await dependencyRepo.insert(dependency.name, dependency.currVer, dependency.lastCheck);
    res.status(200).send(result);
  });
  console.log(`Db set up: ${db}`);
}

dependencyRoute(router);

export default router;
