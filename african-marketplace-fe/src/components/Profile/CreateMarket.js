import React, { useState } from 'react';
import { 
    Button,
    CssBaseline,
    TextField,
    Grid,
    Box,
    Typography,
    Container
 } from '@mui/material';
 import  { createTheme, ThemeProvider } from '@material-ui/core/styles';

import axios from 'axios';
import { useHistory } from 'react-router-dom';

const theme = createTheme();

const CreateMarket = (props) => {
    const { push } = useHistory();
    const [market, setMarket] = useState({
        market_name:'',
        user_id:localStorage.getItem('user_id')
    });

    const handleChange = (e) => {
        setMarket({
            ...market,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://back-end-african-market.herokuapp.com/api/markets/', market)
            .then(resp => {
                push('/profile')
            })
            .catch(err => {
                console.error(err)
            })
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
          <Typography component="h1" variant="h5">
            Create Your Market
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  value={market.market_name}
                  onChange={handleChange}
                  autoComplete="marketname"
                  name="market_name"
                  required
                  fullWidth
                  id="marketname"
                  label="Market Name"
                  autoFocus
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create
            </Button>
            <Button
              onClick={()=>props.setToggle(!props.toggle)}
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    )
}

export default CreateMarket;



