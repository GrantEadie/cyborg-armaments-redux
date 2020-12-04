export default (state = false, action) => {
  switch(action.type) {
    case 'FORM_VISIBLE':
      return !state
    default:
      return state
  }
}