import React, { useState } from 'react'
import axiosWithAuth from '../../utils/axiosWithAuth'
import TextField from '@mui/material/TextField';


const initialFormValues = {
    market_id: '',
    item_description: '',
    item_name: '',
    item_price: ''
}

const AddItem = (props) => {
    const [formValues, setFormValues] = useState(initialFormValues)
    const { id } = props


      
    const handleChange = e => {
        setFormValues({
            ...formValues,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        let newItem = {
            market_id: id,
            item_description: formValues.item_description,
            item_name: formValues.item_name,
            item_price: formValues.item_price
        }
        axiosWithAuth()
            .post('https://back-end-african-market.herokuapp.com/api/items/', newItem)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
        setFormValues(initialFormValues)
    }

    return (
        <>
        <h3>Add a new Item: </h3>
            <form onSubmit={handleSubmit}>
                <label>
                    <TextField 
                        type='text'
                        name='item_description'
                        value={formValues.item_description}
                        onChange={handleChange}
                        placeholder='description of item'
                    />
                </label>
                <label>
                    <TextField 
                        type='text'
                        name='item_name'
                        value={formValues.item_name}
                        onChange={handleChange}
                        placeholder='name of item'
                    />
                </label>
                <label>
                    <TextField 
                        type='number'
                        name='item_price'
                        value={formValues.item_price}
                        onChange={handleChange}
                        placeholder='price'
                    />
                </label>
                <input type="submit" value="Add"/>
            </form>
        </>
    )
}

export default AddItem

