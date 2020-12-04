export default (state = 0, action) => {
  const { cartTotal } = action;
  switch(action.type) {
    case 'CART_TOTAL':
      return cartTotal
    default: 
      return state
  }
}