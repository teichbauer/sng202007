// offer rootReducer
import { combineReducers } from 'redux';
// in file itemReducer.js, an anonymous function has been exported
// here we can call it any name
import itemReducer55 from './itemReducer';

export default combineReducers({
    item: itemReducer55
});