import React, { useState } from 'react';
import { 
    Button,
    Avatar,
    CssBaseline,
    TextField,
    Link,
    Grid,
    Box,
    Typography,
    Container
 } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import  { createTheme, ThemeProvider } from '@material-ui/core/styles';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const theme = createTheme();

const Register = () => {
    
    const initialState = {
        username: '',
        name: '',
        password: ''
    };

    const [newUser, setNewUser] = useState(initialState);

    const { push } = useHistory();
    
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
                push('/profile')

            })
            .catch()
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  value={newUser.name}
                  onChange={handleChange}
                  autoComplete="name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={newUser.username}
                  onChange={handleChange}
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={newUser.password}
                  onChange={handleChange}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    )
}

export default Register;