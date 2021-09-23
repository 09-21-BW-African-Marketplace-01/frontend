import { FETCH_START_USER, FETCH_SUCCESS_USER, FETCH_FAIL_USER } from "../actions/userAction";

const initialState = {
    user:{},
    isFetching:false,
    error:''
}

export const reducerUser = (state = initialState, action) => {
    switch(action.type){
        case(FETCH_START_USER):
            return ({
                ...state,
                isFetching: true,
                error: ''
            })
        case(FETCH_SUCCESS_USER):
            return ({
                ...state,
                user: action.payload,
                isFetching: false,
                error: ''
            })
        case(FETCH_FAIL_USER):
            return ({
                ...state,
                isFetching: false,
                error: action.payload
            })
        default:
            return state
    }
}