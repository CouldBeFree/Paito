import { SELECTED_COIN } from './types';

export const selectedCoin = val => {
    return{
        type: SELECTED_COIN,
        payload: val
    }
};