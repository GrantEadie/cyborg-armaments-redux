import masterPartListDefault from './STARTING_DATA';
import * as c from './../actions/ActionTypes';

export default (state = masterPartListDefault, action) => {
  const { masterPartList } = action;
  switch (action.type) {
    case c.UPDATE_PART_LIST:
      return masterPartList
    default: 
      return state;
  }
}