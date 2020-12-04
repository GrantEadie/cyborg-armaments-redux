export default (state = false, action) => {
  const { editing } = action;
  switch(action.type) {
    case 'EDIT':
      return editing
    default:
      return state
  }
}