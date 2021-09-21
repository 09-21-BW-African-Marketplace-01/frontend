import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchItems } from '../../actions'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      minWidth: 300,
    },
    title: {
      fontSize: '1rem',
    },
    div: {
        display: 'flex',
        flexFlow: 'row wrap',
        width: '100%',
    },
  });

const ItemCard = (props) => {
    const classes = useStyles();
    const{items, isFetching, error, fetchItems} = props


    useEffect(() => {
        fetchItems()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    if(isFetching){
        return <h3>Fetching data...</h3>
    }

    return (
        
        <div className={classes.div}>
            {
                error && <div>Error: {error}</div>
            }
            {
                items.map((item, idx) => {
                    return(
                    <Card className={classes.root} key={idx}>
                        <CardContent className={classes.title}>
                            <Typography variant="h6" component="h6" className={classes.title}>
                               {item.market_name}
                            </Typography>
                            <Typography variant="body2" component="p" className={classes.body}>
                             {item.item_name}: ${item.item_price}
                            </Typography>
                        </CardContent>
                        <CardActions className={classes.cardActions}>
                            <Button size="small" className={classes.button}>Visit This market</Button>
                        </CardActions>
                    </Card>
                    )
                })
            }

        </div>
    )
}

const mapStateToProps = state => {
    return({
        items: state.items,
        isFetching: state.isFetching,
        error: state.error
    })
}

export default connect(mapStateToProps, { fetchItems })(ItemCard)
