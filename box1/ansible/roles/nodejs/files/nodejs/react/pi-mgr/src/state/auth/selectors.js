
function getNickName(state) {
  console.log('349', state);
  return state && 
        state.auth && 
        state.auth.profile && 
        state.auth.profile.nickname;
}

export {
  getNickName,
}