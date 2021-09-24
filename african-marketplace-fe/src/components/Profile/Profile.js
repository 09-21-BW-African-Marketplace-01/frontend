import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import ProfileDisplay from './ProfileDisplay';

import { fetchUserMarker } from './../../actions/userMarketAction';

const Profile = (props) => {
    const userMarket = props.userMarket.userMarket;
    const { fetchUserMarker } = props;

     useEffect(() =>{
        fetchUserMarker(userMarket.user_id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

export default connect(mapStateToProps, { fetchUserMarker })(Profile);