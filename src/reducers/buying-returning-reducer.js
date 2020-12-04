import masterPartListDefault from './STARTING_DATA';

export default (state = masterPartListDefault, action) => {
  const { masterPartList } = action;
  switch (action.type) {
    case 'BUY_PART':
      return masterPartList
    default: 
      return state;
  }
}