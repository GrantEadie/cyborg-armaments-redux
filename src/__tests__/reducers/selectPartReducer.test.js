import selectedPartReducer from '../../reducers/select-part-reducer';

describe('selectedPartReducer', () => {
  test('should return default state if no action is triggered', () => {
    expect(selectedPartReducer({}, { type: null})).toEqual({});
  })
    test('should return updated state when passed action', () => {
      const action = {
        type: 'SELECT_PART',
        selectedPart: {}
      }
      expect(selectedPartReducer({}, action)).toEqual({})
    })
})