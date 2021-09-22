import axios from "axios";
export const FETCH_START_MARKET = "FETCH_START_MARKET";
export const FETCH_SUCCESS_MARKET = "FETCH_SUCCESS_MARKET";
export const FETCH_ERROR_MARKET = "FETCH_ERROR_MARKET";


export const getMarket= (id) => {
    return(dispatch) => {
        dispatch(fetchMarketStart())
        axios.get(`https://back-end-african-market.herokuapp.com/api/markets/${id}`)
            .then(res => {
                dispatch(fetchMarketSuccess(res.data))
            })
            .catch(err => {
                dispatch(fetchMarketError(err))
            })
    }
}

export const fetchMarketStart = () => {
    return({ type: FETCH_START_MARKET })
}

export const fetchMarketSuccess = (market) => {
    return({ type: FETCH_SUCCESS_MARKET, payload: market })
}

export const fetchMarketError = (error) => {
    return({ type: FETCH_ERROR_MARKET, payload: error })
}
