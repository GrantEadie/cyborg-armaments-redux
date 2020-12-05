import * as c from './../actions/ActionTypes';

export default (state = false, action) => {
  const { formVisibleOnPage } = action;
  switch(action.type) {
    case c.FORM_VISIBLE:
      return formVisibleOnPage
    default:
      return state
  }
}