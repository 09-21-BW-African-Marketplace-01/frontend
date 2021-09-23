import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';


const EditItem = () => {

    const [item, setItem] =useState({
        market_name: '',
        item_description: '',
        item_name: '',
        item_price: ''
    })

    const id = localStorage.getItem('user_id')

    useEffect(() => {
		axios.get(`https://back-end-african-market.herokuapp.com/api/markets/${id}`)
			.then(res => {
				setItem(res.data)
			})
			.catch(err => {
				console.log(err)
			})
	}, [])

    const handleChange = e => {
        setItem({
            ...setItem,
            [e.target.name]:e.target.value
        })
    }

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

    // const { market_name, item_description, item_name, item_price } = item

    // console.log('this is the item log in edit',item)
    // console.log('this is the id log in edit', id)
    // console.log(item.items.map(details => details))

    

    return (
        <>
        <form onSubmit={handleSubmit} style={{marginTop: '20px'}}>
        {/* {
            item.items.map((details, idx) => {
                return(
                    <>
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
                </>
                )
            })
        } */}
        <button>Submit</button>
        </form> 
    {/* <form onSubmit={handleSubmit}>
            <label>Item Description</label>
                <input 
                    value={item_description} 
                    onChange={handleChange} 
                    name="item_description" 
                    type="text"
                />   

            <label>Item Name</label>
                <input 
                    value={item_name} 
                    onChange={handleChange} 
                    name="item_name" 
                    type="text"
                />      

            <label>Item Price</label>
                <input 
                    value={item_price} 
                    onChange={handleChange} 
                    name="item_price" 
                    type="number"
                />  
                
        <button>Submit</button>
    </form> */}
    </>
    )
}

export default EditItem