export default (state = 0, action) => {
  const { bodyTypeVisibleOnPage } = action;
  switch (action.type){
    case 'CHANGE_VISIBLE_BODYTYPE':
      return bodyTypeVisibleOnPage
    default:
      return state;
  }
}