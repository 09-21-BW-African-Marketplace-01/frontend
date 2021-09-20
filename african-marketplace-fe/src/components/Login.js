import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

    const [credentials, setCredentials] = useState({
        username:'',
        password: ''
    })

    let history = useHistory();

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value;
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(credentials)
        //axios.post goes here + localStorage setItem
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input 
                type='text'
                name='username'
                value={'christina'}
                placeholder='username'
                onChange={handleChange}
                />

                <input 
                type
                name
                value
                placeholder
                onChange={handleChange}
                />
                <button>Log in</button>
            </form>
            
        </div>
    )
}

export default Login
