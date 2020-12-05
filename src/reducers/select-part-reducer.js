import * as c from './../actions/ActionTypes';

export default (state = null, action) => {
  const {selectedPart} = action;
  switch(action.type) {
    case c.SELECT_PART:
      return selectedPart
    default:
      return state
  }
}