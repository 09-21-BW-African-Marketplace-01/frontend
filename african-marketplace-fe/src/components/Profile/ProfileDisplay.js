import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ProfileItem from './ProfileItem';
import AddItem from '../Items/AddItem';
import CreateMarket from './CreateMarket';

const useStyles = makeStyles({
    div: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: '20px'
    },
  });

const ProfileDisplay = (props) => {
    const userMarket = props.userMarket.userMarket;
    const error = props.userMarket.error;
    const userMarketItems= userMarket.items;
    const classes = useStyles();
    const { push } = useHistory();

    const [toggle, setToggle] = useState(false)
    console.log('profile display', userMarket)


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
            <div className='display-success'>
                <h1>It's good to see you back {userMarket.name}</h1>
                <h2>{userMarket.market_name}</h2>
                {
                    <AddItem id={id}/>
                }
                <div className={classesSuccess.div} >
                    {userMarketItems.map(item => {
                        return <ProfileItem key={item.item_id} itemId={item.item_id} item={item}/>
                    })}
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