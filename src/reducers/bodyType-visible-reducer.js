

export default (state = 0, action) => {
  const { bodyTypeVisibleOnPage } = action;
  switch (action.type){
    case 'FORM_VISIBLE':
      return bodyTypeVisibleOnPage
    default:
      return state;
  }
}