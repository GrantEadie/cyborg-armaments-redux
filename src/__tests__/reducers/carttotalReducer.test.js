import cartTotal from '../../reducers/cart-total-reducer';

describe('cartTotal', () => {
  test('Should return default state if no action is triggered', () => {
    expect(cartTotal(0, {type:null})).toEqual(0)
  })

    test('should return updated cart total when passed new amount', () => {
      const action = {
        type: 'CART_TOTAL',
        cartTotal: 700
      }
      expect(cartTotal(455, action)).toEqual(700);
    })
})