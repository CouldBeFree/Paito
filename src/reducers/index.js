import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import getCoinsReducer from './getCoinsReducer';
import loadingReducer from './loadingReducer';
import selectedCoins from './selectedCoinReducer';

export default combineReducers({
    auth: authReducer,
    error: errorReducer,
    coinsList: getCoinsReducer,
    isLoading: loadingReducer,
    selectedCoins: selectedCoins
})