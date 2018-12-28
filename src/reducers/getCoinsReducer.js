import { GET_COINS, LOADING } from '../actions/types';

const initialState = {
    coins: {}
};

export default function (state = initialState, action) {
    switch (action.type){
        case GET_COINS:
            return{
                ...state,
                coins: action.payload,
                ...state.loading = false
            };
        case LOADING:
            return{
                ...state.loading = true
            };
        default:
            return state;
    }
}