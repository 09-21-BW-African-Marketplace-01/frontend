import axios from "axios";

export const FETCH_START_USERMARKET = 'FETCH_START_USERMARKET';
export const FETCH_SUCCESS_USERMARKET = 'FETCH_SUCCESS_USERMARKET';
export const FETCH_FAIL_USERMARKET = 'FETCH_FAIL_USERMARKET';


export const fetchUserMarker = (id) => {
    return(dispatch) => {
        dispatch(fetchUserStart())
        axios.get(`https://back-end-african-market.herokuapp.com/api/markets/${id}`)
            .then(resp => {
                dispatch(fetchUserSuccess(resp.data))
            })
            .catch(err=>{
                dispatch((fetchUserFail('No Markets to Display')))
            })
    }
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
