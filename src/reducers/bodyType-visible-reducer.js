import * as c from './../actions/ActionTypes'

export default (state = 0, action) => {
  const { bodyTypeVisibleOnPage } = action;
  switch (action.type){
    case c.CHANGE_VISIBLE_BODYTYPE:
      return bodyTypeVisibleOnPage
    default:
      return state;
  }
}