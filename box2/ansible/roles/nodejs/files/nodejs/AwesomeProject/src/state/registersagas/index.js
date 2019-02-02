import * as auth from '../auth/sagas';
import * as reports from '../reports/sagas';

const sagas = {
    ...auth,
    ...reports,
}

function registerWithMiddleware(middleware) {
    console.log(sagas);
    for (const saga in sagas) {
        middleware.run(sagas[saga]);
    }
}

export {registerWithMiddleware};

