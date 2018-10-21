import * as Util from '../util/sagas';
import * as dependencies from '../dependencies/sagas';
import * as authCallback from '../auth/sagas';
import * as mainPage from '../main-page/sagas';


const sagas = {
  ...Util,
  ...dependencies,
  ...mainPage,
  ...authCallback,
};

function registerWithMiddleware(middleware: { run: Function }) {
  console.log(sagas);
  for (const saga in sagas){
    middleware.run(sagas[saga]);
  };
}

export { registerWithMiddleware };