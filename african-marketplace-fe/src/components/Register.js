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
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://back-end-african-market.herokuapp.com/api/users/register', newUser)
            .then(resp => {
                console.log('response!', resp.data)
            })
            .catch()
    }

    return (
        <div className='form-body'>
            <form>
                <label>Name: </label>
                    <input 
                    type='text'
                    name='name'
                    value={newUser.name}
                    placeholder='Name'
                    onChange={handleChange}
                    />
                <label>Username: </label>
                    <input 
                    type='text'
                    name='username'
                    value={newUser.username}
                    placeholder='Username'
                    onChange={handleChange}
                    />
                <label>Password: </label>
                    <input 
                    type='password'
                    name='password'
                    value={newUser.password}
                    placeholder='password'
                    onChange={handleChange}
                    />
                <Button onClick={handleSubmit}>Register</Button>
            </form>
        </div>
    )
}

export default Register;