import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { images } from './CarouselData';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import { Button } from '@material-ui/core';


const useStyles = makeStyles({
    carousel: {
      width: '100%',
      height: 400,
      backgroundColor: 'black',
    },
    carouselInner: {
        height: '100%',
        width: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
    },
    left: {
        flex: '1%',
        height: '100%',
        backgroundColor: 'rgb(0,0,0,0.5)',
        display: 'grid',
        placeItems: 'center',
        color: 'white',
        cursor: 'pointer',
    },
    center: {
        flex: '90%',
        height: '100%',
    },
    right: {
        flex: '1%',
        height: '100%',
        backgroundColor: 'rgb(0,0,0,0.5)',
        display: 'grid',
        placeItems: 'center',
        color: 'white',
        cursor: 'pointer',
    },
    buttonContainer: {
        position: 'relative',
        width: '100%',
        display: 'flex',
        alignitems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: 'green',
        color: 'white',
        margin: '0',
        position: 'absolute',
        top: '50%',
        msTransform: 'translateY(-50%)',
        transform: 'translateY(-50%)',
    },
})

const Carousel = () => {
    const classes = useStyles();

    const [currImg, setCurrImg] = useState(0)

    return (
        <div className={classes.carousel}>
            <div className={classes.carouselInner} style={{backgroundImage: `url(${images[currImg].img})`}}>
                <div className={classes.left} onClick={() => { currImg > 0 && setCurrImg(currImg -1)}}>
                    <ArrowBackIosIcon />
                </div>
                <div className={classes.center}></div>
                <div className={classes.right}>
                    <ArrowForwardIosIcon onClick={() => { currImg < images.length -1 && setCurrImg(currImg +1)}}/>
                </div>
            </div>
            <div className={classes.buttonContainer}>
                <Button variant="contained" className={classes.button}>Visit the marketplace</Button>
            </div>
        </div>
    )
}

export default Carousel
