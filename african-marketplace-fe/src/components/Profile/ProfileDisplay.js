import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ProfileItem from './ProfileItem';
import AddItem from '../Items/AddItem';
import CreateMarket from './CreateMarket';

const useStyles = makeStyles({
    displaySuccess:{
        display:'flex',
        border:'1px red, solid'
    },
    div: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'flex-start',
        width: '100%',
        margin: '4rem',
    },
    shopCard:{
        display:'flex',
        flexDirection:'column',
        flexWrap:'wrap',
        alignItems:'center',
        justifyContent:'flex-start',
        padding:'3rem',
        margin:'4rem',
        width:'100rem'

    },
   
  });

const ProfileDisplay = (props) => {
    const userMarket = props.userMarket.userMarket;
    const error = props.userMarket.error;
    const userMarketItems= userMarket.items;
    const classes = useStyles();
    const [toggle, setToggle] = useState(false);

        const DisplayError = () => {
            return (
                <div className='display-error' >
                    {toggle ? '' : <h1>{error}</h1>}
                    {toggle ? '' :<Button onClick={()=>setToggle(!toggle)}
                     style={{
                        borderRadius: 35,
                        backgroundColor: "#21b6ae",
                        padding: "18px 36px",
                        fontSize: "18px"
                    }}
                        variant="contained">
                        Create Market
                    </Button>}
                    { toggle ? <CreateMarket setToggle={setToggle} toggle={toggle}/> : ''}
                </div>           
            )
    }

    const DisplaySuccess = () => {
        const classesSuccess = useStyles();
        const id = localStorage.getItem('user_id')
        return(
            <div className={classesSuccess.displaySucccess}>
                <div className={classesSuccess.greeting}>
                <Typography component='h2' variant='h2'>It's good to see you back {userMarket.name}</Typography>
                </div>

                <div className={classesSuccess.shopCard} >
                    <Typography component='h2' variant='h3'>{userMarket.market_name}</Typography>
                    {
                        <AddItem id={id}/>
                    }
                    <div className={classesSuccess.div} >
                        {userMarketItems.map(item => {
                            return <ProfileItem key={item.item_id} itemId={item.item_id} item={item}/>
                        })}
                    </div>
                </div>
                
            </div>
        )
    }

    return (
    <div className={classes.div}>
        {error ? <DisplayError /> : <DisplaySuccess />}
    </div>)
}

const mapStateToProps = (state) => {
    return({
        userMarket: state.userMarket
    })
}
export default connect(mapStateToProps) (ProfileDisplay);