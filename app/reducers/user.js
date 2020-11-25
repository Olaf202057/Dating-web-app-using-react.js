const user = (state, action) => {
  if (state === undefined) {
    state = {user: {}}
  }
  switch (action.type) {
    default:
      return state
  } 
}

export default user;