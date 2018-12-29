import { GET_COINS, LOADING } from '../actions/types';

const initialState = {
    coins: {}/*,
    loading: true*/
};

export default function (state = initialState, action) {
    switch (action.type){
        case GET_COINS:
            return{
                ...state,
                coins: action.payload
            };
        /*case LOADING:
            return{
                ...state,
                loading: action.payload
            };*/
        default:
            return state;
    }
}