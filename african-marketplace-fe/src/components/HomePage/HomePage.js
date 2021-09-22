import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Carousel from './Carousel';
import { createTheme, ThemeProvider } from '@material-ui/core';



const theme = createTheme({
    typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(',')
}})
    


const useStyles = makeStyles({
    root: {
      textAlign: 'center',
      marginBottom: '15px',
      fontFamily: ['Roboto', 'sans-serif']
    }
})

const HomePage = () => {
    const classes = useStyles();

    return (
        <>
        <ThemeProvider theme={theme}>
            <h1 className={classes.root}>Welcome to the African Marketplace!</h1>
            <div>
                <Carousel/>
            </div>
        </ThemeProvider>
        </>
    )
}

export default HomePage
