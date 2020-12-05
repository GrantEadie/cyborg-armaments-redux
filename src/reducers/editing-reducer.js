import * as c from './../actions/ActionTypes';

export default (state = false, action) => {
  const { editing } = action;
  switch(action.type) {
    case c.EDIT:
      return editing
    default:
      return state
  }
}