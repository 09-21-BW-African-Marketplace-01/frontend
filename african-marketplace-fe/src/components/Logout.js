import React, { useEffect } from 'react';
import axiosWithAuth from './../utils/axiosWithAuth';

const Logout = (props) => {
    localStorage.removeItem('token');
    props.history.push('/')
    return (<div></div>)
}

export default Logout
