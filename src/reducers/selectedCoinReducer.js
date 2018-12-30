import { SELECTED_COIN } from '../actions/types';

const intialState = {
    selectedCoins: []
};

export default function (state = intialState, action) {
    switch(action.type){
        case SELECTED_COIN:
            return{
                ...state,
                selectedCoins: state.selectedCoins.concat(action.payload)
            };
        default:
            return state
    }
}