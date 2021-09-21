import React, { useState } from 'react'
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
        console.log(credentials)
        axios.post('http://localhost:3300/api/users/login', credentials)
            .then(resp => {
                // console.log(resp.data.payload)
                localStorage.setItem('token', resp.data.payload)
                setCredentials({
                    username:'',
                    password:''
                });
                setError('');
            })
            .catch(err => {
                setError(err);
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input 
                type='text'
                name='username'
                value={credentials.username}
                placeholder='username'
                onChange={handleChange}
                />

                <input 
                type='password'
                name='password'
                value={credentials.password}
                placeholder='password'
                onChange={handleChange}
                />
                {error ? <p>Error!</p> : ''}
                <button>Log in</button>
            </form>
            
        </div>
    )
}

export default Login
