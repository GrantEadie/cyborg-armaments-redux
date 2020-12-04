export default (state = false, action) => {
  const { formVisibleOnPage } = action;
  switch(action.type) {
    case 'FORM_VISIBLE':
      return formVisibleOnPage
    default:
      return state
  }
}