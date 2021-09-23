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
	}, [])

    if(isFetching){
        return <h3>Fetching data...</h3>
    }
    
    const handleChange = e => {
        setItem({
            ...setItem,
            [e.target.name]:e.target.value
        })
    }

    console.log(item)

    const handleSubmit = (e) => {
		e.preventDefault();
		axios.put(``, item)
			.then(res => {
				console.log(res)
				setItem(res.data)
			})
			.catch(err => {
				console.log(err)
			})
	}


    

    return (
        <>
        
        {/* {
            market.items.map((details, idx) => {
                return(
                <form onSubmit={handleSubmit} style={{marginTop: '20px'}}>
                    <div key={idx}>
                            <TextField 
                                value={details.item_description} 
                                onChange={handleChange} 
                                name="item_description" 
                                label="Item Description"
                                type="text"
                                style={{margin: '5px'}}
                            />   
                            <TextField 
                                value={details.item_name} 
                                onChange={handleChange} 
                                name="item_name" 
                                type="text"
                                label='Item Name'
                                style={{margin: '5px'}}
                            />      
                            <TextField 
                                value={details.item_price} 
                                onChange={handleChange} 
                                name="item_price" 
                                type="number"
                                label='Price'
                                style={{margin: '5px'}}
                            />  
                        </div>
                    <button>Submit</button>
                    </form> 
                )
            })
        } */}

    <form onSubmit={handleSubmit}>
            <label>Item Description</label>
                <input 
                    value={item.item_description} 
                    onChange={handleChange} 
                    name="item_description" 
                    type="text"
                />   

            <label>Item Name</label>
                <input 
                    value={item.item_name} 
                    onChange={handleChange} 
                    name="item_name" 
                    type="text"
                />      

            <label>Item Price</label>
                <input 
                    value={item.item_price} 
                    onChange={handleChange} 
                    name="item_price" 
                    type="number"
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