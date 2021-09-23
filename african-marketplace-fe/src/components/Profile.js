import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';


const Profile = (props) => {
    const { id } = useParams();
    const { isLoggedIn } = props;
    const { push } = useHistory();

    // useEffect(() =>{
    //     axios.get(`https://back-end-african-market.herokuapp.com/api/markets/${id}`)
    //     .then(resp => {
    //         console.log('profile resp', resp)
    //     })
    // },[])


    return(
        <div className='profile-card'>
            {isLoggedIn ? <h1>Logged in!</h1>: push('/')}
        </div>
    )
}
export default Profile;