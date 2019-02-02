
function getUsername(state) {
    return state &&
        state.auth &&
        state.auth.details &&
        state.auth.details.username;
}

export {
    getUsername,
}