import masterPartListDefault from './STARTING_DATA';

export default (state = masterPartListDefault, action) => {
  const { masterCartList } = action;
  switch (action.type) {
    case 'BUY_PART':
      return masterCartList
    default: 
      return state;
  }
}