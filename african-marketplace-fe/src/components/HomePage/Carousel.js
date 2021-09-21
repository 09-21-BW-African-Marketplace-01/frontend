import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { images } from './CarouselData';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import Arrowbackios from '@material-ui/icons/ArrowBackIos';


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
        backgroundColor: 'rgb(0,0,0,0.6)',
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
        backgroundColor: 'rgb(0,0,0,0.6)',
        display: 'grid',
        placeItems: 'center',
        color: 'white',
        cursor: 'pointer',
    },
})

const Carousel = () => {
    const classes = useStyles();

    const [currImg, setCurrImg] = useState(0)

    return (
        <div className={classes.carousel}>
            <div className={classes.carouselInner} style={{backgroundImage: `url(${images[currImg].img})`}}>

                <div className={classes.left} onClick={() => { currImg > 0 && setCurrImg(currImg -1)}}>
                    <Arrowbackios />
                </div>
                <div className={classes.center}></div>
                <div className={classes.right}>
                    <ArrowForwardIosIcon onClick={() => { currImg < images.length -1 && setCurrImg(currImg +1)}}/>
                </div>

            </div>
        </div>
    )
}

export default Carousel
