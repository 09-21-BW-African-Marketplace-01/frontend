import React from 'react';

import { AppBar, Box, Toolbar, Typography, Button, IconButton } from '@material-ui/core';

import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {

    return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            African Marketplace
          </Typography>
          <Button href='/profile' color="inherit">Profile</Button>
          <Button href='/login' color="inherit">Login</Button>
          <Button href='/logout' color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
        
    )
}

export default NavBar
