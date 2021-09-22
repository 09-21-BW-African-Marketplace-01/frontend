import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router'
import { getMarket } from '../actions/marketAction'

const ViewMarket = (props) => {
    const { getMarket, market, error, isFetching } = props
    const{ id } = useParams()


    useEffect(() => {
        getMarket(id)
    },[])

    if(isFetching){
        return <h3>Fetching data...</h3>
    }

    console.log(market)

    return (
        <div>
            <h1>Welcome to {market.market_name}</h1>
            <p>In stock we have: </p>
            {
                error && <div>Error: {error}</div>
            }
            {
                market.items.map((items, idx) => {
                    return (
                        <div key={idx}>
                        <p>{items.item_name} ${items.item_price}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = state => {
    return({
        market: state.reducerMarket.market,
        isFetching: state.reducerMarket.isFetching,
        error: state.reducerMarket.error
    })
}

export default connect(mapStateToProps, { getMarket } )(ViewMarket)
