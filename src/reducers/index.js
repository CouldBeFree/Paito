import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import getCoinsReducer from './getCoinsReducer';

export default combineReducers({
    auth: authReducer,
    error: errorReducer,
    coins: getCoinsReducer
})