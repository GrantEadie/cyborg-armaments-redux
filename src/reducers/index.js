import bodyTypeVisibleReducer from './bodyType-visible-reducer';
import masterPartListReducer from './master-part-list-reducer'
import masterCartListReducer from './master-cart-reducer';
import cartTotalReducer from './cart-total-reducer'
import { combineReducers } from 'redux';


const rootReducer = combineReducers({ 
  bodyTypeVisibleOnPage: bodyTypeVisibleReducer,
  masterPartList: masterPartListReducer,
  masterCartList: masterCartListReducer,
  cartTotal: cartTotalReducer
})

export default rootReducer;