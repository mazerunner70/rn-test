
function getDependencyList(state) {
  return state.dependencies.list
}

function isRowInDependencies( state, row ) {
  console.log('999', state);
  console.log('989', row);
  console.log('979', typeof(row.lastCheck));
  try {
    const dependencies = getDependencyList(state);
    console.log('969', dependencies)
    return dependencies.findIndex(dependency => dependency.name == row.name)>-1;
  } catch( err) {
    console.log(err);
  }
}

export {
  isRowInDependencies,
  getDependencyList,
}