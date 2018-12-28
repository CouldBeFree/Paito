import { GET_COINS, LOADING } from './types';
import axios from 'axios';

// Get coins
export const getCoinsAsync = (val) =>{
    return {
        type: GET_COINS,
        payload: val
    }
};

export const loading = () => {
    return {
        type: LOADING
    }
};

export const getCoins = () => {
    return dispatch => {
        dispatch(loading());
        axios.get('https://min-api.cryptocompare.com/data/all/coinlist')
            .then(res => {
                dispatch(getCoinsAsync(res))
            })
            .catch(err => {
                console.log(err);
            })
    }
};