import masterCartListReducer from '../../reducers/master-cart-reducer'
import masterPartListDefault from '../../reducers/STARTING_DATA';

describe('masterCartListReducer', () => {

  const cartClone = masterPartListDefault[2].selection[0]

  test('Should return default state if no action is triggered', () => {
    expect(masterCartListReducer({}, {type: null})).toEqual({})
  })
  test('Should return new state with added cart part', () => {
      const action = {
        type: 'ADD_CART',
        masterCartList: cartClone
      }
      expect(masterCartListReducer({}, action)).toEqual(cartClone);
    })
})