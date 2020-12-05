import bodyTypeVisibleReducer from '../../reducers/bodyType-visible-reducer'

describe('bodyTypeVisibleReducer', () => {

  test('Should return default state if no action is triggered', () => {
    expect(bodyTypeVisibleReducer(0, { type: null })).toEqual(0)
  })

    test('Should successfully add new id number to state', () => {
      const action = {
        type: 'FORM_VISIBLE',
        bodyTypeVisibleOnPage: 4
      }
      expect(bodyTypeVisibleReducer(3, action)).toEqual(4)
    })
})