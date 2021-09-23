import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import { connect } from 'react-redux';




const EditItem = (props) => {
    const { isFetching, itemId } = props
    
    const [item, setItem] =useState({
        item_description: '',
        item_name: '',
        item_price: ''
    })

       
    useEffect(() => {
        axios.get(`https://back-end-african-market.herokuapp.com/api/items/${itemId}`)
            .then(res => {
                setItem(res.data)
            })
            .catch(err => {
                console.log(err)
            })
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

    if(isFetching){
        return <h3>Fetching data...</h3>
    }
    
    const handleChange = e => {
        setItem({
            ...item,
            [e.target.name]:e.target.value
        })
    }


    const handleSubmit = (e) => {
		e.preventDefault();
		axios.put(`https://back-end-african-market.herokuapp.com/api/items/${itemId}`, item)
			.then(res => {
				setItem(res.data)
			})
			.catch(err => {
				console.log(err)
			})
	}
 

    return (
        <>
    <form onSubmit={handleSubmit}>
                <TextField 
                    value={item.item_description} 
                    onChange={handleChange} 
                    name="item_description" 
                    type="text"
                    placeholder="Item Description"
                    style={{margin: '5px'}}
                />   

                <TextField 
                    value={item.item_name} 
                    onChange={handleChange} 
                    name="item_name" 
                    type="text"
                    placeholder='Item Name'
                    style={{margin: '5px'}}
                />      

                <TextField 
                    value={item.item_price} 
                    onChange={handleChange} 
                    name="item_price" 
                    type="number"
                    placeholder='Price'
                    style={{margin: '5px'}}
                />  
                
        <button>Submit</button>
    </form>
    </>
    )
}

const mapStateToProps = state => {
    return({
        market: state.reducerMarket.market,
        isFetching: state.reducerMarket.isFetching,
        error: state.reducerMarket.error,
        items: state.reducerItems.items,
    })
}

export default connect(mapStateToProps)(EditItem)