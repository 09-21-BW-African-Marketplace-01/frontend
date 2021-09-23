import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import AddItem from '../Items/AddItem';
import ProfileItem from './ProfileItem';
import { fetchUserStart, fetchUserSuccess, fetchUserFail } from './../../actions/userMarketAction'


const Profile = (props) => {
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
            {
                <AddItem id={userMarket.user_id}/>
            }
            {userMarketItems.map(item => {
                return <ProfileItem key={item.item_id} item={item}/>
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
