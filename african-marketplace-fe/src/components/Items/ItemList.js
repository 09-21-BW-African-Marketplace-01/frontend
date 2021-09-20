import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchItems } from '../../actions'

const ItemList = (props) => {
    const{items, isFetching, error, fetchItems} = props

    useEffect(() => {
        fetchItems()
    },[])

    if(isFetching){
        return <h3>Fetching data...</h3>
    }

    if (error) {
        return <h1>ERROR: {error}</h1>
    }

    console.log(items)

    return (
        <div>
            {
                items.map((item, idx) => {
                    return(
                        <div key={idx}>
                            <p>{item.item_name}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = state => {
    return({
        items: state.items,
        isFetching: state.isFetching,
        error: state.error
    })
}

export default connect(mapStateToProps, {fetchItems})(ItemList)
