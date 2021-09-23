import axios from 'axios';
export const FETCH_START_USER = 'FETCH_START_USER';
export const FETCH_SUCCESS_USER = 'FETCH_SUCCESS_USER';
export const FETCH_FAIL_USER = 'FETCH_FAIL_USER';


export const fetchUserStart = () => {
    return({ type: FETCH_START_USER })
}

export const fetchUserSuccess = (user) => {
    return({ type: FETCH_SUCCESS_USER, payload: user })
}

export const fetchUserFail = (error) => {
    return({ type: FETCH_FAIL_USER, payload: error })
}
