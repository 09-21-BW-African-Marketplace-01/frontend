import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router'
import { getMarket } from '../actions/marketAction'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
    root: {
      minWidth: 300,
      margin: 2,
    },
    title: {
      fontSize: '1rem',
    },
  });


const ViewMarket = (props) => {
    const classes = useStyles();
    const { getMarket, market, error, isFetching} = props
    const{ id } = useParams()


    useEffect(() => {
        getMarket(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    if(isFetching){
        return <h3>Fetching data...</h3>
    }


    return (
        <div>
            <h1>Welcome to {market.market_name}</h1>
            {
                error && <div>Error: {error}</div>
            }
            {
                market.items.map((items, idx) => {
                    return(
                    <Card className={classes.root} key={idx}>
                        <CardContent className={classes.title}>
                            <Typography variant="h6" component="h6" className={classes.title}>
                                {items.item_name} ${items.item_price}
                            </Typography>
                            <Typography variant="body2" component="p" className={classes.body}>
                                {items.item_description}
                            </Typography>
                        </CardContent>
                    </Card>
                    )
                })
            }

        </div>
    )
}

const mapStateToProps = state => {
    return({
        market: state.reducerMarket.market,
        isFetching: state.reducerMarket.isFetching,
        error: state.reducerMarket.error,
        items: state.reducerItems.items,
    })
}

export default connect(mapStateToProps, { getMarket } )(ViewMarket)
