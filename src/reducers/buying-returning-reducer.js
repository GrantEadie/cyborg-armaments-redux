

export default (state = [], action) => {
  const { clone } = action;
  switch (action.type) {
    case 'BUY_PART':
      return clone
    default: 
      return state;
  }
}