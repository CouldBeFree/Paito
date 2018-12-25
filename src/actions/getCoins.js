import { GET_COINS } from './types';
import axios from 'axios';

// Get coins
export const getCoinsAsync = (val) =>{
    return {
        type: GET_COINS,
        payload: val
    }
};

export const getCoins = () => {
    return dispatch => {
        axios.get('https://min-api.cryptocompare.com/data/generateAvg?fsym=BTC&tsym=&e=Kraken')
            .then(res => {
                dispatch(getCoinsAsync(res))
            })
            .catch(err => {
                console.log(err);
            })
    }
};

/*
axios.get('https://min-api.cryptocompare.com/data/generateAvg?fsym=BTC&tsym=&e=Kraken')
    .then(res => {
        console.log(res.data)
    })
    .catch(function (error) {
        console.log(error);
    });*/
