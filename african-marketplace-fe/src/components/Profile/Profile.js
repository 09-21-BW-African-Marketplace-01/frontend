import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import ProfileDisplay from './ProfileDisplay';
import { fetchUserStart, fetchUserSuccess, fetchUserFail } from './../../actions/userMarketAction'


const Profile = (props) => {
    const userMarket = props.userMarket.userMarket;
    const { fetchUserStart, fetchUserSuccess, fetchUserFail} = props;
    // const error = props.userMarket.error;
    // const userMarketItems= userMarket.items;
 
    useEffect(() =>{
        axios.get(`https://back-end-african-market.herokuapp.com/api/markets/${userMarket.user_id}`)
        .then(resp => {
            fetchUserStart();
            fetchUserSuccess(resp.data)
        })
        .catch(err=>{
            fetchUserFail('No Markets to Display');
        })
    },[])

    return(
        <ProfileDisplay />
    )
}

const mapStateToProps = (state) => {
    return({
        userMarket: state.userMarket
    })
}

export default connect(mapStateToProps, { fetchUserStart, fetchUserSuccess, fetchUserFail })(Profile);