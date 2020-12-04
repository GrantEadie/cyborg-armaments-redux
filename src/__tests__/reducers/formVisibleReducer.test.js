import formVisibleOnPageReducer from '../../reducers/form-visible-reducer'

describe('formVisibleOnPageReducer', () => {
  
  test('Should return default state if no action is triggered', () => {
    expect(formVisibleOnPageReducer(false, { type: null })).toEqual(false);
  })

  test('should return the opposite state when passed in action', () => {
    const action = {
      type: 'FORM_VISIBLE',
      formVisibleOnPage: true
    }
    expect(formVisibleOnPageReducer(false, action)).toEqual(true);
  })
})