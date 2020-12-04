export default (state = null, action) => {
  const {selectedPart} = action;
  switch(action.type) {
    case 'SELECT_PART':
      return selectedPart
    default:
      return state
  }
}