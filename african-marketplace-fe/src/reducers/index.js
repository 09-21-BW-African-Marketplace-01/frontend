import { FETCH_FAIL, FETCH_START, FETCH_SUCCESS, ADD_ITEM } from "../actions"

export const initialState = {
    items: [
        {
            item_id: '',
            user_id: '',
            market_name: '',
            item_description: '',
            item_name: '',
            item_price: ''
        }
    ],
    isFetching: false,
    error: ''
}


const reducer = (state = initialState, action ) => {
switch(action.type) {
        case(FETCH_START):
            return ({
            ...state,
            items: [],
            isFetching: true,
            error: '',
        })
        case(FETCH_SUCCESS):
            return({
            ...state,
            items: action.payload,
            isFetching: false,
            error: '',
        })
        case(FETCH_FAIL):
            return({
            ...state,
            items: [],
            isFetching: false,
            error: action.payload,
            })
        case(ADD_ITEM):
            return({
                ...state,
                items: [...state.items, action.payload]
            })
        default: return state    
    }
}

export default reducer 
