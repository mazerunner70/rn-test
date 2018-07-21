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

  dependencyRouter.get('/:name', async (req, res) => {
    const reqName = req.params.name;
    res.status(200).send({
      data: await dependencyRepo.getByName(reqName),
    });
  });

  dependencyRouter.put('/:name', async (req, res) => {
    const reqName = req.params.name;
    const dependency = Dependency.fromJsonObject(req.body);
    if (reqName !== dependency.name) throw new Error(`update name ${reqName} must be the same as request body name ${dependency.name}`);
    res.status(200).send(await dependencyRepo.update(dependency));
  });

  dependencyRouter.delete('/:name', async (req, res) => {
    const reqName = req.params.name;
    res.status(200).send(await dependencyRepo.delete(reqName));
  });

  dependencyRouter.post('/', async (req, res) => {
    const dependency = Dependency.fromJsonObject(req.body);
    const result = await dependencyRepo.insert(dependency.name, dependency.currVer, dependency.lastCheck);
    console.log('-->', result);
    res.status(200).send(result);
  });
  console.log(`Db set up: ${db}`);
}

dependencyRoute(router);

export default router;
