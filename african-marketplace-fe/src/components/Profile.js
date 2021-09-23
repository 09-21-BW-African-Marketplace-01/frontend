import React, { useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from '@mui/material';

import { fetchUserStart, fetchUserSuccess, fetchUserFail } from '../actions/userMarketAction';


const Profile = (props) => {
    const { push } = useHistory();
    const userMarket = props.userMarket.userMarket;
    const userMarketItems= userMarket.items;
 
    useEffect(() =>{
        axios.get(`https://back-end-african-market.herokuapp.com/api/markets/${userMarket.user_id}`)
        .then(resp => {
            props.fetchUserStart();
            props.fetchUserSuccess(resp.data)
        })
        .catch(err=>{
            props.fetchUserFail(err);
        })
    },[])

    return(
        <div className='profile-card'> 
            <h1>It's good to see you back {userMarket.name}</h1>
            <h2>{userMarket.market_name}</h2>
            {userMarketItems.map(item => {
                return(<div>
                    <h3>{item.item_name}</h3>
                    <h4>{item.item_description}</h4>
                    <h4>${item.item_price}</h4>
                    <Button>Edit</Button>
                </div>)
                
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return({
        userMarket: state.userMarket
    })

}

export default connect(mapStateToProps, { fetchUserStart, fetchUserSuccess, fetchUserFail })(Profile);
