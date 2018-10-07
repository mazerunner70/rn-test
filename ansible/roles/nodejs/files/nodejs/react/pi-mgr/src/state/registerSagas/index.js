import * as Util from '../util/sagas';
import * as dependencies from '../dependencies/sagas';


const sagas = {
  ...Util,
  ...dependencies,
};

function registerWithMiddleware(middleware: { run: Function }) {
  console.log(sagas);
  for (const saga in sagas){
    middleware.run(sagas[saga]);
  };
}

export { registerWithMiddleware };