import React, { useState } from 'react'
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

    const [credentials, setCredentials] = useState({
        username:'',
        password: ''
    })

    const [error, setError]= useState ('');

    let history = useHistory();

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://back-end-african-market.herokuapp.com/api/users/login', credentials)
            .then(resp => {
                localStorage.setItem('token', resp.data.token)
                setCredentials({
                    username:'',
                    password:''
                });
                setError('');
                history.push('/')
            })
            .catch(err => {
                setError(err);
            })
    }

    return (
        <div>
            <form>
                <label>Username: </label>
                <input 
                type='text'
                name='username'
                value={credentials.username}
                placeholder='username'
                onChange={handleChange}
                />

                <label>Password: </label>
                <input 
                type='password'
                name='password'
                value={credentials.password}
                placeholder='password'
                onChange={handleChange}
                />
                <Button onClick={handleSubmit}>Log in</Button>
                {error ? <p>Error!</p> : ''}
            </form>
            
        </div>
    )
}

export default Login
