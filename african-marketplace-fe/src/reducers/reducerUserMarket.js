import { FETCH_START_USERMARKET, FETCH_SUCCESS_USERMARKET, FETCH_FAIL_USERMARKET } from "../actions/userMarketAction";

const initialState = {
    userMarket:{
        items: [],
        market_id: null,
        market_name: '',
        name: '',
        user_id: localStorage.getItem('user_id')
    },
    isFetching:false,
    error:''
} 

export const reducerUserMarket = (state = initialState, action) => {
    switch(action.type){
        case(FETCH_START_USERMARKET):
            return ({
                ...state,
                isFetching: true,
                error: ''
            })
        case(FETCH_SUCCESS_USERMARKET):
            return ({
                ...state,
                userMarket: action.payload,
                isFetching: false,
                error: ''
            })
        case(FETCH_FAIL_USERMARKET):
            return ({
                ...state,
                isFetching: false,
                error: action.payload
            })
        default:
            return state
    }
}