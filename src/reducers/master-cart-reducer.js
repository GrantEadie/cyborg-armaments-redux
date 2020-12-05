import * as c from './../actions/ActionTypes';

export default (state = [], action) => {
  const { masterCartList } = action;
  switch(action.type) {
    case c.UPDATE_CART:
      return masterCartList
    default: 
      return state
  }
}