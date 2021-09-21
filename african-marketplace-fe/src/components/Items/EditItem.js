import axios from 'axios'
import React, { useEffect, useState } from 'react'

const EditItem = () => {

    const [item, setItem] =useState({
        market_name: '',
        item_description: '',
        item_name: '',
        item_price: ''
    })

    // useEffect(() => {
	// 	axios.get(``)
	// 		.then(res => {
	// 			setItem(res.data)
	// 		})
	// 		.catch(err => {
	// 			console.log(err)
	// 		})
	// }, [])

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

    const { market_name, item_description, item_name, item_price } = item

    return (
    <form onSubmit={handleSubmit}>
            <label>Market Name</label>
                <input value={market_name} onChange={handleChange} name="market_name" type="text"/>
            <label>Item Description</label>
            <input value={item_description} onChange={handleChange} name="item_description" type="text"/>    
                <label>Item Name</label>
            <input value={item_name} onChange={handleChange} name="item_name" type="text"/>       
                <label>Item Price</label>
            <input value={item_price} onChange={handleChange} name="item_price" type="number"/>  
        <button>Submit</button>
    </form>
    )
}

export default EditItem