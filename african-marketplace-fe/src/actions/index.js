import axios from 'axios'


export const FETCH_START = 'FETCH_START'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAIL = 'FETCH_FAIL'
export const ADD_ITEM = 'ADD_ITEM'

export const fetchItems = () => {
    return(dispatch) => {
        dispatch(fetchStart())
        axios.get('MOCK_DATA.json')
            .then(res => {
                dispatch(fetchSuccess(res.data))
            })
            .catch(err => {
                dispatch(fetchFail(err))
            })
    }
}



export const fetchStart = () => {
    return({ type: FETCH_START })
}

export const fetchSuccess = (items) => {
    return({ type: FETCH_SUCCESS, payload: items })
}

export const fetchFail = (error) => {
    return({ type: FETCH_FAIL, payload: error })
}

export const addItem = (item) => {
    return ({type: ADD_ITEM, payload: item})
}

