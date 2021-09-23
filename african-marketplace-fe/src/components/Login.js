import React, { useState } from 'react'
import {
    Button,
    TextField,
    Grid,
    Paper,
    AppBar,
    Typography,
    Toolbar,
    Link,
    } from "@material-ui/core";
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
        <Grid container spacing={0} justify="center" direction="row">
        <Grid item>
        <Grid
        container
        direction="column"
        justify="center"
        spacing={2}
        className="login-form"
        >
        <Paper
        variant="elevation"
        elevation={2}
        className="login-background"
        >
        <Grid item>
        <Typography component="h1" variant="h5">
        Sign in
        </Typography>
        </Grid>
        <Grid item>
        <form onSubmit={handleSubmit}>
        <Grid container direction="column" spacing={2}>
        <Grid item>
        <TextField
        type="text"
        placeholder="Username"
        fullWidth
        name="username"
        variant="outlined"
        value={credentials.username}
        onChange={handleChange}
        required
        autoFocus
        />
        </Grid>
        <Grid item>
        <TextField
        type="password"
        placeholder="Password"
        fullWidth
        name="password"
        variant="outlined"
        value={credentials.password}
        onChange={handleChange}
        required
        />
        </Grid>
        <Grid item>
        <Button
        variant="contained"
        color="primary"
        type="submit"
        className="button-block"
        >
        Submit
        </Button>
        {error ? <p>Your username or password is incorrect</p> : ''}
        </Grid>
        </Grid>
        </form>
        </Grid>
        <Grid item>
        <Link href="/register" variant="body2">
        Need an account? Sign up now
        </Link>
        </Grid>
        </Paper>
        </Grid>
        </Grid>
        </Grid>
        </div>


        // <div>
        //     <form>
        //         <label>Username: </label>
        //         <input 
        //         type='text'
        //         name='username'
        //         value={credentials.username}
        //         placeholder='username'
        //         onChange={handleChange}
        //         />

        //         <label>Password: </label>
        //         <input 
        //         type='password'
        //         name='password'
        //         value={credentials.password}
        //         placeholder='password'
        //         onChange={handleChange}
        //         />
        //         <Button onClick={handleSubmit}>Log in</Button>
        //         {error ? <p>Error!</p> : ''}
        //     </form>
            
        // </div>
    )
}

export default Login
