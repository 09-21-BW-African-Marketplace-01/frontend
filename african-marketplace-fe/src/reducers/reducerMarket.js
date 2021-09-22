import { FETCH_START_MARKET, FETCH_ERROR_MARKET, FETCH_SUCCESS_MARKET } from "../actions/marketAction"


const initialState = 
{
    market:[],
    isFetching: false,
    error: '',
}

export function reducerMarket (state = initialState, action) {
    switch(action.type){
        case(FETCH_START_MARKET):
            return ({
                ...state, 
                market:[],
                isFetching: true,
                error: ''
            })
        case(FETCH_SUCCESS_MARKET):
            return ({
                ...state,
                market: action.payload, 
                isFetching: false,
                error: ''
            })
        case(FETCH_ERROR_MARKET):
            return ({
                ...state,
                market: [],
                isFetching: false,
                error: action.payload
            })
        default:
            return state
    }
}

