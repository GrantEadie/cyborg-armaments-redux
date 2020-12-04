import bodyTypeVisibleReducer from './bodyType-visible-reducer';
import masterPartListReducer from './buying-returning-reducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ 
  bodyTypeVisibleOnPage: bodyTypeVisibleReducer,
  masterPartList: masterPartListReducer
})

export default rootReducer;