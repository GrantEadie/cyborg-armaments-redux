export default (state = [], action) => {
  const { masterCartList } = action;
  switch(action.type) {
    case 'ADD_CART':
      return masterCartList
    default: 
      return state
  }
}