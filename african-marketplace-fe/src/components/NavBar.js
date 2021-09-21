import React from 'react';

import { AppBar, Box, Toolbar, Typography, Button } from '@material-ui/core';

const NavBar = () => {

    return (
    <nav>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 6 }}>
            African Marketplace
          </Typography>
          <Button href='/profile' color="inherit">Profile</Button>
          <Button href='/login' color="inherit">Login</Button>
          <Button href='logout' color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </nav>
        
        // <nav>
        //     <h1>African Marketplace</h1>
        //     <NavLink to='profile/'>Profile</NavLink>
        //     <NavLink to='/login'>Login</NavLink>
        //     <NavLink to='/logout'>Logout</NavLink>
            
       
        // </nav>
        
    )
}

export default NavBar
