import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const CreateMarket = () => {
    const { push } = useHistory();
    const [market, setMarket] = useState({
        market_name:'',
    });

    const handleChange = (e) => {
        setMarket({
            ...market,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(' https://back-end-african-market.herokuapp.com/api/markets/', market)
            .then(resp => {
                console.log(resp.data)
            })
            .catch(err => {
                console.error(err)
            })
    }


    return (
        <div>
            <form>
            <label>Market Name: </label>
            <input 
                value={market.name}
                onChange={handleChange}
                autoComplete="storename"
                name="market_name"
                required
                fullWidth
                id="market_name"
                label="MarketName"
                autoFocus
            />
            <Button onClick={handleSubmit}>Create Market</Button>
            <Button onClick={()=>push('/profile')}>Cancel</Button>
            </form>
        </div>
    )
}

export default CreateMarket;