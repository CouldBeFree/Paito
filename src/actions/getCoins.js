import { GET_COINS, LOADING } from './types';
import axios from 'axios';

// Get coins
export const getCoinsAsync = (val) =>{
    return {
        type: GET_COINS,
        payload: val
    }
};

export const loading = (val) => {
    return {
        type: LOADING,
        payload: val
    }
};

export const getCoins = () => {
    return dispatch => {
        dispatch(loading(true));
        axios.get('https://min-api.cryptocompare.com/data/all/coinlist')
            .then(res => {
                dispatch(getCoinsAsync(res.data.Data));
                dispatch(loading(false))
            })
            .catch(err => {
                console.log(err);
            })
    }
};