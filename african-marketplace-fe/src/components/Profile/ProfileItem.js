import React from 'react';
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      minWidth: 300,
      margin: 2,
    },
    title: {
      fontSize: '1rem',
    },
  });

const ProfileItem = (props) => {
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
                <Button size="small" className={classes.button}>
                    Edit
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProfileItem;