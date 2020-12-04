import editingReducer from '../../reducers/editing-reducer'

describe('editingReducer', () => {
  test('Should return dfault state if no action is triggered', () => {
    expect(editingReducer(true, { type: null })).toEqual(true);
  })
    test('should return updated editing boolean when passed into action', () => {
      const action = {
        type: 'EDIT',
        editing: true
      }
      expect(editingReducer(false, action)).toEqual(true)
    })
})