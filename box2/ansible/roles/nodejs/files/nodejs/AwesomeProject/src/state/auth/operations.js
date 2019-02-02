
function isAuthenticated(state) {
//    console.log(77, state)
    return state.auth.details.isAuthenticated;
}

export {
    isAuthenticated,
}