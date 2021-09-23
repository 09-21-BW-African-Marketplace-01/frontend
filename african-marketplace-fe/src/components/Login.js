import React, { useState } from 'react'
import {
    Button,
    TextField,
    Grid,
    Paper,
    Typography,
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
                console.log('login resp', resp.data)
                localStorage.setItem('token', resp.data.token)
                localStorage.setItem('user_id',resp.data.user_id)
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
    )
}

export default Login
