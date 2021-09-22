import React, { useState } from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';

const Register = () => {
    
    const initialState = {
        username: '',
        name: '',
        password: ''
    };

    const [newUser, setNewUser] = useState(initialState);
    
    const handleChange = (e) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://back-end-african-market.herokuapp.com/api/users/register', newUser)
            .then(resp => {
                
            })
            .catch(err => {

            })
    }

    return (
        <div>
            <form>
                <input 
                type='text'
                name='username'
                value={newUser.username}
                placeholder='Username'
                onChange={handleChange}
                />
                <input 
                 type='text'
                 name='storeName'
                 value={newUser.name}
                 placeholder='Store Name'
                 onChange={handleChange}
                />
                <input 
                 type='password'
                 name='password'
                 value={newUser.password}
                 placeholder='username'
                 onChange={handleChange}
                />
                <Button onClick={handleSubmit}>Register</Button>
            </form>
        </div>
    )
}

export default Register;