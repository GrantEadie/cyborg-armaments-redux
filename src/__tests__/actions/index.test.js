import * as actions from './../../actions';
import * as c from '../../actions/ActionTypes';
import masterPartListDefault from '../../reducers/STARTING_DATA'


describe('parts store actions', () => {

  const defaultState = masterPartListDefault;
  const testClone = [...defaultState];
  testClone[1].selection[0].partQuantity = testClone[1].selection[0].partQuantity -1;
  const clone = [...defaultState];
  clone[1].selection[0].partQuantity = clone[1].selection[0].partQuantity -1;

  test('update parts should add new parts to the state', () => {
    expect()
  })
})