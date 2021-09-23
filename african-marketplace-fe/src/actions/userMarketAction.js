import axios from 'axios';
export const FETCH_START_USERMARKET = 'FETCH_START_USERMARKET';
export const FETCH_SUCCESS_USERMARKET = 'FETCH_SUCCESS_USERMARKET';
export const FETCH_FAIL_USERMARKET = 'FETCH_FAIL_USERMARKET';

export const getUserInfo = (user_id) => dispatch => {
    dispatch({ type:FETCH_START_USERMARKET});
    
    axios.get(`https://back-end-african-market.herokuapp.com/api/markets/${user_id}`)
        .then(resp => {
            dispatch({ type: FETCH_SUCCESS_USERMARKET, payload: resp.data})
        })
        .catch(err=>{
            dispatch({ type:FETCH_FAIL_USERMARKET, payload: err })
        })
}


export const fetchUserStart = () => {
    return({ type: FETCH_START_USERMARKET })
}

export const fetchUserSuccess = (user) => {
    return({ type: FETCH_SUCCESS_USERMARKET, payload: user })
}

export const fetchUserFail = (error) => {
    return({ type: FETCH_FAIL_USERMARKET, payload: error })
}
