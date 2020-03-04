import React from 'react'
import { Card, CardContent, Typography, makeStyles, Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(2),
        minHeight: '150px'
    }
}))

const ListingItem = ({ listing }) => {
    const { id, user_id, username, location, item, description, price } = listing;
    const classes = useStyles();

    return (
        <Grid item xs={12} md={6} lg={3} >
            <Card className={classes.root}>
                <CardContent>
                    <Grid container justify='space-between'>
                        <Grid item>
                            <Typography gutterBottom variant="h5" component="h2">
                                {item}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {description}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                User: {username}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {location}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1">
                                ${price.toFixed(2)}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default ListingItem
