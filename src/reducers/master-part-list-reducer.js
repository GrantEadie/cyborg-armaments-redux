import masterPartListDefault from './STARTING_DATA';

export default (state = masterPartListDefault, action) => {
  const { masterPartList } = action;
  switch (action.type) {
    case 'UPDATE_PART_LIST':
      return masterPartList
    default: 
      return state;
  }
}