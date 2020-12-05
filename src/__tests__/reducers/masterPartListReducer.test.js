import buyingReducer from '../../reducers/master-part-list-reducer'
import masterPartListDefault from '../../reducers/STARTING_DATA'

describe('buyingReducer', () => {
  const defaultState = masterPartListDefault;
  const testClone = [...defaultState];
  testClone[1].selection[0].partQuantity = testClone[1].selection[0].partQuantity -1;
  const clone = [...defaultState];
  clone[1].selection[0].partQuantity = clone[1].selection[0].partQuantity -1;

  test('Should return default state if no action is triggered', () => {
    expect(buyingReducer(defaultState, { type: null })).toEqual(defaultState);
  })

  test('Should return new state when "buying" something', () => {
    const action = {
      type: 'UPDATE_PART_LIST',
      masterPartList: clone
    }
    expect(buyingReducer(defaultState, action)).toEqual(testClone)
  })
})