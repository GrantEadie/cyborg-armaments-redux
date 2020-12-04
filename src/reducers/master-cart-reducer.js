export default (state = [], action) => {
  const { masterCartList } = action;
  switch(action.type) {
    case 'UPDATE_CART':
      return masterCartList
    default: 
      return state
  }
}