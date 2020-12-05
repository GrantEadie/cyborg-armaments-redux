import * as c from './../actions/ActionTypes';

export default (state = 0, action) => {
  const { cartTotal } = action;
  switch(action.type) {
    case c.CART_TOTAL:
      return cartTotal
    default: 
      return state
  }
}