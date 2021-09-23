import React, { useState } from 'react';
import { Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import EditItem from '../Items/EditItem';

const useStyles = makeStyles({
    root: {
      minWidth: 300,
      margin: 2,
      display: 'flex',
      flexFlow: 'row wrap'
    },
    title: {
      fontSize: '1rem',
    },
    button: {
        display: 'inline-block',
        color: '#444',
        border: '1px solid #CCC',
        boxShadow: '0 0 5px -1px rgba(0,0,0,0.2)',
        cursor: 'pointer',
        verticalAlign: 'middle',
        padding: '5px',
        textAlign: 'center'
    },
  });

const ProfileItem = (props) => {
    const [showResults, setShowResults] = useState(false)
    const onClick = () => setShowResults(true)

    

    const { item } = props;
    const classes = useStyles();
    return (
        <Card className={classes.root} >
            <CardContent className={classes.title}>
                <Typography variant="h6" component="h6" className={classes.title}>
                    {item.market_name}
                </Typography>
                <Typography variant="body2" component="p" className={classes.body}>
                    {item.item_name}: ${item.item_price}
                </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <div size="small" className={classes.button} value='Edit' onClick={onClick}>
                    {showResults ? <EditItem itemId={item.item_id}/> : <div>Edit</div>}
                </div>
            </CardActions>
        </Card>
    )
}

export default ProfileItem;