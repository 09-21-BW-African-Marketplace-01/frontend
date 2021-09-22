import React from 'react';

import { AppBar, Box, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  buttons: {
    display:'flex',
    justifyContent:'flex-end',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems:'center',
  }
})



const NavBar = () => {
  const classes = useStyles();
  const isLoggedIn = localStorage.getItem('token'); 
    return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className={classes.navbar}>
          <div className={classes.marketplace}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            African Marketplace
            </Typography>
          </div>

          <div className={classes.buttons}>
            {isLoggedIn ? <Button href='/profile' color="inherit">Profile</Button> : ''}
            <Button href='/login' color="inherit">Login</Button>
            <Button href='/logout' color="inherit">Logout</Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
        
    )
}

export default NavBar
