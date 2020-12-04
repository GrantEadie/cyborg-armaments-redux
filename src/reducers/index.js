import bodyTypeVisibleReducer from './bodyType-visible-reducer';
import masterPartListReducer from './buying-returning-reducer'
import masterCartListReducer from './master-cart-reducer';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({ 
  bodyTypeVisibleOnPage: bodyTypeVisibleReducer,
  masterPartList: masterPartListReducer,
  masterCartList: masterCartListReducer
})

export default rootReducer;