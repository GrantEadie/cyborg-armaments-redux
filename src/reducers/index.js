import bodyTypeVisibleReducer from './bodyType-visible-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({ 
  bodyTypeVisibleOnPage: bodyTypeVisibleReducer
})

export default rootReducer;