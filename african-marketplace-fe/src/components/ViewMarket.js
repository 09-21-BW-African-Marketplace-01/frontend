import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getMarket } from '../actions/marketAction'

const ViewMarket = (props) => {

    useEffect(() => {

    },[])

    return (
        <div>
            
        </div>
    )
}

const mapStateToProps = state => {
    return({
        items: state.items,
    })
}

export default connect(mapStateToProps, { getMarket } )(ViewMarket)
