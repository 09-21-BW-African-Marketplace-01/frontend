import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Button } from '@mui/material';

const ProfileItems = (props) => {
    const { item } = props;
    const { push } = useHistory();
        return (
            <div>
                <h3>{item.item_name}</h3>
                <h4>{item.item_description}</h4>
                <h4>${item.item_price}</h4>
                <Button onClick={push('/')}>Edit</Button>
            </div>
        )}

const Profile = (props) => {
    const id = localStorage.getItem('user_id');
    const [marketInfo, setMarketInfo] = useState({});
    let marketItems = marketInfo.items;

    useEffect(() =>{
        axios.get(`https://back-end-african-market.herokuapp.com/api/markets/${id}`)
        .then(resp => {
            console.log(resp.data)
            setMarketInfo(resp.data)
        })
        .catch(err=>{
            console.error(err);
        })
    },[])

    console.log(marketItems)

    return(
        <div className='profile-card'> 
            <h1>It's good to see you back {marketInfo.name}</h1>
            <h2>{marketInfo.market_name}</h2>
            {/* {marketItems.map(item => {
                console.log(item)
                console.log('checking id', id)
            })} */}
        </div>
    )
}
export default Profile;
