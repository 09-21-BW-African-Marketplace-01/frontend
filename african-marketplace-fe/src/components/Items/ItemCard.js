import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchItems } from '../../actions'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      minWidth: 300,
      margin: 2,
    },
    title: {
      fontSize: '1rem',
    },
    div: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: '20px'
    },
  });

const ItemCard = (props) => {
    const classes = useStyles();
    const{ items, isFetching, error, fetchItems } = props
    let match = useRouteMatch()

    useEffect(() => {
        fetchItems()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    if(isFetching){
        return <h3>Fetching data...</h3>
    }

    return (
        
        <div className={classes.div} >
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
                            <Button size="small" className={classes.button}>
                                <Link to={`${match.path}/${item.market_id}`} style={{textDecoration: 'none'}}> Visit This market </Link>
                            </Button>
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
        items: state.reducerItems.items,
        isFetching: state.reducerItems.isFetching,
        error: state.reducerItems.error
    })
}

export default connect(mapStateToProps, { fetchItems })(ItemCard)
