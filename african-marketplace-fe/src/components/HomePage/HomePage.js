import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Carousel from './Carousel';

const useStyles = makeStyles({
    root: {
      textAlign: 'center',
      marginBottom: '1px'
    }
})

const HomePage = () => {
    const classes = useStyles();

    return (
        <div>
            <h1 className={classes.root}>Welcome to the African Marketplace!</h1>
            <Carousel/>
        </div>
    )
}

export default HomePage
