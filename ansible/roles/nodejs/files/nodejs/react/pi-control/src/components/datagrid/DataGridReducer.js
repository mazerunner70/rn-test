import { merge } from 'lodash';

export default (state, action) => {
  console.log(']]]',action);
  switch (action.type) {
    case 'InitialDependencyState':
      return {
        ...state,
        dependencies: action.payload.dependencies,
      };
    case 'addDependency':
       return addDependency(state, action.payload);

    default:
      return {...state};
  }
}

function addDependency(state, newDependency)  {
  let newState = merge({}, state);
  newState.dependencies.products.push(newDependency);
  console.log('===',newState);
  return newState;
}